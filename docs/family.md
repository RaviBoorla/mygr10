# Family — parent/guardian linking, digests, assignments

Status: **Spec only, not built.** Written before implementation, per this
repo's convention (see `arena.md`).

## Why

Mygr10 today is entirely child-facing: everything lives in the browser
(`localStorage` + optional per-user Firestore sync), and nobody but the
student ever sees the result of a session. Family wants a parent/guardian to
get a passive daily/weekly signal of how their child is doing, and an
occasional active one (assign a timed practice set and see the result) —
without the parent having to open the child's device or account.

**The tone matters as much as the data.** This feature must never present a
child as bad/dumb/weak at something. It exists to help a parent build the
child's strengths and support them, not to produce a report card of
failures. See "Tone and framing" below — that section is as much a hard
constraint as anything in the section that follows.

## Hard constraints

1. **This needs a real backend for the first time.** Cron-triggered email
   and parent-initiated assignments must run independent of whether either
   party's browser is open. New Cloudflare Worker (`workers/family/`,
   separate from the static `public/` Pages deployment) with both a Cron
   Trigger (digests) and an HTTP route (transactional sends — see "Invite
   flow"). Firestore stays the data store (project already exists,
   `rise-511c6`).
2. **New file(s), not more `app.js`.** Family UI lives in `public/family.js`
   (invite banner, assignment inbox/creator, family section of Profile
   modal) and a viewer-role branch inside the existing Progress screen
   rendering in `app.js` — see "Embedding into Progress" below. Do not grow
   `app.js` itself beyond that branch.
3. **No new route.** No `#/family` page. The parent/child summary lives
   inside the existing `#/progress` screen (see below), not a popover and
   not a separate page — the Progress screen today "doesn't do justice" to
   this data, so it gets rebuilt to carry it, rather than forking a
   duplicate view.
4. **Opt-in is explicit.** No guardian receives email until they have
   accepted a family link AND separately toggled the digest on. Declining/
   ignoring an invite sends nothing, ever.
5. **No nudge on inactivity.** A day with no child activity produces no
   digest email for that day — silence, not a guilt message.
6. **Email only — no SMS.** There is no SMS backend and none is being
   added; phone numbers are not collected anywhere in this feature. All
   digest and notification delivery is email via Resend.
7. **Both sides are full Firebase Auth accounts, and both must be email-
   verified before a family link can be accepted.** No guest/anonymous
   parent view, no shareable magic link. See "Email verification
   prerequisite" below — this is a gap in the app today, not just this
   feature, and needs fixing first.
8. **A parent is not a student.** Guardian is a distinct, exclusive account
   role — a parent account never has grade/board practice history, never
   appears on the student side of a `familyLinks` doc, and never sees the
   grade/board picker or any subject/mock/drill/arena screen. Role is fixed
   the first time an account accepts (or is confirmed as) a family link and
   is not reversible by re-accepting a link the other way; an account is
   either a child or a guardian for its lifetime, never both.
9. **No peer or class comparison, ever.** No percentile, no "compared to
   other students," no leaderboard visible to a guardian. The only
   comparison this feature ever makes is the child against their own past
   performance (trend over time), never against anyone else. This is a
   permanent non-goal, not a "not in v1."

## Tone and framing

This is the actual product requirement, not polish:

- Never use "weak," "poor," "bad at," or a bare percentage as the headline
  for a chapter/subject. The vocabulary throughout the UI and every email is
  **"strengths"** and **"focus areas"** (or "building up") — a focus area is
  framed as an opportunity, not a deficiency.
- **Strengths are shown first and more prominently** than focus areas, in
  both the Progress-screen summary and the weekly email — the opposite
  ordering from the child's own Progress view, which already sorts
  weakest-first (design.md) for the child's own study planning. A guardian
  opening this for the first time should see what's going well before
  anything else.
- Every focus area shown to a guardian is paired with a concrete, positive
  next step ("Practice Trigonometry" button straight into a drill of that
  chapter), never left as a bare number with no path forward.
- No cross-child, cross-class, or cross-account comparison of any kind
  (constraint 9). No badges or language implying rank.
- This applies equally to: the Progress-screen guardian view, the weekly
  email, and any assignment-result display. One violation anywhere
  undermines the whole feature's intent.

## Email verification prerequisite

Today `public/auth.js` calls `createUserWithEmailAndPassword` with no
`sendEmailVerification()` call and no `emailVerified` check anywhere — any
email/password signup is trusted immediately. That's an acceptable risk for
solo practice-tracking, but Family's whole trust model rests on "the person
who accepted the guardian invite actually controls that inbox," so this gap
has to close first:

- On email/password signup, call `sendEmailVerification()` immediately
  (Google sign-in accounts are already verified by Google — skip this for
  those).
- A family invite (either direction) can be **sent** to any account, but
  **cannot be accepted** until the accepting account's `emailVerified` is
  true. If not yet verified, show "Verify your email to accept this
  invite" with a resend-verification-email action, rather than silently
  blocking with no explanation.
- This does not gate any other existing feature (login, sync, arena,
  etc.) — verification is only a precondition for Family, so it doesn't
  regress current unverified-but-signed-in users.
- **Known limitation, stated explicitly rather than glossed over**: email
  verification proves inbox control, not that the person is actually the
  child's legal parent/guardian. No stronger identity check is in scope for
  v1. This is a reasonable trust level for a study-progress feature, but
  it is not the same as identity verification, and should not be described
  to users as such.

## Data model (Firestore)

New collections, alongside the existing `users/{uid}/sync/*`:

```
familyInvites/{lowercaseEmail}/items/{autoId}
  fromUid, fromEmail, fromDisplayName, role: 'guardian' | 'child'
  createdAt, status: 'pending'
```
Keyed by the *invitee's* lowercased email (not the sender) so a Firestore
security rule can allow the read with a simple
`request.auth.token.email.lower() == emailParam` check — no custom index,
no server function needed just to see your own pending invites. `role` names
what the *invitee* is being asked to be.

Before writing a new invite, the client checks for an existing `pending`
invite to the same email from the same sender, and for an existing `active`
`familyLinks` edge between the two — if either exists, block the duplicate
client-side ("Already invited" / "Already linked") rather than silently
piling up repeat invites.

```
familyLinks/{linkId}
  childUid, guardianUid, gradeBoard: string   -- e.g. "X::CBSE", the specific
                                                  grade+board this link shares
  status: 'active' | 'unlinked'
  createdAt, unlinkedAt?
  digestOptIn: { email: bool }
  guardianContact: { email?: string }   -- confirmed contact, not the auth
                                            email, in case a parent wants
                                            digests at a different address
```
`childUid`/`guardianUid` are Firebase Auth uids, resolved from the invite's
`fromUid`/accepting user's uid at accept time — never stored by email only,
since email can change.

**`gradeBoard` matters because progress isn't global.** `app.js` scopes all
progress/streak/bookmark data by `grade::board::subject` (`scopeKey()` in
`app.js`), so a student with both X-CBSE and X-ICSE activity has two
disjoint data sets. A `familyLinks` edge shares one specific grade::board —
if a child ever practices under a second grade::board, that's a *second*
invite/link (same two people, a different `gradeBoard` value), not an
option on the first one. The child chooses which grade::board a given
invite covers when sending it (defaulting to whichever is currently active
in `state`).

```
users/{childUid}/sync/familySummary
  gradeBoard: string
  perChapter: [{ subject, chapter, accuracy, attempts, lastAttemptAt }]
  updatedAt
```
**New doc, not in the original draft of this spec.** `sync/progress` is an
opaque Leitner-box blob understood only by `app.js`'s own functions — it
has no documented schema, and having the Cloudflare Worker re-derive
chapter/subject accuracy from it would mean maintaining a second
implementation of the same aggregation logic in a different runtime, which
will eventually drift from the client's numbers. Instead, the same client
code path that already updates the Leitner record on a graded submit also
writes this pre-aggregated, documented summary. Both the guardian's
Progress-screen view and the nightly/weekly Worker digest read
`familySummary` — never `sync/progress` directly. One source of truth for
"what's a strength, what's a focus area."

```
users/{childUid}/assignments/{assignmentId}
  createdBy: guardianUid
  subject, chapter?: string          -- chapter optional = whole-subject pool
  gradeBoard: string                 -- which grade::board this targets
  questionCount: number
  timeLimitMinutes: number
  dueAt: timestamp
  status: 'pending' | 'completed' | 'expired' | 'cancelled'
  result?: { score, total, accuracy, submittedAt }
```
Reuses the existing mock/drill question-selection logic (subject + optional
chapter filter, `BANKS`), just parameterized by an assignment doc instead of
the subject-card UI. On submit, the normal grading path runs unchanged; the
only addition is tagging the attempt with `assignmentId` so it updates this
doc's `result` instead of (or alongside) the normal attempt history.

## Invite flow

1. Either side opens Avatar → Profile → **Family** section, enters the other
   person's email, and declares direction explicitly at send time: **"Invite
   my parent/guardian"** or **"Invite my child"** — the child additionally
   picks which grade::board this invite covers if they have more than one
   active. Since the roles are exclusive (constraint 8), the invite itself
   carries the intended role for each side — there is no "I'm the parent /
   I'm the child" choice at accept time; the invite already says who's who.
2. Client checks for an existing pending invite or active link to the same
   email first (see "Data model") and blocks the duplicate before writing.
3. Writes `familyInvites/{toEmailLower}/items/{autoId}`.
4. **Immediately, not just on next login**: the client calls the Worker's
   HTTP invite-notification route, which sends one transactional email via
   Resend to the invitee — "Ravi has invited you to link Rise accounts as
   their parent/guardian — open the app to accept." Without this, an
   invitee who isn't currently in the app has no way to learn the invite
   exists; the in-app banner alone (step 5) only helps someone already
   signed in. If the invitee has no Rise account yet, the email says so and
   links to sign-up instead of the accept screen.
5. On the invitee's next login (or live listener if already signed in),
   client queries its own `familyInvites/{myEmailLower}/items` for
   `status:'pending'` docs and shows a banner: *"Ravi (ravi@x.com) wants to
   link you as their parent/guardian — Accept / Ignore"* (or the child-facing
   equivalent). No role choice is offered to the acceptor — only the
   accept/ignore decision.
6. **Accept is blocked until `emailVerified` is true** (see "Email
   verification prerequisite") — shown as a clear "verify your email
   first" state, not a silent failure.
7. **Role-lock check on accept**: if the invitee's account already has a
   role that conflicts with the invite (e.g. a guardian account receiving a
   `role:'child'` invite, or an account with existing grade/board practice
   history receiving a `role:'guardian'` invite) — reject the accept
   client-side with an explanation, since a parent account can never become
   a student account or vice versa. A brand-new account with no practice
   history and no existing family role can accept either kind, and that
   acceptance is what fixes its role from then on.
8. Accepting writes a `familyLinks` doc with `childUid`/`guardianUid`/
   `gradeBoard` fixed by the invite (not a choice made at accept time),
   deletes the invite doc, and shows an opt-in toggle for the email digest
   right there (default **off** — accepting the link and opting into
   messages are two separate consents).
9. A child can have multiple guardians linked (both parents, potentially
   across more than one `gradeBoard`); a guardian can have multiple
   children. Either side can unlink at any time from the Family section
   (sets `status:'unlinked'`, stops all future sends immediately — the
   nightly Worker query filters on `status:'active'`). Unlinking
   auto-cancels any `pending` assignment created under that link (see
   "Assignment lifecycle").

## Digest contact & channel

Email digests go to the guardian's Firebase Auth email by default; a
guardian may instead set `guardianContact.email` to a different address
(e.g. the other parent's inbox) — that address gets a one-time Resend
confirmation link before any digest sends to it. No SMS channel exists
(constraint 6) — no phone number is ever collected.

## Cron jobs (Cloudflare Worker)

Two schedules, plus one always-on HTTP route, in the same Worker:

- **HTTP route** (called by the client, not on a schedule): sends the
  transactional invite-notification email (see "Invite flow" step 4) and
  the assignment-completed notification (see below). Both are one-off sends
  triggered by a client action, not the cron.
- **Nightly, 21:00 IST** (`0 15 * * *` UTC — fixed single timezone for v1,
  no per-guardian timezone support yet): for every `familyLinks` doc with
  `status:'active'` and `digestOptIn.email` true, read that child's
  `sync/familySummary` and that day's attempt timestamps (mock/drill/arena/
  short-answers/solved reveals). If nothing happened today, skip entirely
  (constraint 5) — no email, no log noise beyond a skip count. Otherwise
  render a short digest email, strengths first (see "Tone and framing"):
  questions attempted, accuracy, streak status, any assignment completed
  today with its result. Send via Resend.
- **Weekly, Sunday 21:00 IST**: same eligibility filter, reads the week's
  `familySummary` per-chapter accuracy into a ranked list, **strengths
  section first, focus-areas section second**, one section per subject the
  child has activity in, each focus-area entry paired with a "Practice
  this chapter" link. Also sent via Resend.
- **Assignment sweep** (folded into the nightly run): any `pending`
  assignment past its `dueAt` flips to `status:'expired'`.

Assignment-*completed* notifications are not on either cron schedule — they
fire immediately via the HTTP route right after a graded submit that
carries an `assignmentId`, since a parent waiting until 9 PM to hear "yes
they did it" defeats the point of assigning it for "whenever."

## Assignment lifecycle

- **Create**: guardian picks subject, optional chapter, question count,
  time limit, due time, from their child-switcher view (see below).
- **Complete**: child launches it from the Progress-screen assignment
  inbox; a normal timed session runs, grading writes `result` and flips
  `status:'completed'`; the HTTP route fires the immediate notification.
- **Expire**: nightly sweep flips overdue `pending` assignments to
  `'expired'` — shown to the guardian as "not completed," not as a mark
  against the child (tone constraint applies here too: a missed assignment
  is a scheduling fact, not a performance statement).
- **Cancel**: a guardian can cancel a `pending` assignment they created
  (`status:'cancelled'`) — e.g. due date no longer makes sense. No editing
  of an existing assignment's parameters — cancel and re-create instead,
  keeping the state machine simple.
- **Unlink cascade**: if the `familyLinks` edge under which an assignment
  was created becomes `'unlinked'` while the assignment is still `pending`,
  it auto-cancels.
- Multiple guardians assigning independently (e.g. both parents) is not a
  conflict — each assignment is its own doc; no locking or merging needed.

## Embedding into Progress (not a new page)

The existing `#/progress` screen (`app.js`) gets a viewer-role branch instead
of forking into a separate route:

- **No family links at all**: unchanged today's per-chapter accuracy view,
  plus a new "Family" card at the bottom with the invite input.
- **Child with active guardian link(s)**: same personal view, plus:
  - a small "Shared with: mum@x.com (digest: on)" line per linked guardian,
    with an unlink control
  - an assignment inbox card listing pending/overdue assignments, each
    launching a normal timed test session pre-scoped to that assignment
- **Guardian viewing their own Progress screen**: a guardian account never
  has grade/board practice history (constraint 8) and never shows the
  per-chapter accuracy view at all — its Progress screen *is* the **child
  switcher** (tabs if more than one linked child, and a grade::board
  sub-switcher if that child has more than one active `familyLinks` edge)
  → a strengths-first, focus-areas-second rendering (see "Tone and
  framing"), sourced from that child's `sync/familySummary`, read-only (a
  guardian never edits or retakes the child's attempts) — plus an "Assign
  practice" button and a list of past assignments with results. There is no
  personal-practice case to stack against, since a guardian account can
  never also be a student account.

`familySummary` (see "Data model") is what both this guardian view and the
child's own Progress screen read for chapter-level numbers — the child's own
view keeps its existing weakest-first study-planning ordering (unaffected by
this feature), while the guardian's view always reorders the same data
strengths-first per the tone constraint. Same numbers, different framing,
by design.

## Privacy policy updates (`public/privacy.html`)

Add a section covering:
- What a linked guardian can see: aggregate accuracy and streak data,
  per-chapter strengths/focus-areas breakdown, assignment results. Never
  raw question review, never the child's typed Short-Answer drafts, never
  login credentials or password.
- That linking requires the child (or guardian) to explicitly invite and the
  other side to explicitly accept — no account is ever linked without both
  sides' action, and acceptance requires a verified email address.
- That accepting a family link is not identity verification of the
  relationship itself — Rise confirms the accepting account controls the
  email address invited, not that the person is the child's legal parent.
- That digest emails require a further explicit opt-in beyond accepting the
  link, are sent via Resend as a processor, and can be turned off (or fully
  unlinked) at any time from the child's or guardian's Family section. No
  phone number is ever collected or used — there is no SMS channel.
- Retention: `familySummary` is derived data regenerated from the
  underlying progress record already covered elsewhere in the policy, not a
  separate retained history of digest content.

## Known limitations (accepted for v1, not solved here)

- No verification that an accepted guardian is the child's actual legal
  parent — only that they control the invited email address.
- No cascading cleanup specified yet for a full account deletion (guardian
  or child) — orphaned `familyLinks`/`familyInvites`/`assignments` docs from
  a deleted account are a follow-up, not blocking v1.
- Single fixed timezone (IST) for all cron times — per-guardian timezone
  support is future work if the user base isn't India-only.

## Firestore security rules (Phase 1, deployed)

```
match /familyInvites/{emailLower}/items/{itemId} {
  allow read: if request.auth != null &&
    (request.auth.token.email.lower() == emailLower ||
     request.auth.uid == resource.data.fromUid);
  allow delete: if request.auth != null &&
    request.auth.token.email.lower() == emailLower;
  allow create: if request.auth != null &&
    request.auth.uid == request.resource.data.fromUid;
  allow update: if false;
}

match /familyLinks/{linkId} {
  allow read, update: if request.auth != null &&
    (request.auth.uid == resource.data.guardianUid ||
     request.auth.uid == resource.data.childUid);
  allow create: if request.auth != null &&
    (request.auth.uid == request.resource.data.guardianUid ||
     request.auth.uid == request.resource.data.childUid);
  allow delete: if false;
}
```

`familyInvites` read is split from delete: the sender also needs read
access (not just the invitee) because `family.js`'s `sendInvite()` checks
for an existing pending invite from itself before creating a new one —
without this, that dedupe read throws `permission-denied` and the whole
invite silently fails (hit this during Phase 1 testing; fixed by widening
the read rule and by wrapping `sendInvite`/`acceptInvite` in try/catch so
a future rules mismatch surfaces a message instead of doing nothing).
Delete stays invitee-only, matching that only accept/ignore ever deletes
an invite doc.

## Open items for whoever implements the rest of this

- Resend API key needs to be added as a Worker secret
  (`wrangler secret put`), not committed.
- Firestore security rules still need `users/{uid}/assignments` (guardian
  can create an assignment only where an `active` `familyLinks` edge names
  them as `guardianUid` for that `childUid` — a cross-collection `get()`
  check, worth watching for rule-evaluation cost) and must explicitly
  restrict guardian read access to `sync/familySummary` and `sync/streak`
  only — never `sync/saDrafts` (the child's typed Short-Answer attempts) or
  `sync/aiConfig`.
