# Project Images

One 16:9 image per project, referenced by the `image` field in
`app/components/projects.tsx` (e.g. `image: "/projects/zuix.webp"`).

| Project                  | File                    | Source                                                        |
| ------------------------ | ----------------------- | ------------------------------------------------------------- |
| Clauto                   | `clauto.webp`           | Dashboard, Kanban autopilot, and OLS cost estimator preview   |
| Trillium Pastry          | `trillium-pastry.webp`  | Showcase gallery of handmade cake toppers & Resend order flow |
| ZUIX INC.                | `zuix.webp`             | Renovation project gallery, estimate flow & Edge Admin CRUD   |
| Anti-FOMO                | `anti-fomo.webp`        | Ranked roles, reading & events feed in the Tauri 2 desktop UI |
| GradeMatrix              | `grade-matrix.webp`     | Dual-scale GPA dashboard, courses & Playwright eClass diff    |
| Pico-Ducky 3.0           | `pico-ducky.webp`       | Raspberry Pi Pico 2W pinout, DuckyScript 3.0 & companion web  |
| Fretnote                 | `fretnote.webp`         | Chord diagrams, transposed lyric sheet & 6-string tab editor  |
| opencode for Journalling | `opencode-journal.webp` | opencode TUI interview, bash verifier & Obsidian daily note   |
| Undercut                 | `undercut.webp`         | GTA used-car deal grades, FMV curve & Gemini red-flag audit   |
| FocusBox                 | `focusbox.webp`         | Annotated Arduino/3D-printed hardware & sensor telemetry      |

To replace one, overwrite the file (or point `image` at a new one):

- Use 16:9 — the card crops to that ratio, anchored to the top.
- 1600×900 WebP keeps each file under ~150 KB; `.jpg` and `.png` also work.
- Next.js serves resized AVIF/WebP versions per screen size automatically.
- Leaving `image` empty shows the gradient placeholder.
