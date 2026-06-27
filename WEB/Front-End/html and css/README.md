# 🏛️ HTML & CSS 102 — My Learning Journey

## 🎯 Technical Context & Summary

This repository chronicles my progression through the HTML & CSS 102 course at **NewHorizons Institute** under instructor **M. Jijan**. What started as bare-bones HTML tags in Session 1 evolved into a full-blown Bootstrap 5 barber salon website (KHAWAJA) by the end. The curriculum is structured across **16 core sessions**, **2 homework assignments**, **3 capstone-style "Top" projects**, and a **final production-grade site**. Each folder represents a stepping stone — from inline CSS and HTML tables, through CSS variables and grid systems, all the way to 3D transforms and complex keyframe animations. The learning curve is steep but visible: early files are single-tag experiments (`<div style="color:red">`), while later ones feature responsive layouts, JavaScript-enhanced modals, and pure-CSS art.

## 🧠 Deep Tech Stack & Concepts

### HTML Foundations (Sessions 1–3)
- **Semantic structure**: `<!DOCTYPE>`, `<head>`, `<body>`, `<meta charset>`, `<title>`
- **CV page** (`cv.html`): inline images (`<img src="sha.jpeg">`), anchors (`<a href>`), horizontal rules (`<hr>`)
- **Tables** (`p (6).html`): `rowspan`, `colspan`, `<thead>`/`<tbody>`, nested links and images inside table cells
- **Form controls** (`all.html`): `fieldset`/`legend`, `input[type=text|password|button|date|time|number|range|checkbox|radio|color]`, `select`/`option` (single + multiple), `disabled`, `readonly`, `placeholder`

### CSS Core (Sessions 4–8)
- **Inline styles** → internal `<style>` blocks → **external `.css` files**
- **Selectors**: element, class, universal `*`, descendant, `::placeholder`, `:focus`
- **Box model**: `border`, `border-radius`, `padding`, `margin: auto` for centering
- **Display modes**: `inline-block`, `flex` (align-items, justify-content)
- **Positioning**: `static`, `relative`, `absolute` with `top`/`left`/`z-index`
- **CSS Custom Properties**: `:root { --color1: rgb(255,112,0); --color2: rgb(250,178,90); }`
- **Typography**: `font-family`, `font-weight`, `text-transform: uppercase`, `line-height`, `letter-spacing`
- **Backgrounds**: `linear-gradient()`, `background-size: cover`, `background-position`, `rgba()` overlays
- **Layout techniques**: float-based nav (Top 1), flexbox (Homework 2), CSS Grid (Sessions 10, 15)

### Advanced CSS (Sessions 9–16)
- **CSS Grid**: `grid-template-columns: auto auto auto`, `column-gap`, `row-gap`
- **Responsive Design**: `@media only screen and (max-width: 900px)` with grid reflow from 2-col → 1-col
- **CSS Art**: pure-CSS car (`car.html`) built from positioned `<div>`s; CSS triangle via `border-left/right/bottom` hack; house drawing with roof, chimney, windows, door, sun
- **3D Transforms** (`3d cube.html`): `transform-style: preserve-3d`, `rotateX()`, `rotateY()`, `translateZ()`, `var(--edge)` for depth
- **Keyframe Animations**:
  - **Bouncing letters** (`Session 14`): 4 independent `@keyframes` with multi-stop timing (0%→25%→50%→67%→85%→95%→100%)
  - **Rain simulation** (`Session 16`): 10 raindrop elements with staggered `animation-duration` and `animation-iteration-count`, `@keyframes anim_drop` (top: 0 → 600px), sun rise with `animation-delay: 11s`
  - **3D rotation**: `@keyframes rotating` with `from { rotateX(-30deg) rotateY(0deg) }` to `to { rotateX(-30deg) rotateY(360deg) }`
- **Opacity & overlays**: `rgba(0,0,0,0.5)` overlay on video backgrounds, `z-index` stacking

### JavaScript Integration
- **Homework 2** (`app.js`): DOM manipulation — `querySelector`, `classList.add/remove/toggle`, event listeners for sign-in/sign-up panel toggle
- **Top 2** (`script.js`): Hamburger menu toggle, modal popup with `.show-popup` / `.show-signup` class toggling, `forEach` with `e.preventDefault()`

### Frameworks & Libraries Used
- **Bootstrap 5** (KHAWAJA): `navbar-expand-lg`, `data-bs-spy="scroll"`, `data-bs-toggle="collapse"`, grid system (`col-lg-4`, `col-md-6`), `btn`, `form-control`
- **Remix Icons**: full font icon set (`ri-arrow-right-line`, `ri-fire-fill`, `ri-twitter-fill`, etc.)
- **Material Icons**: Google Fonts icon set (`computer` icon in service cards)
- **Ionicons** (Top 1): CDN-loaded social icons (`logo-facebook`, `logo-instagram`)
- **Font Awesome** (Homework 2): CDN-loaded social icons (`fa-user`, `fa-lock`, `fab fa-facebook`)
- **Google Fonts**: "Poppins", "Open Sans", "Dela Gothic One", "Inter", "Cinzel", "Racing Sans One"

### Capstone: KHAWAJA Barber Salon
- Production-quality single-page site with 11 sections: Navbar → Hero → About → Services → Milestone Counters → Features → Team → Reviews → Blog → Booking Form → Footer
- Dark theme with `--bg1: #151828`, `--bg2: #1B1F34`, `--brand: #76ff9f` neon green accent
- Custom button system: `.btn-brand` (solid) / `.btn-outline-brand` (bordered, transparent) with hover swaps
- Team member cards with social icon overlays (`opacity: 0 → 1` on hover)
- Blog post cards with positioned date badges (absolute over image)
- Booking form with custom focus states (border-left-color transition)
- Scroll-spy active link tracking via Bootstrap

## 💡 Problem-Solving Case Study

### Challenge 1: Layout Entropy & The Float-to-Flex Migration
Early sessions relied on `float: left` and `display: inline-block` with percentage widths to build navigation bars. This caused alignment headaches — mismatched vertical baselines, collapsed parents, and magic-number margins (e.g., `margin-left: 270px` in Top 1). The breakthrough came in Homework 2 and Top 2, where `display: flex` replaced floats entirely. Flexbox eliminated clearance issues, simplified centering (`justify-content: center`, `align-items: center`), and made responsive reflow trivial. By Session 15, CSS Grid had replaced both — the responsive template uses `grid-template-columns` with media queries to collapse columns from 2 → 1 at 900px and 4 → 2 → 1 at 600px.

### Challenge 2: State Management Without a Framework (Sign-in/Sign-up Toggle)
Homework 2 and Top 2 both implement a login/signup toggle, but the approaches reveal an architectural evolution. Homework 2 uses two CSS classes (`sign-up-mode` and `sign-up-mode2`) toggled independently via JavaScript — this worked but introduced state duplication (the `::before` pseudo-element slide animation in one mode, form visibility in another). Top 2 simplified to a single `show-signup` class on the popup container: `formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup")`. The ternary operator pattern reduced bug surface area and made the show/hide logic declarative rather than imperative.

### Challenge 3: 3D Space & The `transform-style: preserve-3d` Pitfall
The 3D cube (Session 13) initially failed because each face's `rotateY` / `rotateX` was applied outside a 3D-rendering context — faces appeared flat or overlapping. The fix was `transform-style: preserve-3d` on the parent `.cube` container, which instructed the browser to flatten child transforms into a 3D space rather than the default 2D flattening. The `var(--edge)` approach (set to `1em`) parameterized the depth, making the cube scalable with font-size. Version 1 used a rapid `0.2s` rotation; Version 2 slowed it to `10s` for visual debugging.

### Challenge 4: Rain Animation Timing — Staggering Without JavaScript
The rain scene (Session 16) required 10 independent raindrops falling at different speeds and stopping after different counts — without a single line of JS. The solution was per-element CSS: each `.d1`–`.d10` received a unique `animation-duration` (0.4s–1.4s) and `animation-iteration-count` (6–13). The staggered values created a natural asynchronous rainfall pattern. The sun's delayed appearance (`animation-delay: 11s`) synced with the background color morphing from gray to light blue (`@keyframes anim_back`), simulating a storm clearing.

### Challenge 5: The "Disappearing Video" Background Z-Index Bug
Top 3's fullscreen video background kept overlaying the navigation because the `<video>` element has no default `z-index` context. The fix was a three-layer stack: `z-index: -1` on the video, `z-index: 0` on the `.overlay` (rgba black), and the `.navbar` / `.heading` at the normal flow level (their `position: absolute` created new stacking contexts above the overlay). The `object-fit: cover` on the video prevented distortion across aspect ratios — a key detail that avoids letterboxing.

### Challenge 6: Modal Popup Positioning & The Transition Warp
In Top 2, the login popup initially appeared offset because `transform: translate(-50%, -70%)` was combined with `transition: transform 0.3s`. On page load, the popup would "jump" from its raw centered position to the offset position. The solution was a two-state approach: `.form-popup` starts at `translate(-50%, -70%)` with `opacity: 0; pointer-events: none`, and `.show-popup .form-popup` transitions to `translate(-50%, -50%)` with full opacity. The `pointer-events` toggle prevents invisible elements from intercepting clicks.
