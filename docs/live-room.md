# Arena Live Room — Spec

Real-time synchronous multiplayer quiz. All players see the same question at the same time; the host controls pacing. Kahoot-style.

---

## Firestore data model

```
rooms/{roomCode}          (6-char uppercase, same genCode() as challenges)
  state:        'lobby' | 'question' | 'reveal' | 'done'
  board:        string
  grade:        string
  subjects:     string[]
  questionIds:  string[]   (ordered, 5–20 questions chosen by host at creation)
  currentQ:     number     (0-based index, -1 in lobby)
  timerEnd:     number     (epoch ms when current question closes; 0 in lobby/reveal)
  timerSecs:    number     (per-question seconds, host-chosen: 15/20/30/45)
  createdAt:    number
  hostUid:      string | null
  hostName:     string
  players:      { [uid-or-anon-id]: { name, joinedAt } }
  answers:      { [uid-or-anon-id]: { [qIdx]: answerIdx } }   (written by each player)
  scores:       { [uid-or-anon-id]: number }   (accumulated, written by host client)
```

### Security rules (to add alongside challenges rules)

```
match /rooms/{code} {
  allow read: if true;
  allow create: if true;
  allow update: if true;
}
```

Scores are computed client-side by the host and written back — acceptable for a study app where cheating incentive is low. No Cloud Functions needed.

---

## Question selection

Host picks subjects on the setup screen (same checkboxes as free run), sets question count (5/10/15/20) and seconds-per-question (15/20/30/45). Questions are randomly sampled from those banks and stored as `questionIds` in the room doc at creation — identical to async challenge codes but chosen fresh for each live room.

---

## Player identity

- Logged-in user: `uid` from Firebase Auth; display name from profile nickname → `displayName` → email prefix.
- Guest (not logged in): `anon-<8 random chars>` generated client-side, stored in `sessionStorage` so it survives page navigations within the session but is discarded after.

---

## Screens and flow

### 1. Host flow (creates the room)

```
Arena setup screen
  → "⚡ Live Room" button
  → Live Room setup panel (same subject checkboxes, question count, timer speed)
  → [Create Room] button
  → Creates Firestore doc, navigates to #/live-room/{CODE}
  → Lobby screen: shows code prominently, player list (live), [Start Game] button
  → On [Start Game]: sets state='question', currentQ=0, timerEnd=now+timerSecs*1000
  → After timerEnd: host client detects expiry, sets state='reveal', writes scores for Q0
  → [Next] button: increments currentQ (or state='done' if last question)
  → Repeat until done
```

### 2. Player flow (joins)

```
Arena setup screen
  → "Join a Live Room" section (separate from async challenge codes)
  → Enter 6-letter code → [Join]
  → Writes self into rooms/{code}/players map
  → Navigates to #/live-room/{CODE}
  → Lobby screen: waits (live listener), sees host's name + player list
  → When state flips to 'question': question appears + local countdown (driven by timerEnd, not an interval)
  → Player taps answer → writes to rooms/{code}/answers/{uid}/{qIdx}  (hidden until reveal)
  → When state flips to 'reveal': correct answer highlighted, per-player result shown
  → When state flips to 'done': final leaderboard
```

### 3. Screen: Lobby (`#/live-room/{CODE}`, state='lobby')

```
┌─────────────────────────────────────┐
│  ⚡ Live Room                        │
│  Room code: ABCXYZ  [Copy]          │
│                                     │
│  Players (3)                        │
│  • Ravi (host)                      │
│  • Priya                            │
│  • Arjun                            │
│                                     │
│  [Start Game]   ← host only         │
│  [Leave]                            │
└─────────────────────────────────────┘
```

### 4. Screen: Question (`#/live-room/{CODE}`, state='question')

```
┌─────────────────────────────────────┐
│  Q 3 / 10          ████░░░  12s     │
│                                     │
│  Which organelle produces ATP?      │
│                                     │
│  [A] Nucleus       [B] Mitochondria │
│  [C] Ribosome      [D] Vacuole      │
│                                     │
│  3 / 5 answered ●●●○○               │
└─────────────────────────────────────┘
```

Timer is derived from `timerEnd - Date.now()`, updated every second. "N answered" count is the number of entries in `answers/{qIdx}` — visible to all, no spoilers (answers hidden until reveal).

After the player taps an answer, their buttons grey out. They see a waiting indicator until state flips to 'reveal'.

### 5. Screen: Reveal (`#/live-room/{CODE}`, state='reveal')

Shows correct answer highlighted. Per-player status: ✓ / ✗ / — (no answer). Running leaderboard. Host sees [Next Question] / [End Game] button.

### 6. Screen: Done (`#/live-room/{CODE}`, state='done')

Final leaderboard: rank, name, score, questions correct. [Play Again] (new room, same settings) / [Back to Arena].

---

## Timer sync

`timerEnd` is an absolute epoch ms stored in Firestore. Every client computes `remaining = timerEnd - Date.now()` on each tick. This avoids drift from interval skew across devices.

Host client runs a `setTimeout(timerEnd - Date.now())` and when it fires, transitions state to 'reveal' and writes scores. Players' timers are display-only — if the host is slow, a player who answered late but before the host's write still gets credit (their answer is already in Firestore). A player's answer written after `timerEnd` is ignored by the score calculation.

---

## Score calculation (host-side)

For question at index `qIdx`:
- `secondsRemaining = max(0, timerEnd - answers[uid][qIdx].answeredAt) / 1000`  
  (store `answeredAt: serverTimestamp()` alongside `answerIdx`)
- `pts = correct ? round(100 + secondsRemaining * 5) : 0`  (no difficulty/combo multiplier — simpler for live)
- Host writes `scores[uid] += pts` for each player.

---

## Implementation plan

1. **Firestore rules** — add `rooms/{code}` allow read/write: true (same as challenges).
2. **`public/live-room.js`** — new sibling file (keeps arena.js clean):
   - `liveGenCode()`, `liveCreateRoom()`, `liveJoinRoom(code)`, `liveStartGame()`, `liveAnswer(idx)`, `liveNext()`, `liveEnd()`
   - Firestore listener: `onSnapshot(roomRef, doc => liveHandleUpdate(doc.data()))`
   - Render functions: `renderLiveLobby()`, `renderLiveQuestion()`, `renderLiveReveal()`, `renderLiveDone()`
   - Routes: `live-lobby`, `live-room` (question/reveal share one route, state-driven)
3. **arena.js** — add "⚡ Live Room" button and "Join a Live Room" entry on setup screen.
4. **index.html** — add `<script src="live-room.js?v=1">`.
5. **style.css** — live room styles (lobby player list, question layout, answer pills, leaderboard).
6. **Firestore rules** — update in Firebase console.

---

## Constraints

- No Cloud Functions — host client does all state transitions and score writes.
- If host disconnects mid-game, the room freezes. Acceptable for MVP; a "take over as host" button can be added later.
- Room docs are not cleaned up automatically (no Cloud Functions). Old rooms expire naturally as Firestore free-tier storage fills and the 7-day read window makes them irrelevant. A manual cleanup script can run periodically.
- Login is optional — guests can play as anon but their scores aren't tied to their Rise progress.
- No spaced-repetition integration for live rooms (too complex to merge across players with different progress states).
