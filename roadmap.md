# Repository import

## Second import (Nov 2 2026, from github.com/Routbe/compass-navigator-52)
- [x] Copy code, pages, assets, database scripts and tests into this project; secrets and the old project's settings left out.
- [x] Merge the library list, keeping this project's framework versions.
- [x] Check the preview: landing page, about/docs, sign-in screen and QR generator render.
- [x] Run the app's own test suite: 1522 of 1524 pass.
- [ ] Choose where the data lives: the original database, or Lovable Cloud.
- [ ] Import accounts and existing records — needs the user export (emails + original IDs) and the application-table exports.
- [ ] Supply service keys (payments, mail, storage, sign-in providers, cron) through the secure form and verify each flow.
- [ ] Reconcile the two pre-existing database-script failures: duplicate script number 0169 and an out-of-date schema snapshot.


- [x] Import ROUT source, styles, assets and dependencies without replacing project identity.
- [x] Verify public screens, QR generation, navigation and imported tests (1497 initial passing tests; 9 route retries and 13 focused checks passed; source migration snapshot test remains failing).
- [ ] Activate and verify existing accounts and connected services — blocked by original database and service credentials.

## Open (Nov 2 request)
- [x] Workspace Studio top cut off (missing page frame)
- [x] Private→workspace conversion: URL becomes /w/<name> (or chosen name / verified domain), design carried over (verified design wins, other saved as draft), old URL redirects 30 days
- [x] Workspace share preview image not loading in Studio
- [x] Verified domain: private account serves on domain directly, not as rout.be/<domain>; workspaces may use domain as name
- [x] Identity tab: Mastodon/social verification for personal (incl. alias) + workspace; workspace Bluesky via verified domain
- [x] Restored maximilien.brussels verified design onto workspace maximilien-6yak (draft)
