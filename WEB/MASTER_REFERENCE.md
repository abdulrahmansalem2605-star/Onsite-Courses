# Master Reference Manual: Web Engineering Curriculum

**Institution:** New Horizons Institute  
**Instructor:** M. Jijan  
**Duration:** 46 Sessions + 4 Homework Assignments + 3 Capstone Projects  
**Tracks:** Front-End (Client-Side Programming) + Back-End (Server-Side Engineering)

---

## Table of Contents

### Track I: Front-End — JavaScript 102

1. [Course Overview & Learning Arc](#i1-course-overview--learning-arc)
2. [JavaScript Core Language](#i2-javascript-core-language)
    - 2.1 Syntax Foundations
    - 2.2 Type Coercion & Parsing
    - 2.3 String Normalization & Search
    - 2.4 Dynamic Template Literals
3. [DOM Programming](#i3-dom-programming)
    - 3.1 Selection & Mutation
    - 3.2 Inline Event Binding
    - 3.3 CSS Custom Property Theming via JavaScript
4. [Array State Management](#i4-array-state-management)
    - 4.1 Parallel Array Pattern
    - 4.2 Insertion & Deletion Strategies
    - 4.3 Reverse-Loop Splicing
5. [Game Development & State Machines](#i5-game-development--state-machines)
    - 5.1 Turn-Based Boolean Guards
    - 5.2 Two-Card Memory Slot Pattern
    - 5.3 Same-Click Guard
6. [Asynchronous Programming](#i6-asynchronous-programming)
    - 6.1 Timer APIs
    - 6.2 Visual Countdown Timer Mechanics
7. [Algorithms & Data Transformations](#i7-algorithms--data-transformations)
    - 7.1 Fisher-Yates Shuffle
    - 7.2 Array Filtering & Batch Deletion
8. [CSS Integration & Layout Techniques](#i8-css-integration--layout-techniques)
    - 8.1 Flexbox & Grid Layouts
    - 8.2 Custom Property-Driven Theming
    - 8.3 Neumorphic Styling
    - 8.4 Font Awesome Icon System
9. [Problem-Solving Case Studies](#i9-problem-solving-case-studies)
    - 9.1 Memory Game: From Static Cards to Shuffled Timed Rounds
    - 9.2 Array Delete: Solving the Index-Shift Bug
    - 9.3 Homework 2 Calculator: Eval-Based Architecture
10. [Projects Catalog](#i10-projects-catalog)

### Track II: Front-End — HTML & CSS 102

11. [Course Overview & Learning Arc](#ii1-course-overview--learning-arc)
12. [HTML Foundations](#ii2-html-foundations)
    - 12.1 Semantic Structure
    - 12.2 Tables (rowspan, colspan, thead/tbody)
    - 12.3 Form Controls
13. [CSS Core](#ii3-css-core)
    - 13.1 Selectors & Specificity
    - 13.2 Box Model
    - 13.3 Display & Positioning
    - 13.4 Typography & Backgrounds
14. [CSS Layout Evolution](#ii4-css-layout-evolution)
    - 14.1 Float-Based Layout
    - 14.2 Flexbox Migration
    - 14.3 CSS Grid
    - 14.4 Responsive Design & Media Queries
15. [Advanced CSS](#ii5-advanced-css)
    - 15.1 CSS Custom Properties
    - 15.2 3D Transforms & preserve-3d
    - 15.3 Keyframe Animations
    - 15.4 CSS Art & Geometric Construction
    - 15.5 Opacity, Overlays & Z-Index Stacking
16. [JavaScript Integration](#ii6-javascript-integration)
    - 16.1 DOM Manipulation
    - 16.2 Class-Based State Toggling
    - 16.3 Event Listener Patterns
17. [Frameworks, Libraries & Icon Systems](#ii7-frameworks-libraries--icon-systems)
    - 17.1 Bootstrap 5
    - 17.2 Icon Libraries
    - 17.3 Google Fonts
18. [Capstone: KHAWAJA Barber Salon](#ii8-capstone-khawaja-barber-salon)
19. [Problem-Solving Case Studies](#ii9-problem-solving-case-studies)
    - 19.1 Layout Entropy: The Float-to-Flex Migration
    - 19.2 State Management Without a Framework: Sign-In/Sign-Up Toggle
    - 19.3 3D Space & the transform-style: preserve-3d Pitfall
    - 19.4 Rain Animation Timing: Staggering Without JavaScript
    - 19.5 The Disappearing Video: Background Z-Index Bug
    - 19.6 Modal Popup Positioning & the Transition Warp
20. [Projects Catalog](#ii10-projects-catalog)

### Track III: Back-End — ASP.NET Core Full-Stack

21. [Course Overview & Learning Arc](#iii1-course-overview--learning-arc)
22. [Core Framework & Runtime](#iii2-core-framework--runtime)
    - 22.1 ASP.NET Core 8.0 Foundation
    - 22.2 Razor Pages Architecture
    - 22.3 MVC Exposure
    - 22.4 Minimal Web API
23. [Data Access & Persistence](#iii3-data-access--persistence)
    - 23.1 Entity Framework Core 8.0
    - 23.2 Code-First Migrations
    - 23.3 ApplicationDbContext & Identity Integration
    - 23.4 Custom globals Helper Class
24. [Authentication & Authorization](#iii4-authentication--authorization)
    - 24.1 ASP.NET Core Identity
    - 24.2 SignInManager & UserManager
    - 24.3 Dual Layout Architecture
25. [Frontend & Static Assets](#iii5-frontend--static-assets)
    - 25.1 Bootstrap 4.5.3 & Custom CSS Variables
    - 25.2 Owl Carousel 2
    - 25.3 Isotope.js Portfolio Filtering
    - 25.4 Lightbox, Waypoints & CounterUp
    - 25.5 Modular Partial Sections
26. [Admin CRUD & Scaffolding](#iii6-admin-crud--scaffolding)
    - 26.1 Auto-Generated Admin Panels
    - 26.2 Model Binding & Entity State Management
    - 26.3 Image Upload Fields
    - 26.4 Scaffolded Identity UI
27. [Reference Architecture Knowledge](#iii7-reference-architecture-knowledge)
28. [Problem-Solving Case Studies](#iii8-problem-solving-case-studies)
    - 28.1 The Hardcoded Data Ceiling
    - 28.2 Static Frontend to Dynamic CMS Bridge
    - 28.3 Identity Integration & Admin Isolation
    - 28.4 Schema Evolution via Migrations
29. [Projects Catalog](#iii9-projects-catalog)

---

# Track I: Client-Side Programming & DOM Engineering

## I.1 Course Overview & Learning Arc

This curriculum systematically progressed from JavaScript syntax fundamentals into fully interactive, DOM-driven applications. The arc demonstrates a deliberate ramp-up in complexity across 11 sessions and 2 homework assignments:

| Phase | Focus | Deliverable |
|-------|-------|-------------|
| Syntax | `console.log()`, variables, operators | Console greetings |
| Arithmetic | `parseInt`/`parseFloat`, `eval` | Calculator applications |
| DOM Intro | `getElementById`, `innerHTML`, events | Interactive widgets |
| Data Structures | Parallel arrays, `splice`, `filter` | CRUD student management |
| Game Dev | State machines, timers, shuffle | Memory card game |
| Integration | CSS custom properties, cart management | E-commerce shopping cart |

The work culminates in modularized array operations with reverse-loop splicing, Fisher-Yates shuffling, and CSS custom-property-driven theme toggling — patterns that bridge fundamental JavaScript with practical application engineering.

---

## I.2 JavaScript Core Language

### I.2.1 Syntax Foundations

Initial sessions established the fundamental building blocks of JavaScript: variable declaration, console output, operator precedence, and control flow. The progression moved from single-expression scripts to multi-branch handler functions dispatching from inline HTML event attributes.

### I.2.2 Type Coercion & Parsing

Building arithmetic tools required deliberate type handling:

- **`parseInt()`** — Integer extraction from HTML input values (strings) to numeric types for addition operations.
- **`parseFloat()`** — Floating-point preservation for decimal arithmetic, maintaining fractional precision.
- **`eval()`** — Deployed in Homework 2 for arbitrary arithmetic string resolution. Input characters (`×`, `÷`) were sanitized via `replaceAll()` to JavaScript operators (`*`, `/`) before evaluation, trading fine-grained operation control for code minimalism (see [§I.9.3](#i93-homework-2-calculator-eval-based-architecture)).

### I.2.3 String Normalization for Search

Search operations across array datasets employed a dual-normalization strategy:

```
query.toUpperCase().trim() === target.toUpperCase().trim()
```

This pattern enabled case-insensitive matching with tolerance for surrounding whitespace, applied uniformly to both user input and stored data.

### I.2.4 Dynamic Template Literals

Backtick-delimited HTML strings rendered dynamic data rows with inline identifiers for direct element targeting:

```javascript
`<div id='stu_${i}' class='student-row'>${name} | ${gender} | ${average}</div>`
```

This pattern eliminated the need for manual DOM construction with `createElement`/`appendChild` in CRUD interfaces, enabling rapid re-rendering of array state (see [§I.4.2](#i42-insertion--deletion-strategies)).

---

## I.3 DOM Programming

### I.3.1 Selection & Mutation

Direct element manipulation was achieved without jQuery or frameworks:

| Method | Application |
|--------|-------------|
| `document.getElementById()` | Primary selection mechanism |
| `innerHTML` | Bulk content replacement |
| `style.background` / `style.backgroundColor` | Inline color mutation |
| `style.display` | Visibility toggling |
| `.remove()` | Element destruction |
| `classList.contains()` | State-checking before branching |

### I.3.2 Inline Event Binding

Event handlers were attached directly to HTML elements via attribute-based binding:

| Attribute | Role |
|-----------|------|
| `onclick` | Primary interaction trigger (buttons, cards, grid items) |
| `onchange` | Form input and selection widgets |
| `onblur` | Focus-loss validation |
| `oninput` | Real-time value capture |
| `onmouseenter` / `onmouseleave` | Hover state triggers |
| `onscroll` | Scroll-position detection |

Handlers dispatched to both single-purpose functions and multi-branch conditional logic based on element state or game phase.

### I.3.3 CSS Custom Property Theming via JavaScript

Runtime theme switching was implemented by targeting `:root` CSS custom properties via JavaScript:

```javascript
document.querySelector(':root').style.setProperty('--color1', newValue);
```

The theme toggle rewrote four variables (`--color1`, `--color2`, `--color3`, `--text_color`) between dark and light presets. Font Awesome icon classes swapped between `fa-sun` and `fa-moon` to reflect the current mode (see [§I.8.4](#i84-font-awesome-icon-system)).

---

## I.4 Array State Management

### I.4.1 Parallel Array Pattern

Before adopting object-oriented or relational patterns, data was managed across parallel arrays:

```javascript
let students = [];
let genders  = [];
let averages = [];
```

Each index represented a single record, with operations maintaining cross-array consistency. This pattern, while primitive, enforced disciplined index management that later informed understanding of relational data structures.

### I.4.2 Insertion & Deletion Strategies

- **Insertion:** `push()` appended new records across all parallel arrays simultaneously.
- **Single deletion:** `splice(i, 1)` removed a record at a known index.
- **Filtering:** `filter()` (commented out as an alternative) demonstrated awareness of declarative array methods, though the primary implementation used index-based splicing.

### I.4.3 Reverse-Loop Splicing

A forward-iterating loop over an array during deletion causes index-shifting: when `splice(i, 1)` removes an element, all subsequent elements shift left, causing the loop to skip the next element. The solution:

```javascript
for (let i = students.length - 1; i >= 0; i--) {
    if (condition) {
        students.splice(i, 1);
        genders.splice(i, 1);
        averages.splice(i, 1);
    }
}
```

By iterating in reverse, deletions only affect already-processed indices, leaving forward elements untouched. This pattern was reused across:
- `delete_by_gender()` — gender-based batch filtering
- `delete_below_average()` — threshold-based pruning

See also [§I.7.2](#i72-array-filtering--batch-deletion) and [§I.9.2](#i92-array-delete-solving-the-index-shift-bug) for the full problem analysis.

---

## I.5 Game Development & State Machines

### I.5.1 Turn-Based Boolean Guards

Game logic was gated behind a set of boolean flags that defined the state machine:

- `turn` — Alternating player indicator
- `end_game` — Terminal state lock
- `game_started` — Prevents interaction before initialization

The `game_started` flag was especially critical: toggled by a "Start Game" button, it prevented all click handlers from executing during pre-game or post-game states, while `turn` and `end_game` sequenced the gameplay phases.

### I.5.2 Two-Card Memory Slot Pattern

The memory game implemented a dual-slot pattern for card matching:

```javascript
let first_card  = 0;
let second_card = 0;
```

- `first_card` captured the first clicked card's identifier.
- `second_card` captured the second, triggering comparison logic.
- A mismatch triggered a `setTimeout` fallback that hid both cards after a staggered delay (see [§I.6.1](#i61-timer-apis)).
- The slots were gated to prevent interaction during the reveal/hide animation window.

### I.5.3 Same-Click Guard

A subtle bug emerged when a player clicked the same card twice: both `first_card` and `second_card` would reference the same element, triggering a false match. The fix was an early-return guard:

```javascript
if (first_card == second_card) {
    second_card = 0;
    return;
}
```

This ensured that a double-click on the same card was silently ignored rather than incorrectly treated as a successful match. See [§I.9.1](#i91-memory-game-from-static-cards-to-shuffled-timed-rounds) for the full problem analysis.

---

## I.6 Asynchronous Programming

### I.6.1 Timer APIs

Three timer primitives were employed across projects:

| API | Role |
|-----|------|
| `setInterval(fn, ms)` | Repeating callback for countdown tick |
| `setTimeout(fn, ms)` | Delayed single execution for card hide |
| `clearInterval(id)` | Timer termination on game end |

### I.6.2 Visual Countdown Timer Mechanics

The memory game featured a real-time visual pressure bar implemented via `setInterval`:

```javascript
let timer_width = 495;
let timer_id = setInterval(time_step, 50);

function time_step() {
    timer_width -= 1;
    if (timer_width <= 0) {
        clearInterval(timer_id);
        end_game = true;
    }
}
```

The 50ms interval produced a smooth 24.75-second countdown, with each tick decrementing a pixel-width variable that controlled a `div` element's visual width (495px → 0px). This created an intuitive, real-time pressure mechanism without requiring a second-precision clock.

Staggered `setTimeout` calls in the memory game also sequenced the card-hide animation: a 200ms delay on mismatch gave the player a brief glimpse of the second card before both were concealed.

---

## I.7 Algorithms & Data Transformations

### I.7.1 Fisher-Yates Shuffle

The Fisher-Yates (Knuth) shuffle algorithm was implemented for randomized card placement in the memory game:

```javascript
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```

Key characteristics:
- **In-place:** Mutates the original array, avoiding memory allocation.
- **Unbiased:** Every permutation is equally probable.
- **Descending index:** Iterates from the last element to the first, swapping each with a randomly chosen earlier element.
- **Destructuring swap:** ES6 syntax `[a[i], a[j]] = [a[j], a[i]]` eliminates the need for a temporary variable.

The shuffled `game_numbers[]` array was used to populate card values at load time, ensuring every game session had a unique layout. See [§I.9.1](#i91-memory-game-from-static-cards-to-shuffled-timed-rounds) for the integration context.

### I.7.2 Array Filtering & Batch Deletion

Two batch-deletion strategies evolved:

1. **Condition-based pruning:** Using the reverse-loop pattern (see [§I.4.3](#i43-reverse-loop-splicing)), elements matching a predicate were removed in a single pass.
2. **Declarative filtering:** `filter()` was explored as an alternative (commented out), demonstrating awareness of immutable transformation patterns versus imperative splicing.

---

## I.8 CSS Integration & Layout Techniques

### I.8.1 Flexbox & Grid Layouts

| Technique | Application |
|-----------|-------------|
| `display: flex` | Container row alignment, centering |
| `grid-template-columns: repeat(2, 1fr)` | Product grid layouts |
| `grid-gap` | Spacing between grid items |
| `position: absolute` | Overlay elements |
| `overflow-y: scroll` | Scrollable cart container |

### I.8.2 Custom Property-Driven Theming

CSS custom properties enabled runtime theme switching without stylesheet reloads:

```css
:root {
    --color1: [value];
    --color2: [value];
    --color3: [value];
    --text_color: [value];
}
```

JavaScript's `style.setProperty()` (see [§I.3.3](#i33-css-custom-property-theming-via-javascript)) mutated these values between dark and light presets, with all dependent selectors updating automatically due to CSS inheritance.

### I.8.3 Neumorphic Styling

The Homework 2 calculator employed neumorphic design via combined `border-radius` and `inset` box-shadows, creating a soft, extruded appearance that responded to the theme state.

### I.8.4 Font Awesome Icon System

Font Awesome icons were integrated across multiple projects for UI affordances:

| Icon Class | Component | Context |
|------------|-----------|---------|
| `fa-sun` / `fa-moon` | Theme toggle button | Dark/light mode indicator |
| `fa-cart-shopping` | Cart button | E-commerce shopping cart |
| `fa-trash` | Delete action | Cart item removal |

Icon classes were swapped programmatically via `classList` manipulation to reflect application state, such as toggling between `fa-sun` and `fa-moon` on theme change.

---

## I.9 Problem-Solving Case Studies

### I.9.1 Memory Game: From Static Cards to Shuffled Timed Rounds

**Session 8** implementation:
- Hardcoded card values (no randomization)
- No timer or pressure mechanism
- Simple click-to-reveal with 200ms `setTimeout` on mismatch

**Problems identified:**
1. Predictable card layout made the game trivial
2. No urgency mechanism reduced engagement

**Session 9 solutions:**
1. **Fisher-Yates shuffle** (see [§I.7.1](#i71-fisher-yates-shuffle)) on `game_numbers[]` at load time guaranteed unique layouts per session.
2. **Visual countdown timer** (see [§I.6.2](#i62-visual-countdown-timer-mechanics)) using `setInterval(time_step, 50)` decremented a pixel-width variable (`timer_width -= 1`), progressively shrinking a `div` from 495px to 0.
3. **Double-click bug fix** (see [§I.5.3](#i53-same-click-guard)): Early-return guard (`if (first_card == second_card)`) prevented same-element false matches.
4. **State gating** (see [§I.5.1](#i51-turn-based-boolean-guards)): All gameplay locked behind `game_started` boolean, toggled exclusively by the "Start Game" button.

### I.9.2 Array Delete: Solving the Index-Shift Bug

**Problem:** Forward iteration during `splice()` caused skipped elements because each deletion shifted remaining indices left.

```
Initial:  [A, B, C, D, E]
Delete at index 1 (B) → [A, C, D, E]
Next iteration: i=2 → points to D (skipped C!)
```

**Solution:** Reverse-loop iteration (see [§I.4.3](#i43-reverse-loop-splicing)):

```
for (let i = length-1; i >= 0; i--)
Delete at index 1 (B) → [A, C, D, E]
Next iteration: i=0 → points to A (correct)
```

Deletions only affect already-processed indices. This pattern was abstracted into reusable batch-delete functions for gender-based and threshold-based filtering.

### I.9.3 Homework 2 Calculator: Eval-Based Architecture

**Design leap:** Replaced per-button operation logic (Sessions 2–3) with a flat `eval()` strategy:

1. **Input accumulation:** `res.value += char` appended each button press to a display string.
2. **Symbol sanitization:** `replaceAll()` converted `×` to `*` and `÷` to `/`.
3. **Resolution:** `eval(normalizedString)` computed the result.
4. **Theme toggle:** `data-theme` attribute + CSS custom properties (see [§I.8.2](#i82-custom-property-driven-theming)) enabled dark/light mode.
5. **UX polish:** Neumorphic styling (see [§I.8.3](#i83-neumorphic-styling)) via `inset` box-shadows.

This approach sacrificed per-operator validation for code minimalism and represented a clear architectural evolution from the per-button handler pattern.

---

## I.10 Projects Catalog

| Project | Core Techniques | Key Sections |
|---------|-----------------|--------------|
| Session 1 | `console.log()`, variable declaration | [§I.2.1](#i21-syntax-foundations) |
| Sessions 2–3 | `parseInt()`, `parseFloat()`, button event handlers | [§I.2.2](#i22-type-coercion--parsing), [§I.3.2](#i32-inline-event-binding) |
| Homework 1 | Arithmetic calculator | [§I.2.2](#i22-type-coercion--parsing) |
| Homework 2 | `eval()`-based calculator, custom theming, neumorphic CSS | [§I.8.2](#i82-custom-property-driven-theming), [§I.8.3](#i83-neumorphic-styling), [§I.9.3](#i93-homework-2-calculator-eval-based-architecture) |
| Session 4 | CRUD with parallel arrays, `splice()`, reverse-loop | [§I.4](#i4-array-state-management) |
| Session 5 | Array filtering, `filter()` alternative | [§I.7.2](#i72-array-filtering--batch-deletion) |
| Session 6 | Tic-Tac-Toe state machine | [§I.5.1](#i51-turn-based-boolean-guards) |
| Session 7 | Multi-dimensional array operations | [§I.4](#i4-array-state-management) |
| Session 8 | Memory game (static, no timer) | [§I.5.2](#i52-two-card-memory-slot-pattern), [§I.9.1](#i91-memory-game-from-static-cards-to-shuffled-timed-rounds) |
| Session 9 | Memory game V2: Fisher-Yates shuffle, countdown timer | [§I.6.2](#i62-visual-countdown-timer-mechanics), [§I.7.1](#i71-fisher-yates-shuffle), [§I.9.1](#i91-memory-game-from-static-cards-to-shuffled-timed-rounds) |
| Session 10 | Asynchronous timer mechanics | [§I.6](#i6-asynchronous-programming) |
| Session 11 | E-commerce shopping cart with dynamic cart management | [§I.8.1](#i81-flexbox--grid-layouts), [§I.8.4](#i84-font-awesome-icon-system) |

---

*End of Track I — JavaScript 102*

---

# Track II: Web Fundamentals & Visual Engineering

## II.1 Course Overview & Learning Arc

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

## II.2 HTML Foundations

### II.2.1 Semantic Structure

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

### II.2.2 Tables (rowspan, colspan, thead/tbody)

Tabular data layouts employed:
- **`rowspan`** / **`colspan`** — Cell spanning across rows and columns
- **`<thead>`** / **`<tbody>`** — Semantic grouping for header and body rows
- **Nested content** — Links and images embedded inside table cells

### II.2.3 Form Controls

A comprehensive form (`all.html`) demonstrated the full HTML form control spectrum:

| Control Type | Variants |
|-------------|----------|
| `input[type]` | text, password, button, date, time, number, range, checkbox, radio, color |
| `select` / `option` | Single and multiple selection |
| Structural | `fieldset` / `legend` |
| Attributes | `disabled`, `readonly`, `placeholder` |

---

## II.3 CSS Core

### II.3.1 Selectors & Specificity

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

### II.3.2 Box Model

Fundamental spacing primitives:
- **`border`** / **`border-radius`** — Visual boundary and rounding
- **`padding`** — Internal spacing
- **`margin: auto`** — Horizontal centering within parent containers

### II.3.3 Display & Positioning

| Property | Values |
|----------|--------|
| `display` | `inline-block`, `flex` |
| `position` | `static` (default), `relative`, `absolute` |
| Coordinates | `top`, `left` with `z-index` for stacking |

### II.3.4 Typography & Backgrounds

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
- `rgba()` overlays — Semi-transparent color layers (see [§II.5.5](#ii55-opacity-overlays--z-index-stacking))

---

## II.4 CSS Layout Evolution

This section documents the architectural migration across three layout paradigms.

### II.4.1 Float-Based Layout

Early navigation bars relied on `float: left` with percentage widths. This caused:
- Mismatched vertical baselines
- Collapsed parent containers
- Magic-number margins (e.g., `margin-left: 270px` in Top 1)
- Clearance hacks (`clear: both`)

See [§II.9.1](#ii91-layout-entropy-the-float-to-flex-migration) for the full problem analysis.

### II.4.2 Flexbox Migration (Homework 2, Top 2)

The introduction of `display: flex` eliminated float-related issues:

| Benefit | Detail |
|---------|--------|
| Clearance elimination | No collapsed parents |
| Simplified centering | `justify-content: center`, `align-items: center` |
| Responsive reflow | Flex-wrap handled overflow naturally |

### II.4.3 CSS Grid (Sessions 10, 15)

Grid superseded flexbox for two-dimensional layouts:

```css
grid-template-columns: auto auto auto;
column-gap: [value];
row-gap: [value];
```

### II.4.4 Responsive Design & Media Queries

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

## II.5 Advanced CSS

### II.5.1 CSS Custom Properties

Centralized theming via `:root` variables:

```css
:root {
    --color1: rgb(255, 112, 0);
    --color2: rgb(250, 178, 90);
}
```

Custom properties enabled single-point color changes that propagated across all dependent selectors through CSS inheritance. This mechanism was later extended to JavaScript-driven runtime theming (see [§II.6.1](#ii61-dom-manipulation)).

### II.5.2 3D Transforms & preserve-3d

The 3D cube (Session 13) required specific properties to render three-dimensional space:

```css
.cube {
    transform-style: preserve-3d;
}
.face {
    transform: rotateY([deg]) translateZ(var(--edge));
}
```

- **`transform-style: preserve-3d`** — Instructs the browser to composite child transforms into 3D space rather than the default 2D flattening. Without this, faces appeared flat or overlapping (see [§II.9.3](#ii93-3d-space--the-transform-style-preserve-3d-pitfall)).
- **`var(--edge)`** — A custom property set to `1em` that parameterized depth, making the cube scalable with font-size.
- **`rotateX()` / `rotateY()`** — Applied per-face for orientation.
- **Animation:** Version 1 used a rapid `0.2s` rotation; Version 2 slowed it to `10s` for visual debugging.

### II.5.3 Keyframe Animations

| Animation | Details |
|-----------|---------|
| **Bouncing Letters** (Session 14) | 4 independent `@keyframes` with multi-stop timing: 0%→25%→50%→67%→85%→95%→100% |
| **Rain Simulation** (Session 16) | 10 raindrop elements, each with unique `animation-duration` (0.4s–1.4s) and `animation-iteration-count` (6–13). `@keyframes anim_drop` moved `top: 0 → 600px`. Sun appeared at `animation-delay: 11s` (see [§II.9.4](#ii94-rain-animation-timing-staggering-without-javascript)) |
| **3D Rotation** | `@keyframes rotating` from `rotateX(-30deg) rotateY(0deg)` to `rotateX(-30deg) rotateY(360deg)` |

### II.5.4 CSS Art & Geometric Construction

Pure-CSS visual construction was demonstrated through:
- **Car (`car.html`):** Built from positioned `<div>` elements
- **CSS Triangle:** `border-left` / `border-right` / `border-bottom` hack with transparent sides
- **House:** Multi-element composition including roof, chimney, windows, door, and sun

### II.5.5 Opacity, Overlays & Z-Index Stacking

- `rgba(0,0,0,0.5)` overlays for dimming backgrounds (video, modals)
- `z-index` stacking contexts managed via positioning contexts (see [§II.9.5](#ii95-the-disappearing-video-background-z-index-bug))

---

## II.6 JavaScript Integration

### II.6.1 DOM Manipulation

JavaScript was introduced for UI behavior:

| Method | Application |
|--------|-------------|
| `querySelector` | Element selection |
| `classList.add()` / `.remove()` / `.toggle()` | CSS class state management |
| `preventDefault()` | Form/link default suppression |

### II.6.2 Class-Based State Toggling

**Homework 2** approach:
- Two independent CSS classes (`sign-up-mode`, `sign-up-mode2`) toggled separately
- Required synchronized state across `::before` pseudo-element and form visibility
- **Problem:** State duplication created a larger bug surface (see [§II.9.2](#ii92-state-management-without-a-framework-sign-insign-up-toggle))

**Top 2** refactored approach:
- Single `show-signup` class on the popup container
- Ternary operator pattern:

```javascript
formPopup.classList[
    link.id === 'signup-link' ? 'add' : 'remove'
]("show-signup");
```

- **Result:** Declarative, single-source-of-truth state management

### II.6.3 Event Listener Patterns

- `forEach` with `e.preventDefault()` for bulk handler attachment
- Hamburger menu toggle for mobile navigation
- Modal popup with `.show-popup` / `.show-signup` class-based visibility (see [§II.9.6](#ii96-modal-popup-positioning--the-transition-warp))

---

## II.7 Frameworks, Libraries & Icon Systems

### II.7.1 Bootstrap 5

The KHAWAJA project employed Bootstrap 5 for production layout:

| Feature | Usage |
|---------|-------|
| `navbar-expand-lg` | Responsive navigation collapse |
| `data-bs-spy="scroll"` | Scroll-spy active link tracking |
| `data-bs-toggle="collapse"` | Mobile menu toggle |
| Grid system | `col-lg-4`, `col-md-6` for responsive columns |
| Components | `btn`, `form-control` for standardized UI |

### II.7.2 Icon Libraries

| Library | Icons Used | Projects |
|---------|------------|----------|
| **Remix Icons** | `ri-arrow-right-line`, `ri-fire-fill`, `ri-twitter-fill` | KHAWAJA |
| **Material Icons** | `computer` | KHAWAJA service cards |
| **Ionicons** | `logo-facebook`, `logo-instagram` (CDN) | Top 1 |
| **Font Awesome** | `fa-user`, `fa-lock`, `fab fa-facebook` (CDN) | Homework 2 |

### II.7.3 Google Fonts

| Font Family | Usage |
|-------------|-------|
| Poppins | Primary UI text |
| Open Sans | Body content |
| Dela Gothic One | Display/heading |
| Inter | Clean modern text |
| Cinzel | Serif accent |
| Racing Sans One | Sporty/display |

---

## II.8 Capstone: KHAWAJA Barber Salon

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

## II.9 Problem-Solving Case Studies

### II.9.1 Layout Entropy: The Float-to-Flex Migration

**Problem:** Early navigation relied on `float: left` with percentage widths, causing alignment headaches — mismatched baselines, collapsed parents, and magic-number offsets (e.g., `margin-left: 270px` in Top 1).

**Solution:** Migration to `display: flex` in Homework 2 and Top 2 eliminated clearance issues, simplified centering, and made responsive reflow trivial. By Session 15, CSS Grid had replaced both for two-dimensional layouts.

**Progression:** Float → Flexbox → CSS Grid (see [§II.4](#ii4-css-layout-evolution))

---

### II.9.2 State Management Without a Framework: Sign-In/Sign-Up Toggle

**Problem:** Homework 2 used two independent CSS classes (`sign-up-mode`, `sign-up-mode2`) toggled via JavaScript. This introduced state duplication: the `::before` pseudo-element slide animation in one mode, form visibility in another. Changes required synchronized updates across both, increasing bug surface area (see [§II.6.2](#ii62-class-based-state-toggling)).

**Solution:** Top 2 reduced complexity to a single `show-signup` class on the popup container:

```javascript
formPopup.classList[
    link.id === 'signup-link' ? 'add' : 'remove'
]("show-signup");
```

The ternary operator pattern made show/hide logic declarative rather than imperative, with a single source of truth for all visibility states.

---

### II.9.3 3D Space & the transform-style: preserve-3d Pitfall

**Problem:** The 3D cube faces appeared flat or overlapping because each face's `rotateY` / `rotateX` was applied outside a 3D-rendering context. By default, browsers flatten child transforms into the parent's 2D plane.

**Solution:** `transform-style: preserve-3d` on the parent `.cube` container instructed the browser to composite child transforms into a shared 3D space (see [§II.5.2](#ii52-3d-transforms--preserve-3d)). The `var(--edge)` custom property (set to `1em`) parameterized depth, making the cube scalable with font-size.

**Iteration:** Version 1 used `0.2s` rotation speed; Version 2 slowed to `10s` for visual debugging.

---

### II.9.4 Rain Animation Timing: Staggering Without JavaScript

**Problem:** The rain scene required 10 independent raindrops falling at different speeds, stopping after different counts — without any JavaScript.

**Solution:** Per-element CSS properties assigned unique timing values (see [§II.5.3](#ii53-keyframe-animations)):

```css
.d1 { animation-duration: 0.4s; animation-iteration-count: 6; }
.d2 { animation-duration: 0.6s; animation-iteration-count: 8; }
/* ... through .d10 with varied values */
```

Staggered durations (0.4s–1.4s) and iteration counts (6–13) created a natural asynchronous rainfall pattern. The sun's delayed appearance (`animation-delay: 11s`) synced with background color morphing from gray to light blue (`@keyframes anim_back`), simulating a storm clearing.

---

### II.9.5 The Disappearing Video: Background Z-Index Bug

**Problem:** A fullscreen `<video>` background overlaid the navigation because `<video>` elements inherit no default stacking context (see [§II.5.5](#ii55-opacity-overlays--z-index-stacking)).

**Solution:** A three-layer z-index stack:

| Layer | Element | Z-Index |
|-------|---------|---------|
| Back | `<video>` | `-1` |
| Middle | `.overlay` (rgba black) | `0` |
| Front | `.navbar` / `.heading` | Normal flow |

The `.navbar` and `.heading` elements used `position: absolute` which created new stacking contexts above the overlay automatically. The `object-fit: cover` property on the video prevented distortion across screen aspect ratios, avoiding letterboxing.

---

### II.9.6 Modal Popup Positioning & the Transition Warp

**Problem:** The login popup appeared offset because `transform: translate(-50%, -70%)` was combined with `transition: transform 0.3s`. On page load, the popup "jumped" from its raw centered position to the offset position.

**Solution:** A two-state approach (see [§II.6.3](#ii63-event-listener-patterns)):

| State | Transform | Opacity | Pointer Events |
|-------|-----------|---------|----------------|
| Hidden (`.form-popup`) | `translate(-50%, -70%)` | `0` | `none` |
| Visible (`.show-popup .form-popup`) | `translate(-50%, -50%)` | `1` | `auto` |

The `pointer-events: none` toggle prevented invisible elements from intercepting clicks, while the transition property animated smoothly between the two transform states without the initial jump.

---

## II.10 Projects Catalog

| Project | Core Techniques | Key Sections |
|---------|-----------------|--------------|
| Session 1 | DOCTYPE, head, body, meta charset | [§II.2.1](#ii21-semantic-structure) |
| Session 2 | Inline images, anchors, HR | [§II.2.1](#ii21-semantic-structure) |
| Session 3 | Tables with rowspan/colspan, thead/tbody | [§II.2.2](#ii22-tables-rowspan-colspan-theadtbody) |
| Session 4 | Inline CSS → internal style blocks | [§II.3.1](#ii31-selectors--specificity) |
| Session 5 | External CSS files, class/element selectors | [§II.3.1](#ii31-selectors--specificity) |
| Session 6 | Box model, border, padding, margin | [§II.3.2](#ii32-box-model) |
| Session 7 | Display modes, positioning, z-index | [§II.3.3](#ii33-display--positioning) |
| Session 8 | Flexbox, alignment, Homework 0 | [§II.4.2](#ii42-flexbox-migration-homework-2-top-2) |
| Session 9 | CSS Grid introduction | [§II.4.3](#ii43-css-grid-sessions-10-15) |
| Session 10 | Responsive grids with media queries | [§II.4.4](#ii44-responsive-design--media-queries) |
| Session 11 | CSS art: car, triangle hack | [§II.5.4](#ii54-css-art--geometric-construction) |
| Session 12 | CSS custom properties, theming | [§II.5.1](#ii51-css-custom-properties) |
| Session 13 | 3D transforms, preserve-3d, rotating cube | [§II.5.2](#ii52-3d-transforms--preserve-3d), [§II.9.3](#ii93-3d-space--the-transform-style-preserve-3d-pitfall) |
| Session 14 | Keyframe animations, bouncing letters | [§II.5.3](#ii53-keyframe-animations) |
| Session 15 | Advanced grid, multi-column responsive | [§II.4.3](#ii43-css-grid-sessions-10-15), [§II.4.4](#ii44-responsive-design--media-queries) |
| Session 16 | Rain simulation, staggered animations | [§II.5.3](#ii53-keyframe-animations), [§II.9.4](#ii94-rain-animation-timing-staggering-without-javascript) |
| Homework 1 | Form controls, fieldset, select/option | [§II.2.3](#ii23-form-controls) |
| Homework 2 | Sign-in/sign-up toggle, flexbox, Font Awesome | [§II.4.2](#ii42-flexbox-migration-homework-2-top-2), [§II.6.2](#ii62-class-based-state-toggling), [§II.7.2](#ii72-icon-libraries) |
| Top 1 | Float-based nav, Ionicons, hero section | [§II.4.1](#ii41-float-based-layout), [§II.7.2](#ii72-icon-libraries) |
| Top 2 | Flexbox nav, modal popup, event listeners | [§II.4.2](#ii42-flexbox-migration-homework-2-top-2), [§II.6.3](#ii63-event-listener-patterns), [§II.9.6](#ii96-modal-popup-positioning--the-transition-warp) |
| Top 3 | Video background, overlay layers, z-index stacking | [§II.5.5](#ii55-opacity-overlays--z-index-stacking), [§II.9.5](#ii95-the-disappearing-video-background-z-index-bug) |
| KHAWAJA | Bootstrap 5, 11-section SPA, custom design system | [§II.7.1](#ii71-bootstrap-5), [§II.8](#ii8-capstone-khawaja-barber-salon) |

---

*End of Track II — HTML & CSS 102*

---

# Track III: Server-Side Engineering & Full-Stack Architecture

## III.1 Course Overview & Learning Arc

The curriculum progressed from absolute beginner fundamentals to a production-grade Content Management System across 19 intensive sessions. The arc demonstrates a deliberate ramp-up in complexity:

| Phase | Focus | Deliverable |
|-------|-------|-------------|
| Foundations | ASP.NET Core 8.0 setup, Razor Pages syntax | Hardcoded data displays |
| Data Access | Entity Framework Core, LocalDB, SQLite | Database-persisted pages |
| Migrations | Code-First schema evolution | Multi-table relational models |
| Authentication | ASP.NET Core Identity | Login, registration, admin isolation |
| Frontend Integration | Bootstrap, Owl Carousel, Isotope | Dynamic CMS with static template parity |
| Admin CRUD | Auto-generated panels, image uploads | Full create-read-update-delete |
| API Transition | Minimal Web API, MVC pattern | RESTful endpoint design |

The work culminates in a CMS with Entity Framework Core data layer, ASP.NET Core Identity authentication, dual public/admin layouts, and a JavaScript-enhanced Bootstrap frontend. Sessions were conducted September–October 2024.

---

## III.2 Core Framework & Runtime

### III.2.1 ASP.NET Core 8.0 Foundation

All projects were built on **.NET 8.0 SDK** with `WebApplication.CreateBuilder(args)` as the application entry point, following the minimal API-style `Program.cs` pattern. This approach consolidated startup configuration (services, middleware, routing) into a single file, reducing boilerplate compared to earlier Startup-class conventions.

### III.2.2 Razor Pages Architecture

The primary UI paradigm throughout the curriculum was **Razor Pages**, with every page split into two files:

| File | Role |
|------|------|
| `.cshtml` | View markup (HTML + Razor syntax) |
| `.cshtml.cs` | PageModel with `OnGet()` / `OnPost()` handler methods |

This pattern enforces code-behind separation: presentation logic lives in the view, while request handling, model binding, and data access reside in the PageModel. Handlers return `Page()` for GET requests and `RedirectToPage()` or `Page()` with `ModelState` errors for POST requests.

### III.2.3 MVC Exposure

Session 18 introduced the **Model-View-Controller** triad via `MVC_ASP.zip`, demonstrating the classic controller-based pattern as an alternative to Razor Pages. This provided architectural breadth, showing how the same routing, model binding, and dependency injection principles apply across both paradigms.

### III.2.4 Minimal Web API

Session 19 served as a capstone transition into API-first development with `TodoApi.zip`. **Minimal Web API** endpoints demonstrated:
- Lightweight endpoint mapping via `app.MapGet()`, `app.MapPost()`
- RESTful route design
- JSON serialization without controller overhead

This session established the foundation for future microservices and API-centric architectures.

---

## III.3 Data Access & Persistence

### III.3.1 Entity Framework Core 8.0

**Entity Framework Core 8.0.8** served as the Object-Relational Mapper, with two provider configurations:

| Provider | Usage |
|----------|-------|
| `Microsoft.EntityFrameworkCore.SqlServer` | Primary — LocalDB for development |
| `Microsoft.EntityFrameworkCore.Sqlite` | Secondary — lightweight alternative |

### III.3.2 Code-First Migrations

The database schema evolved through **four incremental migrations**:

| Migration | Purpose |
|-----------|---------|
| `20241008143004_mig1` | Initial schema — Carousel table |
| `20241010145413_mig_maya` | Added Service entity |
| `20241013145516_m1` | Added Portfolio entity |
| `00000000000000_CreateIdentitySchema` | ASP.NET Core Identity scaffolding |

Each migration generates `Up()` / `Down()` methods with `CreateTable`, `AddColumn`, and foreign key constraint operations. The `Program.cs` uses `app.MigrateDatabase()` in development mode to auto-apply pending migrations on startup, eliminating manual `Update-Database` commands and ensuring cross-environment consistency. See [§III.8.4](#iii84-schema-evolution-via-migrations) for the full problem analysis.

### III.3.3 ApplicationDbContext & Identity Integration

A single `DbContext` class unified the application data with the Identity schema:

```csharp
public class ApplicationDbContext : IdentityDbContext
{
    public DbSet<Carousel> Carousels { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<Portfolio> Portfolios { get; set; }
}
```

Inheriting from `IdentityDbContext` merged Identity's `AspNetUsers`, `AspNetRoles`, `AspNetUserClaims`, and related tables with custom application entities, all managed through a single connection string and migration history. See [§III.8.3](#iii83-identity-integration--admin-isolation) for the architectural decisions behind this design.

### III.3.4 Custom globals Helper Class

Before full Dependency Injection adoption, data access was abstracted through a **custom `globals` helper class** that:
- Manually constructed `DbContextOptions<ApplicationDbContext>`
- Exposed static methods: `get_carousels()`, `get_Services()`, `get_Portfolios()`

This repository-like pattern bridged the gap between inline database queries and a proper DI-registered service layer, enforcing a single point of data access across all Razor Pages.

---

## III.4 Authentication & Authorization

### III.4.1 ASP.NET Core Identity

Authentication was implemented via **ASP.NET Core Identity with Individual Accounts**:

```csharp
builder.Services.AddDefaultIdentity<IdentityUser>(options =>
    options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();
```

This wired Identity's user store into the EF Core data layer (see [§III.3.3](#iii33-applicationdbcontext--identity-integration)), requiring email confirmation for new accounts.

### III.4.2 SignInManager & UserManager

Three core Identity operations drove the authentication flow:

| Operation | Method |
|-----------|--------|
| Login | `SignInManager.PasswordSignInAsync()` |
| Registration | `UserManager.CreateAsync()` |
| Logout | `SignInManager.SignOutAsync()` |

These were injected directly into PageModel constructors, with zero custom controller logic for standard auth flows.

### III.4.3 Dual Layout Architecture

Two distinct layouts enforced visual and functional isolation between public and administrative areas (see [§III.8.3](#iii83-identity-integration--admin-isolation)):

| Layout | Characteristics |
|--------|-----------------|
| `_Layout.cshtml` | Public-facing, brand-themed (ice cream) |
| `Admin_Layout.cshtml` | Dark sidebar (`#283039`), 200px width, navigation links, logout; collapses to 70px on mobile |

---

## III.5 Frontend & Static Assets

### III.5.1 Bootstrap 4.5.3 & Custom CSS Variables

The frontend was built on **Bootstrap 4.5.3** with a custom design system defined through CSS custom properties:

| Token | Value |
|-------|-------|
| Primary | `#F195B2` (pink) |
| Secondary | `#62C3E7` (blue) |
| Font Stack | Poppins |

### III.5.2 Owl Carousel 2

**Owl Carousel 2** powered multiple slider sections (service, product, team, testimonial). Configuration was handled via jQuery:
- `items` count per view
- `autoplay` for automatic cycling
- Responsive breakpoints for different screen sizes

### III.5.3 Isotope.js Portfolio Filtering

Portfolio items were filterable by category using **Isotope.js**:
- Categories: All, Cone, Vanilla, Chocolate
- Filtering triggered by button clicks, with animated grid re-layout

### III.5.4 Lightbox, Waypoints & CounterUp

| Library | Purpose |
|---------|---------|
| Lightbox | Image gallery overlay viewing |
| Waypoints | Scroll-position detection |
| CounterUp | Animated number counting on scroll trigger |

These libraries added interactivity without requiring full SPA frameworks.

### III.5.5 Modular Partial Sections

The home page was composed of **13 partial sections** (`sections/Section (1)` through `Section (13)`), each rendering a distinct UI block. This modular component architecture within Razor Pages mirrored the static template structure from earlier sessions (see [§III.8.2](#iii82-static-frontend-to-dynamic-cms-bridge)) while enabling server-rendered dynamic content.

---

## III.6 Admin CRUD & Scaffolding

### III.6.1 Auto-Generated Admin Panels

Complete admin panels were scaffolded for three entities: **Carousels**, **Services**, and **Portfolios**. Each panel provided five standard views:

| View | Purpose |
|------|---------|
| Index | List all records |
| Create | New record form |
| Edit | Modify existing record |
| Details | Read-only record view |
| Delete | Confirm and remove record |

### III.6.2 Model Binding & Entity State Management

CRUD operations followed a consistent pattern:
- **`[BindProperty]`** — Model binding for form data on POST handlers
- **`_context.Attach().State = EntityState.Modified`** — Explicit state management for updates
- **`_context.Remove()`** — Entity deletion

This approach gave fine-grained control over Entity Framework's change tracker, avoiding unintended updates or concurrency conflicts.

### III.6.3 Image Upload Fields

Create and Edit forms included `<input type="file">` fields bound to string `Img` properties on the entity models. File uploads were stored as string paths in the database, with server-side handling for file persistence to the `wwwroot` directory.

### III.6.4 Scaffolded Identity UI

ASP.NET Core Identity UI was scaffolded into `Areas/Identity/Pages/Account/`, providing:
- Login, Register, Logout pages
- `InputModel` classes with data annotation validation attributes
- Integration with `SignInManager` and `UserManager` via dependency injection (see [§III.4.2](#iii42-signinmanager--usermanager))

---

## III.7 Reference Architecture Knowledge

The course materials included **5 Microsoft Press PDFs** covering enterprise-level architecture:

| Topic | Focus |
|-------|-------|
| Cloud-native .NET apps on Azure | Distributed system design |
| Modern web architecture patterns | Architectural best practices |
| Azure quick-start for .NET | Cloud deployment fundamentals |
| Blazor for Web Forms developers | SPA framework transition |
| Microservices with containers | Service-oriented architecture |

Additionally, **6 reference images** (dated September–October 2024) captured whiteboard diagrams and architectural sketches from live sessions, providing visual documentation of system design discussions.

---

## III.8 Problem-Solving Case Studies

### III.8.1 The Hardcoded Data Ceiling

**Problem:** Session 5's student data was hardcoded as parallel arrays (`students[9]`, `genders[9]`) with `Random.Next(0, 100)` generating grades on every page refresh. This approach was stateless, non-persistent, and completely unscalable — every visit produced fresh "random" data with no ability to edit, update, or delete records.

**Solution:** The final project (Session 16) replaced this entirely with EF Core and SQL Server LocalDB (see [§III.3.1](#iii31-entity-framework-core-80)). `Carousel`, `Service`, and `Portfolio` models became database tables with proper primary keys (`int ID`), ordering (`int Order`), soft-delete flags (`bool Active`), and string content fields. The `globals` helper class (see [§III.3.4](#iii34-custom-globals-helper-class)) abstracted database access, and admin CRUD pages (see [§III.6](#iii6-admin-crud--scaffolding)) provided full create-read-update-delete over persisted data. The random-student demo evolved into a live-managed content system.

### III.8.2 Static Frontend to Dynamic CMS Bridge

**Problem:** Session 8's `Website Frontend` was a pure HTML/CSS/JS static template ("iCREAM" ice cream shop) with hardcoded carousels, services, portfolio items, and team members. Migrating to a database-driven CMS required preserving the exact Bootstrap markup and Owl Carousel configurations while replacing static content with server-rendered dynamic data.

**Solution:** The 13 partial sections in the final project (see [§III.5.5](#iii55-modular-partial-sections)) mirrored the Session 8 template structure exactly:
- `Section (3)` reads `globals.get_carousels()` for the hero carousel
- `Section (7)` iterates `globals.get_Services()` for service cards
- `Section (8)` renders `globals.get_Portfolios()` filtered by `Active == true` and ordered by `Order`

The static carousel JSON was replaced with Razor `@foreach` loops over EF Core queries, but the frontend JavaScript (Owl Carousel initialization, Isotope filtering, Lightbox) remained entirely intact — demonstrating clean separation of concerns between presentation and data.

### III.8.3 Identity Integration & Admin Isolation

**Problem:** Adding authentication to a previously anonymous website required retrofitting login/registration without breaking existing public pages. Admin panels needed protection while public pages remained accessible without authentication. Additionally, the Identity schema had to coexist with the existing `Carousel`, `Service`, and `Portfolio` tables.

**Solution:**
- **Schema merging:** `ApplicationDbContext` inherits from `IdentityDbContext` (see [§III.3.3](#iii33-applicationdbcontext--identity-integration)), merging Identity's schema with custom `DbSet<>` properties in a single context.
- **Layout isolation:** Two separate layouts (see [§III.4.3](#iii43-dual-layout-architecture)) enforced visual separation — `Admin_Layout.cshtml` (200px dark sidebar, navigation, logout) versus the public brand-themed layout.
- **Zero-custom auth:** Scaffolded Identity pages under `Areas/Identity/Pages/Account/` (see [§III.6.4](#iii64-scaffolded-identity-ui)) handled authentication flows with no custom controller logic. `SignInManager` and `UserManager` were injected directly into PageModel constructors.

### III.8.4 Schema Evolution via Migrations

**Problem:** Building the CMS incrementally required the database schema to evolve over multiple sessions — starting with `Carousel`, adding `Service`, then `Portfolio`, all alongside Identity's pre-built schema. Managing this without data loss or manual SQL scripts required disciplined migration workflows.

**Solution:** Four explicit EF Core migrations (see [§III.3.2](#iii32-code-first-migrations)) tracked every schema change:
1. `20241008143004_mig1` — Initial Carousel table
2. `20241010145413_mig_maya` — Added Service entity
3. `20241013145516_m1` — Added Portfolio entity
4. `00000000000000_CreateIdentitySchema` — Identity scaffolding

Each migration generated `Up()`/`Down()` methods with `CreateTable`, `AddColumn`, and foreign key constraints. `Program.cs` used `app.MigrateDatabase()` in development mode to auto-apply pending migrations on startup, ensuring consistency across environments without manual `Update-Database` commands.

---

## III.9 Projects Catalog

| Session | Core Techniques | Key Sections |
|---------|-----------------|--------------|
| Session 5 | Hardcoded arrays, `Random.Next()`, stateless data display | [§III.8.1](#iii81-the-hardcoded-data-ceiling) |
| Session 8 | Static HTML/CSS/JS frontend template (iCREAM) | [§III.8.2](#iii82-static-frontend-to-dynamic-cms-bridge) |
| Session 16 | EF Core, SQL Server LocalDB, `globals` helper, admin CRUD | [§III.3](#iii3-data-access--persistence), [§III.6](#iii6-admin-crud--scaffolding) |
| Session 18 | MVC pattern (`MVC_ASP.zip`) | [§III.2.3](#iii23-mvc-exposure) |
| Session 19 | Minimal Web API, RESTful endpoints (`TodoApi.zip`) | [§III.2.4](#iii24-minimal-web-api) |

**Final Project (CMS):**
- Razor Pages with code-behind PageModels ([§III.2.2](#iii22-razor-pages-architecture))
- Entity Framework Core 8.0 with SQL Server LocalDB ([§III.3.1](#iii31-entity-framework-core-80))
- ASP.NET Core Identity authentication ([§III.4.1](#iii41-aspnet-core-identity))
- Dual public/admin layouts ([§III.4.3](#iii43-dual-layout-architecture))
- Bootstrap 4.5.3 + Owl Carousel 2 + Isotope.js + Lightbox + Waypoints + CounterUp ([§III.5](#iii5-frontend--static-assets))
- 13 partial sections composing the home page ([§III.5.5](#iii55-modular-partial-sections))
- Auto-generated admin panels for Carousel, Service, Portfolio entities ([§III.6.1](#iii61-auto-generated-admin-panels))
- Image upload fields in Create/Edit forms ([§III.6.3](#iii63-image-upload-fields))
- Scaffolded Identity UI (Login, Register, Logout) ([§III.6.4](#iii64-scaffolded-identity-ui))
- Code-First Migrations with auto-apply on startup ([§III.3.2](#iii32-code-first-migrations))

---

*End of Track III — ASP.NET Core Full-Stack Development*

---

*End of Master Reference Manual: Web Engineering Curriculum*

*Total: 3 Tracks | 46 Sessions | 4 Homework Assignments | 3 Capstone Projects*
