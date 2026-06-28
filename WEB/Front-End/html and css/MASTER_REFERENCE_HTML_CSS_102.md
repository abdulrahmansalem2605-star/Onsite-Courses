# Master Reference Manual: HTML & CSS 102

**Institution:** New Horizons Institute  
**Instructor:** M. Jijan  
**Duration:** 16 Sessions + 2 Homework Assignments + 3 Capstone Projects  
**Path:** Web Fundamentals & Visual Engineering

---

## Table of Contents

1. [Course Overview & Learning Arc](#1-course-overview--learning-arc)
2. [HTML Foundations](#2-html-foundations)
    - 2.1 Semantic Structure
    - 2.2 Tables (rowspan, colspan, thead/tbody)
    - 2.3 Form Controls
3. [CSS Core](#3-css-core)
    - 3.1 Selectors & Specificity
    - 3.2 Box Model
    - 3.3 Display & Positioning
    - 3.4 Typography & Backgrounds
4. [CSS Layout Evolution](#4-css-layout-evolution)
    - 4.1 Float-Based Layout
    - 4.2 Flexbox Migration
    - 4.3 CSS Grid
    - 4.4 Responsive Design & Media Queries
5. [Advanced CSS](#5-advanced-css)
    - 5.1 CSS Custom Properties
    - 5.2 3D Transforms & preserve-3d
    - 5.3 Keyframe Animations
    - 5.4 CSS Art & Geometric Construction
    - 5.5 Opacity, Overlays & Z-Index Stacking
6. [JavaScript Integration](#6-javascript-integration)
    - 6.1 DOM Manipulation
    - 6.2 Class-Based State Toggling
    - 6.3 Event Listener Patterns
7. [Frameworks, Libraries & Icon Systems](#7-frameworks-libraries--icon-systems)
    - 7.1 Bootstrap 5
    - 7.2 Icon Libraries
    - 7.3 Google Fonts
8. [Capstone: KHAWAJA Barber Salon](#8-capstone-khawaja-barber-salon)
9. [Problem-Solving Case Studies](#9-problem-solving-case-studies)
    - 9.1 Layout Entropy: The Float-to-Flex Migration
    - 9.2 State Management Without a Framework: Sign-In/Sign-Up Toggle
    - 9.3 3D Space & the transform-style: preserve-3d Pitfall
    - 9.4 Rain Animation Timing: Staggering Without JavaScript
    - 9.5 The Disappearing Video: Background Z-Index Bug
    - 9.6 Modal Popup Positioning & the Transition Warp
10. [Projects Catalog](#10-projects-catalog)

---

## 1. Course Overview & Learning Arc

This curriculum evolved from bare-bones HTML tags into a full Bootstrap 5 production-grade barber salon website. The progression spans 16 core sessions, 2 homework assignments, 3 capstone-style "Top" projects, and a final site deployment.

| Phase | Focus | Deliverable |
|-------|-------|-------------|
| HTML Foundations | Semantic structure, tables, forms | CV page, form widgets |
| CSS Core | Selectors, box model, inline → external | Styled documents |
| Layout | Float → Flexbox → CSS Grid | Responsive navigation |
| Advanced CSS | 3D transforms, keyframes, custom properties | CSS art, animations |
| JavaScript Integration | DOM manipulation, event listeners | Interactive modals |
| Frameworks | Bootstrap 5, icon libraries | KHAWAJA barber salon |
| Capstone | Production single-page site | 11-section business site |

Early files are single-tag experiments (`<div style="color:red">`), while later files feature responsive layouts, JavaScript-enhanced modals, and pure-CSS art.

---

## 2. HTML Foundations

### 2.1 Semantic Structure

Document structure was established with proper DOCTYPE declaration, language attribute, character encoding, and semantic `<head>`/`<body>` division:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>...</body>
</html>
```

The CV page (`cv.html`) demonstrated inline images via `<img src="sha.jpeg">`, hyperlinks via `<a href>`, and horizontal rules (`<hr>`) for content segmentation.

### 2.2 Tables (rowspan, colspan, thead/tbody)

Tabular data layouts employed:
- **`rowspan`** / **`colspan`** — Cell spanning across rows and columns
- **`<thead>`** / **`<tbody>`** — Semantic grouping for header and body rows
- **Nested content** — Links and images embedded inside table cells

### 2.3 Form Controls

A comprehensive form (`all.html`) demonstrated the full HTML form control spectrum:

| Control Type | Variants |
|-------------|----------|
| `input[type]` | text, password, button, date, time, number, range, checkbox, radio, color |
| `select` / `option` | Single and multiple selection |
| Structural | `fieldset` / `legend` |
| Attributes | `disabled`, `readonly`, `placeholder` |

---

## 3. CSS Core

### 3.1 Selectors & Specificity

The selector hierarchy progressed from simple to complex:

| Selector | Example |
|----------|---------|
| Element | `div`, `p`, `h1` |
| Class | `.class-name` |
| Universal | `*` |
| Descendant | `parent child` |
| Pseudo-element | `::placeholder` |
| Pseudo-class | `:focus` |

Styles migrated from inline attributes → internal `<style>` blocks → external `.css` files across the curriculum.

### 3.2 Box Model

Fundamental spacing primitives:
- **`border`** / **`border-radius`** — Visual boundary and rounding
- **`padding`** — Internal spacing
- **`margin: auto`** — Horizontal centering within parent containers

### 3.3 Display & Positioning

| Property | Values |
|----------|--------|
| `display` | `inline-block`, `flex` |
| `position` | `static` (default), `relative`, `absolute` |
| Coordinates | `top`, `left` with `z-index` for stacking |

### 3.4 Typography & Backgrounds

Typography controls:
- `font-family` — Typeface selection
- `font-weight` — Thickness variation
- `text-transform: uppercase` — Case enforcement
- `line-height` — Vertical rhythm
- `letter-spacing` — Tracking

Background techniques:
- `linear-gradient()` — Color transitions
- `background-size: cover` — Full-coverage fitting
- `background-position` — Focal point alignment
- `rgba()` overlays — Semi-transparent color layers (see [§5.5](#55-opacity-overlays--z-index-stacking))

---

## 4. CSS Layout Evolution

This section documents the architectural migration across three layout paradigms.

### 4.1 Float-Based Layout

Early navigation bars relied on `float: left` with percentage widths. This caused:
- Mismatched vertical baselines
- Collapsed parent containers
- Magic-number margins (e.g., `margin-left: 270px` in Top 1)
- Clearance hacks (`clear: both`)

See [§9.1](#91-layout-entropy-the-float-to-flex-migration) for the full problem analysis.

### 4.2 Flexbox Migration (Homework 2, Top 2)

The introduction of `display: flex` eliminated float-related issues:

| Benefit | Detail |
|---------|--------|
| Clearance elimination | No collapsed parents |
| Simplified centering | `justify-content: center`, `align-items: center` |
| Responsive reflow | Flex-wrap handled overflow naturally |

### 4.3 CSS Grid (Sessions 10, 15)

Grid superseded flexbox for two-dimensional layouts:

```css
grid-template-columns: auto auto auto;
column-gap: [value];
row-gap: [value];
```

### 4.4 Responsive Design & Media Queries

Breakpoints were applied to reflow grid layouts:

```css
@media only screen and (max-width: 900px) {
    /* Collapse 2-column layout to 1-column */
}

@media only screen and (max-width: 600px) {
    /* Collapse 4-column → 2-column → 1-column */
}
```

---

## 5. Advanced CSS

### 5.1 CSS Custom Properties

Centralized theming via `:root` variables:

```css
:root {
    --color1: rgb(255, 112, 0);
    --color2: rgb(250, 178, 90);
}
```

Custom properties enabled single-point color changes that propagated across all dependent selectors through CSS inheritance. This mechanism was later extended to JavaScript-driven runtime theming (see [§6.1](#61-dom-manipulation)).

### 5.2 3D Transforms & preserve-3d

The 3D cube (Session 13) required specific properties to render three-dimensional space:

```css
.cube {
    transform-style: preserve-3d;
}
.face {
    transform: rotateY([deg]) translateZ(var(--edge));
}
```

- **`transform-style: preserve-3d`** — Instructs the browser to composite child transforms into 3D space rather than the default 2D flattening. Without this, faces appeared flat or overlapping (see [§9.3](#93-3d-space--the-transform-style-preserve-3d-pitfall)).
- **`var(--edge)`** — A custom property set to `1em` that parameterized depth, making the cube scalable with font-size.
- **`rotateX()` / `rotateY()`** — Applied per-face for orientation.
- **Animation:** Version 1 used a rapid `0.2s` rotation; Version 2 slowed it to `10s` for visual debugging.

### 5.3 Keyframe Animations

| Animation | Details |
|-----------|---------|
| **Bouncing Letters** (Session 14) | 4 independent `@keyframes` with multi-stop timing: 0%→25%→50%→67%→85%→95%→100% |
| **Rain Simulation** (Session 16) | 10 raindrop elements, each with unique `animation-duration` (0.4s–1.4s) and `animation-iteration-count` (6–13). `@keyframes anim_drop` moved `top: 0 → 600px`. Sun appeared at `animation-delay: 11s` (see [§9.4](#94-rain-animation-timing-staggering-without-javascript)) |
| **3D Rotation** | `@keyframes rotating` from `rotateX(-30deg) rotateY(0deg)` to `rotateX(-30deg) rotateY(360deg)` |

### 5.4 CSS Art & Geometric Construction

Pure-CSS visual construction was demonstrated through:
- **Car (`car.html`):** Built from positioned `<div>` elements
- **CSS Triangle:** `border-left` / `border-right` / `border-bottom` hack with transparent sides
- **House:** Multi-element composition including roof, chimney, windows, door, and sun

### 5.5 Opacity, Overlays & Z-Index Stacking

- `rgba(0,0,0,0.5)` overlays for dimming backgrounds (video, modals)
- `z-index` stacking contexts managed via positioning contexts (see [§9.5](#95-the-disappearing-video-background-z-index-bug))

---

## 6. JavaScript Integration

### 6.1 DOM Manipulation

JavaScript was introduced for UI behavior:

| Method | Application |
|--------|-------------|
| `querySelector` | Element selection |
| `classList.add()` / `.remove()` / `.toggle()` | CSS class state management |
| `preventDefault()` | Form/link default suppression |

### 6.2 Class-Based State Toggling

**Homework 2** approach:
- Two independent CSS classes (`sign-up-mode`, `sign-up-mode2`) toggled separately
- Required synchronized state across `::before` pseudo-element and form visibility
- **Problem:** State duplication created a larger bug surface (see [§9.2](#92-state-management-without-a-framework-sign-insign-up-toggle))

**Top 2** refactored approach:
- Single `show-signup` class on the popup container
- Ternary operator pattern:

```javascript
formPopup.classList[
    link.id === 'signup-link' ? 'add' : 'remove'
]("show-signup");
```

- **Result:** Declarative, single-source-of-truth state management

### 6.3 Event Listener Patterns

- `forEach` with `e.preventDefault()` for bulk handler attachment
- Hamburger menu toggle for mobile navigation
- Modal popup with `.show-popup` / `.show-signup` class-based visibility (see [§9.6](#96-modal-popup-positioning--the-transition-warp))

---

## 7. Frameworks, Libraries & Icon Systems

### 7.1 Bootstrap 5

The KHAWAJA project employed Bootstrap 5 for production layout:

| Feature | Usage |
|---------|-------|
| `navbar-expand-lg` | Responsive navigation collapse |
| `data-bs-spy="scroll"` | Scroll-spy active link tracking |
| `data-bs-toggle="collapse"` | Mobile menu toggle |
| Grid system | `col-lg-4`, `col-md-6` for responsive columns |
| Components | `btn`, `form-control` for standardized UI |

### 7.2 Icon Libraries

| Library | Icons Used | Projects |
|---------|------------|----------|
| **Remix Icons** | `ri-arrow-right-line`, `ri-fire-fill`, `ri-twitter-fill` | KHAWAJA |
| **Material Icons** | `computer` | KHAWAJA service cards |
| **Ionicons** | `logo-facebook`, `logo-instagram` (CDN) | Top 1 |
| **Font Awesome** | `fa-user`, `fa-lock`, `fab fa-facebook` (CDN) | Homework 2 |

### 7.3 Google Fonts

| Font Family | Usage |
|-------------|-------|
| Poppins | Primary UI text |
| Open Sans | Body content |
| Dela Gothic One | Display/heading |
| Inter | Clean modern text |
| Cinzel | Serif accent |
| Racing Sans One | Sporty/display |

---

## 8. Capstone: KHAWAJA Barber Salon

A production-quality single-page business site comprising 11 sections:

1. **Navbar** — Bootstrap 5 responsive navigation with scroll-spy
2. **Hero** — Full-viewport introduction with call-to-action
3. **About** — Business description and value proposition
4. **Services** — Service cards with iconography
5. **Milestone Counters** — Statistical achievements
6. **Features** — Highlighted selling points
7. **Team** — Member cards with social hover overlays (`opacity: 0 → 1`)
8. **Reviews** — Testimonial carousel / grid
9. **Blog** — Post cards with positioned date badges (absolute over image)
10. **Booking Form** — Custom focus states with `border-left-color` transition
11. **Footer** — Site information and social links

**Design System:**

| Token | Value |
|-------|-------|
| `--bg1` | `#151828` (dark base) |
| `--bg2` | `#1B1F34` (lighter dark) |
| `--brand` | `#76ff9f` (neon green accent) |

**Button System:**
- `.btn-brand` — Solid brand color fill
- `.btn-outline-brand` — Bordered with transparent interior
- Hover states swap between solid and outline styles

---

## 9. Problem-Solving Case Studies

### 9.1 Layout Entropy: The Float-to-Flex Migration

**Problem:** Early navigation relied on `float: left` with percentage widths, causing alignment headaches — mismatched baselines, collapsed parents, and magic-number offsets (e.g., `margin-left: 270px` in Top 1).

**Solution:** Migration to `display: flex` in Homework 2 and Top 2 eliminated clearance issues, simplified centering, and made responsive reflow trivial. By Session 15, CSS Grid had replaced both for two-dimensional layouts.

**Progression:** Float → Flexbox → CSS Grid (see [§4](#4-css-layout-evolution))

---

### 9.2 State Management Without a Framework: Sign-In/Sign-Up Toggle

**Problem:** Homework 2 used two independent CSS classes (`sign-up-mode`, `sign-up-mode2`) toggled via JavaScript. This introduced state duplication: the `::before` pseudo-element slide animation in one mode, form visibility in another. Changes required synchronized updates across both, increasing bug surface area (see [§6.2](#62-class-based-state-toggling)).

**Solution:** Top 2 reduced complexity to a single `show-signup` class on the popup container:

```javascript
formPopup.classList[
    link.id === 'signup-link' ? 'add' : 'remove'
]("show-signup");
```

The ternary operator pattern made show/hide logic declarative rather than imperative, with a single source of truth for all visibility states.

---

### 9.3 3D Space & the transform-style: preserve-3d Pitfall

**Problem:** The 3D cube faces appeared flat or overlapping because each face's `rotateY` / `rotateX` was applied outside a 3D-rendering context. By default, browsers flatten child transforms into the parent's 2D plane.

**Solution:** `transform-style: preserve-3d` on the parent `.cube` container instructed the browser to composite child transforms into a shared 3D space (see [§5.2](#52-3d-transforms--preserve-3d)). The `var(--edge)` custom property (set to `1em`) parameterized depth, making the cube scalable with font-size.

**Iteration:** Version 1 used `0.2s` rotation speed; Version 2 slowed to `10s` for visual debugging.

---

### 9.4 Rain Animation Timing: Staggering Without JavaScript

**Problem:** The rain scene required 10 independent raindrops falling at different speeds, stopping after different counts — without any JavaScript.

**Solution:** Per-element CSS properties assigned unique timing values (see [§5.3](#53-keyframe-animations)):

```css
.d1 { animation-duration: 0.4s; animation-iteration-count: 6; }
.d2 { animation-duration: 0.6s; animation-iteration-count: 8; }
/* ... through .d10 with varied values */
```

Staggered durations (0.4s–1.4s) and iteration counts (6–13) created a natural asynchronous rainfall pattern. The sun's delayed appearance (`animation-delay: 11s`) synced with background color morphing from gray to light blue (`@keyframes anim_back`), simulating a storm clearing.

---

### 9.5 The Disappearing Video: Background Z-Index Bug

**Problem:** A fullscreen `<video>` background overlaid the navigation because `<video>` elements inherit no default stacking context (see [§5.5](#55-opacity-overlays--z-index-stacking)).

**Solution:** A three-layer z-index stack:

| Layer | Element | Z-Index |
|-------|---------|---------|
| Back | `<video>` | `-1` |
| Middle | `.overlay` (rgba black) | `0` |
| Front | `.navbar` / `.heading` | Normal flow |

The `.navbar` and `.heading` elements used `position: absolute` which created new stacking contexts above the overlay automatically. The `object-fit: cover` property on the video prevented distortion across screen aspect ratios, avoiding letterboxing.

---

### 9.6 Modal Popup Positioning & the Transition Warp

**Problem:** The login popup appeared offset because `transform: translate(-50%, -70%)` was combined with `transition: transform 0.3s`. On page load, the popup "jumped" from its raw centered position to the offset position.

**Solution:** A two-state approach (see [§6.3](#63-event-listener-patterns)):

| State | Transform | Opacity | Pointer Events |
|-------|-----------|---------|----------------|
| Hidden (`.form-popup`) | `translate(-50%, -70%)` | `0` | `none` |
| Visible (`.show-popup .form-popup`) | `translate(-50%, -50%)` | `1` | `auto` |

The `pointer-events: none` toggle prevented invisible elements from intercepting clicks, while the transition property animated smoothly between the two transform states without the initial jump.

---

## 10. Projects Catalog

| Project | Core Techniques | Key Sections |
|---------|-----------------|--------------|
| Session 1 | DOCTYPE, head, body, meta charset | [§2.1](#21-semantic-structure) |
| Session 2 | Inline images, anchors, HR | [§2.1](#21-semantic-structure) |
| Session 3 | Tables with rowspan/colspan, thead/tbody | [§2.2](#22-tables-rowspan-colspan-theadtbody) |
| Session 4 | Inline CSS → internal style blocks | [§3.1](#31-selectors--specificity) |
| Session 5 | External CSS files, class/element selectors | [§3.1](#31-selectors--specificity) |
| Session 6 | Box model, border, padding, margin | [§3.2](#32-box-model) |
| Session 7 | Display modes, positioning, z-index | [§3.3](#33-display--positioning) |
| Session 8 | Flexbox, alignment, Homework 0 | [§4.2](#42-flexbox-migration-homework-2-top-2) |
| Session 9 | CSS Grid introduction | [§4.3](#43-css-grid-sessions-10-15) |
| Session 10 | Responsive grids with media queries | [§4.4](#44-responsive-design--media-queries) |
| Session 11 | CSS art: car, triangle hack | [§5.4](#54-css-art--geometric-construction) |
| Session 12 | CSS custom properties, theming | [§5.1](#51-css-custom-properties) |
| Session 13 | 3D transforms, preserve-3d, rotating cube | [§5.2](#52-3d-transforms--preserve-3d), [§9.3](#93-3d-space--the-transform-style-preserve-3d-pitfall) |
| Session 14 | Keyframe animations, bouncing letters | [§5.3](#53-keyframe-animations) |
| Session 15 | Advanced grid, multi-column responsive | [§4.3](#43-css-grid-sessions-10-15), [§4.4](#44-responsive-design--media-queries) |
| Session 16 | Rain simulation, staggered animations | [§5.3](#53-keyframe-animations), [§9.4](#94-rain-animation-timing-staggering-without-javascript) |
| Homework 1 | Form controls, fieldset, select/option | [§2.3](#23-form-controls) |
| Homework 2 | Sign-in/sign-up toggle, flexbox, Font Awesome | [§4.2](#42-flexbox-migration-homework-2-top-2), [§6.2](#62-class-based-state-toggling), [§7.2](#72-icon-libraries) |
| Top 1 | Float-based nav, Ionicons, hero section | [§4.1](#41-float-based-layout), [§7.2](#72-icon-libraries) |
| Top 2 | Flexbox nav, modal popup, event listeners | [§4.2](#42-flexbox-migration-homework-2-top-2), [§6.3](#63-event-listener-patterns), [§9.6](#96-modal-popup-positioning--the-transition-warp) |
| Top 3 | Video background, overlay layers, z-index stacking | [§5.5](#55-opacity-overlays--z-index-stacking), [§9.5](#95-the-disappearing-video-background-z-index-bug) |
| KHAWAJA | Bootstrap 5, 11-section SPA, custom design system | [§7.1](#71-bootstrap-5), [§8](#8-capstone-khawaja-barber-salon) |

---

*End of Master Reference Manual: HTML & CSS 102*
