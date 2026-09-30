# Professional motion upgrade

## Goal
Add polished, performance-conscious animation across the portfolio while preserving the dark terminal identity and keeping the work easy to read.

## What will change
- Add a subtle full-bleed Three.js particle field to the homepage background that reacts gently to pointer movement.
- Replace the current one-time fades with coordinated GSAP entrances for the headline, copy, buttons, stats, skills, and project cards.
- Add scroll-triggered reveals and light depth movement as sections enter the viewport.
- Refine project-card interaction with restrained pointer tilt, border glow, and smooth reset.
- Add a slim scroll-progress indicator and smooth page-entry transitions across the site.
- Respect reduced-motion settings and simplify effects on smaller screens for accessibility and performance.

## Technical details
- Use `three` for the lightweight hero scene and `gsap` with `ScrollTrigger` for sequencing and scroll reveals.
- Keep animation code in focused reusable components/hooks, with cleanup when pages change.
- Preserve all existing content, links, navigation, and the neon-green design tokens.
- Verify desktop and mobile layouts, external project arrows, reduced-motion behavior, and browser console health.
