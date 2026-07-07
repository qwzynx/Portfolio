# Project Screenshots

Drop project images in this folder, then set the `image` field for the matching
project in `app/components/projects.tsx`.

Example: save a screenshot as `zuix.jpg` here, then in `projects.tsx` change:

```ts
image: "",
```

to:

```ts
image: "/projects/zuix.jpg",
```

Suggested filenames (one per project):

| Project       | Filename          |
| ------------- | ----------------- |
| ZUIX INC.     | `zuix.jpg`        |
| ENG1102       | `eng1102.jpg`     |
| Pico-Ducky3.0 | `pico-ducky.jpg`  |
| FOMO          | `fomo.jpg`        |
| GradeMatrix   | `grade-matrix.jpg`|
| Undercut      | `undercut.jpg`    |

Tips:

- Use a 16:9 image (e.g. 1280×720) — the card crops to that aspect ratio.
- `.jpg`, `.png`, and `.webp` all work.
- Until an image is added, the card shows a gradient placeholder automatically.
