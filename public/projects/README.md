# Project Images

One 16:9 image per project, referenced by the `image` field in
`app/components/projects.tsx` (e.g. `image: "/projects/zuix.webp"`).

| Project                  | File                    | Source                                   |
| ------------------------ | ----------------------- | ---------------------------------------- |
| Fretnote                 | `fretnote.webp`         | Screenshot of the live site              |
| Clauto                   | `clauto.webp`           | Dashboard screenshot from Clauto's docs  |
| GradeMatrix              | `grade-matrix.webp`     | Screenshot of the live site (login page) |
| Anti-FOMO                | `anti-fomo.webp`        | Code cover (`rank.rs`)                   |
| Pico-Ducky 3.0           | `pico-ducky.webp`       | Code cover (`duckyinpython.py`)          |
| ZUIX INC.                | `zuix.webp`             | Screenshot of the live site              |
| Undercut                 | `undercut.webp`         | Screenshot of the live site              |
| Phone-As-Webcam          | `phone-as-webcam.webp`  | Code cover (`phone.js`)                  |
| Trillium Pastry          | `trillium-pastry.webp`  | Screenshot of the live site              |
| MG Studio                | `mg-studio.webp`        | Screenshot of the live site              |
| Course Tutors            | `course-tutors.webp`    | Circuits Tutor + Logic Tutor, side by side |
| opencode for Journalling | `opencode-journal.webp` | Code cover (`save-check.sh`)             |
| FOMO                     | `fomo.webp`             | Code cover (`main.py`)                   |
| FocusBox                 | `focusbox.webp`         | Annotated build photo from the ENG1102 repo |
| ENG 2003 Portfolio       | `eng2003.webp`          | Screenshot of the live site              |

To replace one, overwrite the file (or point `image` at a new one):

- Use 16:9 — the card crops to that ratio, anchored to the top.
- 1600×900 WebP keeps each file under ~100 KB; `.jpg` and `.png` also work.
- Next.js serves resized AVIF/WebP versions per screen size automatically.
- Leaving `image` empty shows the gradient placeholder.
