# Project Images

One 16:9 image per project, referenced by the `image` field in
`app/components/projects.tsx` (e.g. `image: "/projects/zuix.webp"`).

| Project                  | File                    | Concept / Visual Theme                                              |
| ------------------------ | ----------------------- | ------------------------------------------------------------------- |
| Clauto                   | `clauto.webp`           | Cybernetic command center with glowing 3D Kanban & git branch trees |
| Trillium Pastry          | `trillium-pastry.webp`  | Artisanal multi-tier celebration cake with sugarcraft & warm bokeh  |
| ZUIX INC.                | `zuix.webp`             | Luxury architectural residence with waterfall marble & blueprints   |
| Anti-FOMO                | `anti-fomo.webp`        | Deep-space / cyberpunk opportunity scanner tracking tech signals    |
| GradeMatrix              | `grade-matrix.webp`     | Crimson crystal matrix floating in a modern university atrium       |
| Pico-Ducky 3.0           | `pico-ducky.webp`       | Macro cyber-hardware USB dongle with glowing circuitry & duck logo  |
| Fretnote                 | `fretnote.webp`         | Moody guitar fretboard with glowing harmonic markers & chord charts |
| opencode for Journalling | `opencode-journal.webp` | Nocturnal desk with journal radiating an Obsidian knowledge galaxy  |
| Undercut                 | `undercut.webp`         | Midnight luxury sports car scanned by HUD deal-grading telemetry    |
| FocusBox                 | `focusbox.webp`         | Precision matte black deep work lockbox with ambient timer ring     |

To replace one, overwrite the file (or point `image` at a new one):

- Use 16:9 — the card crops to that ratio, anchored to the top.
- 1600×900 WebP keeps each file under ~150 KB; `.jpg` and `.png` also work.
- Next.js serves resized AVIF/WebP versions per screen size automatically.
- Leaving `image` empty shows the gradient placeholder.
