# Two-Column Split Layout Demo

This project demonstrates a responsive two-column layout with the following features:

## Features

1.  **Two-Column Split**: Implemented using CSS Grid (`display: grid`) with a `1fr 2fr` ratio.
2.  **Vertical Centering**: The left column title is perfectly centered vertically relative to the right column's content using `align-items: center` on the grid container.
3.  **Sequential Reveal**: Content blocks on the right animate in one by one using CSS `@keyframes` and `nth-child` staggered delays.
4.  **Responsiveness**: The layout collapses to a single column on screens smaller than 768px using media queries.

## How to Run

Simply open `index.html` in any modern web browser.

## Key CSS Concepts Used

- **CSS Grid**: For the structural layout and alignment.
- **Flexbox**: For the vertical stacking of content blocks in the right column.
- **CSS Variables**: For easy theme customization (colors, timing, etc.).
- **CSS Animations**: To handle the staggered entrance of elements without JavaScript.
