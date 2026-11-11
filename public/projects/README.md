# Project Images

One 16:9 image per project, referenced by the `image` field in
`app/components/projects.tsx` (e.g. `image: "/projects/zuix.webp"`).

| Project                  | File                    | Billboard Theme & Highlights                                       |
| ------------------------ | ----------------------- | ------------------------------------------------------------------ |
| Clauto                   | `clauto.webp`           | Minimalist command terminal billboard with amber git topology      |
| Trillium Pastry          | `trillium-pastry.webp`  | Luxury artisanal cake billboard with emerald velvet & warm bokeh   |
| ZUIX INC.                | `zuix.webp`             | Architectural design billboard with illuminated marble island      |
| Anti-FOMO                | `anti-fomo.webp`        | Deep-sky opportunity radar billboard with cyan laser beam          |
| GradeMatrix              | `grade-matrix.webp`     | Crimson ruby crystal matrix billboard with academic GPA telemetry  |
| Pico-Ducky 3.0           | `pico-ducky.webp`       | Cyber-hardware security billboard with carbon-fiber & wireframe duck|
| Fretnote                 | `fretnote.webp`         | Moody studio guitar billboard with harmonic fret illumination      |
| opencode for Journalling | `opencode-journal.webp` | Nocturnal desk billboard with glowing purple knowledge neural net  |
| Undercut                 | `undercut.webp`         | Midnight luxury sports coupe billboard emerging from deep shadow   |
| FocusBox                 | `focusbox.webp`         | Matte black lockbox timer billboard with glowing warm amber ring   |

To replace one, overwrite the file (or point `image` at a new one):

- Use 16:9 — the card crops to that ratio, anchored to the top.
- 1600×900 WebP keeps each file under ~150 KB; `.jpg` and `.png` also work.
- Next.js serves resized AVIF/WebP versions per screen size automatically.
- Leaving `image` empty shows the gradient placeholder.
