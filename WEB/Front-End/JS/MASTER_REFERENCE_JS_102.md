# Master Reference Manual: JavaScript 102

**Institution:** New Horizons Institute  
**Instructor:** M. Jijan  
**Duration:** 11 Sessions + 2 Homework Assignments  
**Path:** Client-Side Programming & DOM Engineering

---

## Table of Contents

1. [Course Overview & Learning Arc](#1-course-overview--learning-arc)
2. [JavaScript Core Language](#2-javascript-core-language)
    - 2.1 Syntax Foundations
    - 2.2 Type Coercion & Parsing
    - 2.3 String Normalization & Search
    - 2.4 Dynamic Template Literals
3. [DOM Programming](#3-dom-programming)
    - 3.1 Selection & Mutation
    - 3.2 Inline Event Binding
    - 3.3 CSS Custom Property Theming via JavaScript
4. [Array State Management](#4-array-state-management)
    - 4.1 Parallel Array Pattern
    - 4.2 Insertion & Deletion Strategies
    - 4.3 Reverse-Loop Splicing
5. [Game Development & State Machines](#5-game-development--state-machines)
    - 5.1 Turn-Based Boolean Guards
    - 5.2 Two-Card Memory Slot Pattern
    - 5.3 Same-Click Guard
6. [Asynchronous Programming](#6-asynchronous-programming)
    - 6.1 Timer APIs
    - 6.2 Visual Countdown Timer Mechanics
7. [Algorithms & Data Transformations](#7-algorithms--data-transformations)
    - 7.1 Fisher-Yates Shuffle
    - 7.2 Array Filtering & Batch Deletion
8. [CSS Integration & Layout Techniques](#8-css-integration--layout-techniques)
    - 8.1 Flexbox & Grid Layouts
    - 8.2 Custom Property-Driven Theming
    - 8.3 Neumorphic Styling
    - 8.4 Font Awesome Icon System
9. [Problem-Solving Case Studies](#9-problem-solving-case-studies)
    - 9.1 Memory Game: From Static Cards to Shuffled Timed Rounds
    - 9.2 Array Delete: Solving the Index-Shift Bug
    - 9.3 Homework 2 Calculator: Eval-Based Architecture
10. [Projects Catalog](#10-projects-catalog)

---

## 1. Course Overview & Learning Arc

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

## 2. JavaScript Core Language

### 2.1 Syntax Foundations

Initial sessions established the fundamental building blocks of JavaScript: variable declaration, console output, operator precedence, and control flow. The progression moved from single-expression scripts to multi-branch handler functions dispatching from inline HTML event attributes.

### 2.2 Type Coercion & Parsing

Building arithmetic tools required deliberate type handling:

- **`parseInt()`** — Integer extraction from HTML input values (strings) to numeric types for addition operations.
- **`parseFloat()`** — Floating-point preservation for decimal arithmetic, maintaining fractional precision.
- **`eval()`** — Deployed in Homework 2 for arbitrary arithmetic string resolution. Input characters (`×`, `÷`) were sanitized via `replaceAll()` to JavaScript operators (`*`, `/`) before evaluation, trading fine-grained operation control for code minimalism (see [§9.3](#93-homework-2-calculator-eval-based-architecture)).

### 2.3 String Normalization for Search

Search operations across array datasets employed a dual-normalization strategy:

```
query.toUpperCase().trim() === target.toUpperCase().trim()
```

This pattern enabled case-insensitive matching with tolerance for surrounding whitespace, applied uniformly to both user input and stored data.

### 2.4 Dynamic Template Literals

Backtick-delimited HTML strings rendered dynamic data rows with inline identifiers for direct element targeting:

```javascript
`<div id='stu_${i}' class='student-row'>${name} | ${gender} | ${average}</div>`
```

This pattern eliminated the need for manual DOM construction with `createElement`/`appendChild` in CRUD interfaces, enabling rapid re-rendering of array state (see [§4.2](#42-insertion--deletion-strategies)).

---

## 3. DOM Programming

### 3.1 Selection & Mutation

Direct element manipulation was achieved without jQuery or frameworks:

| Method | Application |
|--------|-------------|
| `document.getElementById()` | Primary selection mechanism |
| `innerHTML` | Bulk content replacement |
| `style.background` / `style.backgroundColor` | Inline color mutation |
| `style.display` | Visibility toggling |
| `.remove()` | Element destruction |
| `classList.contains()` | State-checking before branching |

### 3.2 Inline Event Binding

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

### 3.3 CSS Custom Property Theming via JavaScript

Runtime theme switching was implemented by targeting `:root` CSS custom properties via JavaScript:

```javascript
document.querySelector(':root').style.setProperty('--color1', newValue);
```

The theme toggle rewrote four variables (`--color1`, `--color2`, `--color3`, `--text_color`) between dark and light presets. Font Awesome icon classes swapped between `fa-sun` and `fa-moon` to reflect the current mode (see [§8.4](#84-font-awesome-icon-system)).

---

## 4. Array State Management

### 4.1 Parallel Array Pattern

Before adopting object-oriented or relational patterns, data was managed across parallel arrays:

```javascript
let students = [];
let genders  = [];
let averages = [];
```

Each index represented a single record, with operations maintaining cross-array consistency. This pattern, while primitive, enforced disciplined index management that later informed understanding of relational data structures.

### 4.2 Insertion & Deletion Strategies

- **Insertion:** `push()` appended new records across all parallel arrays simultaneously.
- **Single deletion:** `splice(i, 1)` removed a record at a known index.
- **Filtering:** `filter()` (commented out as an alternative) demonstrated awareness of declarative array methods, though the primary implementation used index-based splicing.

### 4.3 Reverse-Loop Splicing

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

See also [§7.2](#72-array-filtering--batch-deletion) and [§9.2](#92-array-delete-solving-the-index-shift-bug) for the full problem analysis.

---

## 5. Game Development & State Machines

### 5.1 Turn-Based Boolean Guards

Game logic was gated behind a set of boolean flags that defined the state machine:

- `turn` — Alternating player indicator
- `end_game` — Terminal state lock
- `game_started` — Prevents interaction before initialization

The `game_started` flag was especially critical: toggled by a "Start Game" button, it prevented all click handlers from executing during pre-game or post-game states, while `turn` and `end_game` sequenced the gameplay phases.

### 5.2 Two-Card Memory Slot Pattern

The memory game implemented a dual-slot pattern for card matching:

```javascript
let first_card  = 0;
let second_card = 0;
```

- `first_card` captured the first clicked card's identifier.
- `second_card` captured the second, triggering comparison logic.
- A mismatch triggered a `setTimeout` fallback that hid both cards after a staggered delay (see [§6.1](#61-timer-apis)).
- The slots were gated to prevent interaction during the reveal/hide animation window.

### 5.3 Same-Click Guard

A subtle bug emerged when a player clicked the same card twice: both `first_card` and `second_card` would reference the same element, triggering a false match. The fix was an early-return guard:

```javascript
if (first_card == second_card) {
    second_card = 0;
    return;
}
```

This ensured that a double-click on the same card was silently ignored rather than incorrectly treated as a successful match. See [§9.1](#91-memory-game-from-static-cards-to-shuffled-timed-rounds) for the full problem analysis.

---

## 6. Asynchronous Programming

### 6.1 Timer APIs

Three timer primitives were employed across projects:

| API | Role |
|-----|------|
| `setInterval(fn, ms)` | Repeating callback for countdown tick |
| `setTimeout(fn, ms)` | Delayed single execution for card hide |
| `clearInterval(id)` | Timer termination on game end |

### 6.2 Visual Countdown Timer Mechanics

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

## 7. Algorithms & Data Transformations

### 7.1 Fisher-Yates Shuffle

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

The shuffled `game_numbers[]` array was used to populate card values at load time, ensuring every game session had a unique layout. See [§9.1](#91-memory-game-from-static-cards-to-shuffled-timed-rounds) for the integration context.

### 7.2 Array Filtering & Batch Deletion

Two batch-deletion strategies evolved:

1. **Condition-based pruning:** Using the reverse-loop pattern (see [§4.3](#43-reverse-loop-splicing)), elements matching a predicate were removed in a single pass.
2. **Declarative filtering:** `filter()` was explored as an alternative (commented out), demonstrating awareness of immutable transformation patterns versus imperative splicing.

---

## 8. CSS Integration & Layout Techniques

### 8.1 Flexbox & Grid Layouts

| Technique | Application |
|-----------|-------------|
| `display: flex` | Container row alignment, centering |
| `grid-template-columns: repeat(2, 1fr)` | Product grid layouts |
| `grid-gap` | Spacing between grid items |
| `position: absolute` | Overlay elements |
| `overflow-y: scroll` | Scrollable cart container |

### 8.2 Custom Property-Driven Theming

CSS custom properties enabled runtime theme switching without stylesheet reloads:

```css
:root {
    --color1: [value];
    --color2: [value];
    --color3: [value];
    --text_color: [value];
}
```

JavaScript's `style.setProperty()` (see [§3.3](#33-css-custom-property-theming-via-javascript)) mutated these values between dark and light presets, with all dependent selectors updating automatically due to CSS inheritance.

### 8.3 Neumorphic Styling

The Homework 2 calculator employed neumorphic design via combined `border-radius` and `inset` box-shadows, creating a soft, extruded appearance that responded to the theme state.

### 8.4 Font Awesome Icon System

Font Awesome icons were integrated across multiple projects for UI affordances:

| Icon Class | Component | Context |
|------------|-----------|---------|
| `fa-sun` / `fa-moon` | Theme toggle button | Dark/light mode indicator |
| `fa-cart-shopping` | Cart button | E-commerce shopping cart |
| `fa-trash` | Delete action | Cart item removal |

Icon classes were swapped programmatically via `classList` manipulation to reflect application state, such as toggling between `fa-sun` and `fa-moon` on theme change.

---

## 9. Problem-Solving Case Studies

### 9.1 Memory Game: From Static Cards to Shuffled Timed Rounds

**Session 8** implementation:
- Hardcoded card values (no randomization)
- No timer or pressure mechanism
- Simple click-to-reveal with 200ms `setTimeout` on mismatch

**Problems identified:**
1. Predictable card layout made the game trivial
2. No urgency mechanism reduced engagement

**Session 9 solutions:**
1. **Fisher-Yates shuffle** (see [§7.1](#71-fisher-yates-shuffle)) on `game_numbers[]` at load time guaranteed unique layouts per session.
2. **Visual countdown timer** (see [§6.2](#62-visual-countdown-timer-mechanics)) using `setInterval(time_step, 50)` decremented a pixel-width variable (`timer_width -= 1`), progressively shrinking a `div` from 495px to 0.
3. **Double-click bug fix** (see [§5.3](#53-same-click-guard)): Early-return guard (`if (first_card == second_card)`) prevented same-element false matches.
4. **State gating** (see [§5.1](#51-turn-based-boolean-guards)): All gameplay locked behind `game_started` boolean, toggled exclusively by the "Start Game" button.

### 9.2 Array Delete: Solving the Index-Shift Bug

**Problem:** Forward iteration during `splice()` caused skipped elements because each deletion shifted remaining indices left.

```
Initial:  [A, B, C, D, E]
Delete at index 1 (B) → [A, C, D, E]
Next iteration: i=2 → points to D (skipped C!)
```

**Solution:** Reverse-loop iteration (see [§4.3](#43-reverse-loop-splicing)):

```
for (let i = length-1; i >= 0; i--)
Delete at index 1 (B) → [A, C, D, E]
Next iteration: i=0 → points to A (correct)
```

Deletions only affect already-processed indices. This pattern was abstracted into reusable batch-delete functions for gender-based and threshold-based filtering.

### 9.3 Homework 2 Calculator: Eval-Based Architecture

**Design leap:** Replaced per-button operation logic (Sessions 2–3) with a flat `eval()` strategy:

1. **Input accumulation:** `res.value += char` appended each button press to a display string.
2. **Symbol sanitization:** `replaceAll()` converted `×` to `*` and `÷` to `/`.
3. **Resolution:** `eval(normalizedString)` computed the result.
4. **Theme toggle:** `data-theme` attribute + CSS custom properties (see [§8.2](#82-custom-property-driven-theming)) enabled dark/light mode.
5. **UX polish:** Neumorphic styling (see [§8.3](#83-neumorphic-styling)) via `inset` box-shadows.

This approach sacrificed per-operator validation for code minimalism and represented a clear architectural evolution from the per-button handler pattern.

---

## 10. Projects Catalog

| Project | Core Techniques | Key Sections |
|---------|-----------------|--------------|
| Session 1 | `console.log()`, variable declaration | [§2.1](#21-syntax-foundations) |
| Sessions 2–3 | `parseInt()`, `parseFloat()`, button event handlers | [§2.2](#22-type-coercion--parsing), [§3.2](#32-inline-event-binding) |
| Homework 1 | Arithmetic calculator | [§2.2](#22-type-coercion--parsing) |
| Homework 2 | `eval()`-based calculator, custom theming, neumorphic CSS | [§8.2](#82-custom-property-driven-theming), [§8.3](#83-neumorphic-styling), [§9.3](#93-homework-2-calculator-eval-based-architecture) |
| Session 4 | CRUD with parallel arrays, `splice()`, reverse-loop | [§4](#4-array-state-management) |
| Session 5 | Array filtering, `filter()` alternative | [§7.2](#72-array-filtering--batch-deletion) |
| Session 6 | Tic-Tac-Toe state machine | [§5.1](#51-turn-based-boolean-guards) |
| Session 7 | Multi-dimensional array operations | [§4](#4-array-state-management) |
| Session 8 | Memory game (static, no timer) | [§5.2](#52-two-card-memory-slot-pattern), [§9.1](#91-memory-game-from-static-cards-to-shuffled-timed-rounds) |
| Session 9 | Memory game V2: Fisher-Yates shuffle, countdown timer | [§6.2](#62-visual-countdown-timer-mechanics), [§7.1](#71-fisher-yates-shuffle), [§9.1](#91-memory-game-from-static-cards-to-shuffled-timed-rounds) |
| Session 10 | Asynchronous timer mechanics | [§6](#6-asynchronous-programming) |
| Session 11 | E-commerce shopping cart with dynamic cart management | [§8.1](#81-flexbox--grid-layouts), [§8.4](#84-font-awesome-icon-system) |

---

*End of Master Reference Manual: JavaScript 102*
