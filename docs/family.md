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

## Hard constraints

1. **This needs a real backend for the first time.** Cron-triggered email/SMS
   and parent-initiated assignments must run independent of whether either
   party's browser is open. New Cloudflare Worker (`workers/family-cron/`,
   separate from the static `public/` Pages deployment) with a Cron Trigger.
   Firestore stays the data store (project already exists, `rise-511c6`).
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
4. **Opt-in is explicit and per-channel.** No guardian receives email or SMS
   until they have accepted a family link AND separately toggled that
   channel on. Declining/ignoring an invite sends nothing, ever.
5. **No nudge on inactivity.** A day with no child activity produces no
   digest email/SMS for that day — silence, not a guilt message.
6. **Both sides are full Firebase Auth accounts.** No guest/anonymous parent
   view, no shareable magic link.
7. **A parent is not a student.** Guardian is a distinct, exclusive account
   role — a parent account never has grade/board practice history, never
   appears on the student side of a `familyLinks` doc, and never sees the
   grade/board picker or any subject/mock/drill/arena screen. Role is fixed
   the first time an account accepts (or is confirmed as) a family link and
   is not reversible by re-accepting a link the other way; an account is
   either a child or a guardian for its lifetime, never both.

## Data model (Firestore)

New collections, alongside the existing `users/{uid}/sync/*`:

```
familyInvites/{lowercaseEmail}/items/{autoId}
  fromUid, fromEmail, fromDisplayName, createdAt, status: 'pending'
```
Keyed by the *invitee's* lowercased email (not the sender) so a Firestore
security rule can allow the read with a simple
`request.auth.token.email.lower() == emailParam` check — no custom index,
no server function needed just to see your own pending invites.

```
familyLinks/{linkId}
  childUid, guardianUid, status: 'active' | 'unlinked'
  createdAt, unlinkedAt?
  digestOptIn: { email: bool, sms: bool }
  guardianContact: { email?: string, phone?: string }   -- confirmed contact,
                                                            not the auth email,
                                                            in case a parent
                                                            wants digests at a
                                                            different address
```
`childUid`/`guardianUid` are Firebase Auth uids, resolved from the invite's
`fromUid`/accepting user's uid at accept time — never stored by email only,
since email can change.

```
users/{childUid}/assignments/{assignmentId}
  createdBy: guardianUid
  subject, chapter?: string          -- chapter optional = whole-subject pool
  questionCount: number
  timeLimitMinutes: number
  dueAt: timestamp
  status: 'pending' | 'completed' | 'expired'
  result?: { score, total, accuracy, submittedAt }
```
Reuses the existing mock/drill question-selection logic (subject + optional
chapter filter, `BANKS`), just parameterized by an assignment doc instead of
the subject-card UI. On submit, the normal grading path runs unchanged; the
only addition is tagging the attempt with `assignmentId` so it updates this
doc's `result` instead of (or alongside) the normal attempt history.

Digest computation reads existing per-child data — the Leitner box record
already used by the Progress screen — rather than duplicating it into a new
aggregate collection. The nightly Worker computes on the fly from
`users/{childUid}/sync/progress` (or equivalent existing doc); no new
`dailyDigest` cache unless read volume ever makes that necessary.

## Invite flow

1. Either side opens Avatar → Profile → **Family** section, enters the other
   person's email, and declares direction explicitly at send time: **"Invite
   my parent/guardian"** or **"Invite my child."** Since the roles are
   exclusive (constraint 7), the invite itself carries the intended role for
   each side — there is no "I'm the parent / I'm the child" choice at
   accept time; the invite already says who's who.
2. Writes `familyInvites/{toEmailLower}/items/{autoId}` with a `role` field
   naming what the *invitee* is being asked to be (`'guardian'` or
   `'child'`).
3. On the invitee's next login (or live listener if already signed in),
   client queries its own `familyInvites/{myEmailLower}/items` for
   `status:'pending'` docs and shows a banner: *"Ravi (ravi@x.com) wants to
   link you as their parent/guardian — Accept / Ignore"* (or the child-facing
   equivalent). No role choice is offered to the acceptor — only the
   accept/ignore decision.
4. **Role-lock check on accept**: if the invitee's account already has a
   role that conflicts with the invite (e.g. a guardian account receiving a
   `role:'guardian'` invite meant for a new parent — fine; but a guardian
   account receiving a `role:'child'` invite, or an account with existing
   grade/board practice history receiving a `role:'guardian'` invite) —
   reject the accept client-side with an explanation, since a parent
   account can never become a student account or vice versa. A brand-new
   account with no practice history and no existing family role can accept
   either kind, and that acceptance is what fixes its role from then on.
5. Accepting writes a `familyLinks` doc with `childUid`/`guardianUid` fixed
   by the invite's declared roles (not a choice made at accept time),
   deletes the invite doc, and shows an opt-in toggle for email/SMS digests
   right there (default **off** — accepting the link and opting into
   messages are two separate consents).
6. A child can have multiple guardians linked (both parents); a guardian can
   have multiple children. Either side can unlink at any time from the
   Family section (sets `status:'unlinked'`, stops all future sends
   immediately — the nightly Worker query filters on `status:'active'`).

No SMS/email verification step for the invite itself (it's just an
in-app-to-in-app link between two accounts that both already control an
inbox via Firebase Auth); verification matters for the *digest contact*,
covered next.

## Digest contact & channels

- Email digests go to the guardian's Firebase Auth email by default; a
  guardian may instead set `guardianContact.email` to a different address
  (e.g. the other parent's inbox) — that address gets a one-time Resend
  confirmation link before any digest sends to it.
- SMS is opt-in separately and requires `guardianContact.phone` with an OTP
  verification step (Twilio Verify or equivalent) before enabling — a wrong
  number opted in blind is a real harm (sending a child's exam performance
  to a stranger).

## Cron jobs (Cloudflare Worker)

Two schedules, one Worker:

- **Nightly, 21:00 IST** (`0 15 * * *` UTC — fixed single timezone for v1,
  no per-guardian timezone support yet): for every `familyLinks` doc with
  `status:'active'` and `digestOptIn.email` or `.sms` true, pull that
  child's attempts from *today* (mock/drill/arena/short-answers/solved
  reveals — whatever already timestamps an attempt). If nothing happened
  today, skip entirely (constraint 5) — no email, no SMS, no log noise
  beyond a skip count. Otherwise render a short digest: questions
  attempted, accuracy, streak status, any assignment completed today with
  its result. Send via Resend (email) / Twilio (SMS, digest truncated to a
  couple of lines).
- **Weekly, Sunday 21:00 IST**: same eligibility filter, aggregates the
  *week's* per-chapter accuracy (same Leitner-derived numbers the Progress
  screen already computes) into a ranked weakest-first list, one section
  per subject the child has activity in. Email only — no SMS (too long).

Assignment-completed notifications are **not** on this cron: they fire
immediately from the client (or a lightweight Firestore-triggered Worker
route, if immediate-on-write is preferred over client-initiated) right after
a graded submit that carries an `assignmentId`, since a parent waiting until
9 PM to hear "yes they did it" defeats the point of assigning it for
"whenever."

## Embedding into Progress (not a new page)

The existing `#/progress` screen (`app.js`) gets a viewer-role branch instead
of forking into a separate route:

- **No family links at all**: unchanged today's per-chapter accuracy view,
  plus a new "Family" card at the bottom with the invite input.
- **Child with active guardian link(s)**: same personal view, plus:
  - a small "Shared with: mum@x.com (digest: email ✓, sms ✗)" line per
    linked guardian, with an unlink control
  - an assignment inbox card listing pending/overdue assignments, each
    launching a normal timed test session pre-scoped to that assignment
- **Guardian viewing their own Progress screen**: a guardian account never
  has grade/board practice history (constraint 7) and never shows the
  per-chapter accuracy view at all — its Progress screen *is* the **child
  switcher** (tabs if more than one linked child) → the same strong/weak-
  by-chapter/subject rendering, sourced from that child's data, read-only (a
  guardian never edits or retakes the child's attempts) — plus an "Assign
  practice" button (subject, optional chapter, question count, time limit,
  due time) and a list of past assignments with results. There is no
  personal-practice case to stack against, since a guardian account can
  never also be a student account.

Strong/weak-by-chapter computation itself is not new — it's the same
per-chapter accuracy math the Progress screen already runs for the signed-in
user, just pointed at `childUid` instead of the viewer's own uid when
rendering the guardian's child-switcher view.

## Privacy policy updates (`public/privacy.html`)

Add a section covering:
- What a linked guardian can see: aggregate accuracy and streak data,
  per-chapter strong/weak breakdown, assignment results. Never raw question
  review, never login credentials, never the child's account password.
- That linking requires the child (or guardian) to explicitly invite and the
  other side to explicitly accept — no account is ever linked without both
  sides' action.
- That digest emails/SMS require a further explicit opt-in beyond accepting
  the link, are sent via Resend (email) and Twilio (SMS) as processors, and
  can be turned off (or fully unlinked) at any time from the child's or
  guardian's Family section.
- Retention: digest content is generated on send and not stored separately
  from the underlying progress data already covered elsewhere in the policy.

## Open items for whoever implements this

- Single fixed timezone (IST) for v1 cron times — per-guardian timezone
  support is future work if the user base isn't India-only.
- Resend API key and Twilio (or MSG91) credentials need to be added as
  Worker secrets (`wrangler secret put`), not committed.
- Firestore security rules need new rules for `familyInvites`,
  `familyLinks`, and `users/{uid}/assignments` (guardian can create under a
  linked child's uid only; child can read/update status of their own).
