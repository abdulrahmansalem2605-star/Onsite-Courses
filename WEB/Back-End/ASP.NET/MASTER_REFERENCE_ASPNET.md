# Master Reference Manual: ASP.NET Core Full-Stack Development

**Institution:** New Horizons Institute  
**Instructor:** M. Jijan  
**Duration:** 19 Sessions  
**Path:** Server-Side Engineering & Full-Stack Architecture

---

## Table of Contents

1. [Course Overview & Learning Arc](#1-course-overview--learning-arc)
2. [Core Framework & Runtime](#2-core-framework--runtime)
    - 2.1 ASP.NET Core 8.0 Foundation
    - 2.2 Razor Pages Architecture
    - 2.3 MVC Exposure
    - 2.4 Minimal Web API
3. [Data Access & Persistence](#3-data-access--persistence)
    - 3.1 Entity Framework Core 8.0
    - 3.2 Code-First Migrations
    - 3.3 ApplicationDbContext & Identity Integration
    - 3.4 Custom globals Helper Class
4. [Authentication & Authorization](#4-authentication--authorization)
    - 4.1 ASP.NET Core Identity
    - 4.2 SignInManager & UserManager
    - 4.3 Dual Layout Architecture
5. [Frontend & Static Assets](#5-frontend--static-assets)
    - 5.1 Bootstrap 4.5.3 & Custom CSS Variables
    - 5.2 Owl Carousel 2
    - 5.3 Isotope.js Portfolio Filtering
    - 5.4 Lightbox, Waypoints & CounterUp
    - 5.5 Modular Partial Sections
6. [Admin CRUD & Scaffolding](#6-admin-crud--scaffolding)
    - 6.1 Auto-Generated Admin Panels
    - 6.2 Model Binding & Entity State Management
    - 6.3 Image Upload Fields
    - 6.4 Scaffolded Identity UI
7. [Reference Architecture Knowledge](#7-reference-architecture-knowledge)
8. [Problem-Solving Case Studies](#8-problem-solving-case-studies)
    - 8.1 The Hardcoded Data Ceiling
    - 8.2 Static Frontend to Dynamic CMS Bridge
    - 8.3 Identity Integration & Admin Isolation
    - 8.4 Schema Evolution via Migrations
9. [Projects Catalog](#9-projects-catalog)

---

## 1. Course Overview & Learning Arc

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

## 2. Core Framework & Runtime

### 2.1 ASP.NET Core 8.0 Foundation

All projects were built on **.NET 8.0 SDK** with `WebApplication.CreateBuilder(args)` as the application entry point, following the minimal API-style `Program.cs` pattern. This approach consolidated startup configuration (services, middleware, routing) into a single file, reducing boilerplate compared to earlier Startup-class conventions.

### 2.2 Razor Pages Architecture

The primary UI paradigm throughout the curriculum was **Razor Pages**, with every page split into two files:

| File | Role |
|------|------|
| `.cshtml` | View markup (HTML + Razor syntax) |
| `.cshtml.cs` | PageModel with `OnGet()` / `OnPost()` handler methods |

This pattern enforces code-behind separation: presentation logic lives in the view, while request handling, model binding, and data access reside in the PageModel. Handlers return `Page()` for GET requests and `RedirectToPage()` or `Page()` with `ModelState` errors for POST requests.

### 2.3 MVC Exposure

Session 18 introduced the **Model-View-Controller** triad via `MVC_ASP.zip`, demonstrating the classic controller-based pattern as an alternative to Razor Pages. This provided architectural breadth, showing how the same routing, model binding, and dependency injection principles apply across both paradigms.

### 2.4 Minimal Web API

Session 19 served as a capstone transition into API-first development with `TodoApi.zip`. **Minimal Web API** endpoints demonstrated:
- Lightweight endpoint mapping via `app.MapGet()`, `app.MapPost()`
- RESTful route design
- JSON serialization without controller overhead

This session established the foundation for future microservices and API-centric architectures.

---

## 3. Data Access & Persistence

### 3.1 Entity Framework Core 8.0

**Entity Framework Core 8.0.8** served as the Object-Relational Mapper, with two provider configurations:

| Provider | Usage |
|----------|-------|
| `Microsoft.EntityFrameworkCore.SqlServer` | Primary — LocalDB for development |
| `Microsoft.EntityFrameworkCore.Sqlite` | Secondary — lightweight alternative |

### 3.2 Code-First Migrations

The database schema evolved through **four incremental migrations**:

| Migration | Purpose |
|-----------|---------|
| `20241008143004_mig1` | Initial schema — Carousel table |
| `20241010145413_mig_maya` | Added Service entity |
| `20241013145516_m1` | Added Portfolio entity |
| `00000000000000_CreateIdentitySchema` | ASP.NET Core Identity scaffolding |

Each migration generates `Up()` / `Down()` methods with `CreateTable`, `AddColumn`, and foreign key constraint operations. The `Program.cs` uses `app.MigrateDatabase()` in development mode to auto-apply pending migrations on startup, eliminating manual `Update-Database` commands and ensuring cross-environment consistency.

### 3.3 ApplicationDbContext & Identity Integration

A single `DbContext` class unified the application data with the Identity schema:

```csharp
public class ApplicationDbContext : IdentityDbContext
{
    public DbSet<Carousel> Carousels { get; set; }
    public DbSet<Service> Services { get; set; }
    public DbSet<Portfolio> Portfolios { get; set; }
}
```

Inheriting from `IdentityDbContext` merged Identity's `AspNetUsers`, `AspNetRoles`, `AspNetUserClaims`, and related tables with custom application entities, all managed through a single connection string and migration history.

### 3.4 Custom globals Helper Class

Before full Dependency Injection adoption, data access was abstracted through a **custom `globals` helper class** that:
- Manually constructed `DbContextOptions<ApplicationDbContext>`
- Exposed static methods: `get_carousels()`, `get_Services()`, `get_Portfolios()`

This repository-like pattern bridged the gap between inline database queries and a proper DI-registered service layer, enforcing a single point of data access across all Razor Pages.

---

## 4. Authentication & Authorization

### 4.1 ASP.NET Core Identity

Authentication was implemented via **ASP.NET Core Identity with Individual Accounts**:

```csharp
builder.Services.AddDefaultIdentity<IdentityUser>(options =>
    options.SignIn.RequireConfirmedAccount = true)
    .AddEntityFrameworkStores<ApplicationDbContext>();
```

This wired Identity's user store into the EF Core data layer, requiring email confirmation for new accounts.

### 4.2 SignInManager & UserManager

Three core Identity operations drove the authentication flow:

| Operation | Method |
|-----------|--------|
| Login | `SignInManager.PasswordSignInAsync()` |
| Registration | `UserManager.CreateAsync()` |
| Logout | `SignInManager.SignOutAsync()` |

These were injected directly into PageModel constructors, with zero custom controller logic for standard auth flows.

### 4.3 Dual Layout Architecture

Two distinct layouts enforced visual and functional isolation between public and administrative areas:

| Layout | Characteristics |
|--------|-----------------|
| `_Layout.cshtml` | Public-facing, brand-themed (ice cream) |
| `Admin_Layout.cshtml` | Dark sidebar (`#283039`), 200px width, navigation links, logout; collapses to 70px on mobile |

---

## 5. Frontend & Static Assets

### 5.1 Bootstrap 4.5.3 & Custom CSS Variables

The frontend was built on **Bootstrap 4.5.3** with a custom design system defined through CSS custom properties:

| Token | Value |
|-------|-------|
| Primary | `#F195B2` (pink) |
| Secondary | `#62C3E7` (blue) |
| Font Stack | Poppins |

### 5.2 Owl Carousel 2

**Owl Carousel 2** powered multiple slider sections (service, product, team, testimonial). Configuration was handled via jQuery:
- `items` count per view
- `autoplay` for automatic cycling
- Responsive breakpoints for different screen sizes

### 5.3 Isotope.js Portfolio Filtering

Portfolio items were filterable by category using **Isotope.js**:
- Categories: All, Cone, Vanilla, Chocolate
- Filtering triggered by button clicks, with animated grid re-layout

### 5.4 Lightbox, Waypoints & CounterUp

| Library | Purpose |
|---------|---------|
| Lightbox | Image gallery overlay viewing |
| Waypoints | Scroll-position detection |
| CounterUp | Animated number counting on scroll trigger |

These libraries added interactivity without requiring full SPA frameworks.

### 5.5 Modular Partial Sections

The home page was composed of **13 partial sections** (`sections/Section (1)` through `Section (13)`), each rendering a distinct UI block. This modular component architecture within Razor Pages mirrored the static template structure from earlier sessions while enabling server-rendered dynamic content.

---

## 6. Admin CRUD & Scaffolding

### 6.1 Auto-Generated Admin Panels

Complete admin panels were scaffolded for three entities: **Carousels**, **Services**, and **Portfolios**. Each panel provided five standard views:

| View | Purpose |
|------|---------|
| Index | List all records |
| Create | New record form |
| Edit | Modify existing record |
| Details | Read-only record view |
| Delete | Confirm and remove record |

### 6.2 Model Binding & Entity State Management

CRUD operations followed a consistent pattern:
- **`[BindProperty]`** — Model binding for form data on POST handlers
- **`_context.Attach().State = EntityState.Modified`** — Explicit state management for updates
- **`_context.Remove()`** — Entity deletion

This approach gave fine-grained control over Entity Framework's change tracker, avoiding unintended updates or concurrency conflicts.

### 6.3 Image Upload Fields

Create and Edit forms included `<input type="file">` fields bound to string `Img` properties on the entity models. File uploads were stored as string paths in the database, with server-side handling for file persistence to the `wwwroot` directory.

### 6.4 Scaffolded Identity UI

ASP.NET Core Identity UI was scaffolded into `Areas/Identity/Pages/Account/`, providing:
- Login, Register, Logout pages
- `InputModel` classes with data annotation validation attributes
- Integration with `SignInManager` and `UserManager` via dependency injection

---

## 7. Reference Architecture Knowledge

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

## 8. Problem-Solving Case Studies

### 8.1 The Hardcoded Data Ceiling

**Problem:** Session 5's student data was hardcoded as parallel arrays (`students[9]`, `genders[9]`) with `Random.Next(0, 100)` generating grades on every page refresh. This approach was stateless, non-persistent, and completely unscalable — every visit produced fresh "random" data with no ability to edit, update, or delete records.

**Solution:** The final project (Session 16) replaced this entirely with EF Core and SQL Server LocalDB. `Carousel`, `Service`, and `Portfolio` models became database tables with proper primary keys (`int ID`), ordering (`int Order`), soft-delete flags (`bool Active`), and string content fields. The `globals` helper class abstracted database access, and admin CRUD pages provided full create-read-update-delete over persisted data. The random-student demo evolved into a live-managed content system.

### 8.2 Static Frontend to Dynamic CMS Bridge

**Problem:** Session 8's `Website Frontend` was a pure HTML/CSS/JS static template ("iCREAM" ice cream shop) with hardcoded carousels, services, portfolio items, and team members. Migrating to a database-driven CMS required preserving the exact Bootstrap markup and Owl Carousel configurations while replacing static content with server-rendered dynamic data.

**Solution:** The 13 partial sections in the final project mirrored the Session 8 template structure exactly:
- `Section (3)` reads `globals.get_carousels()` for the hero carousel
- `Section (7)` iterates `globals.get_Services()` for service cards
- `Section (8)` renders `globals.get_Portfolios()` filtered by `Active == true` and ordered by `Order`

The static carousel JSON was replaced with Razor `@foreach` loops over EF Core queries, but the frontend JavaScript (Owl Carousel initialization, Isotope filtering, Lightbox) remained entirely intact — demonstrating clean separation of concerns between presentation and data.

### 8.3 Identity Integration & Admin Isolation

**Problem:** Adding authentication to a previously anonymous website required retrofitting login/registration without breaking existing public pages. Admin panels needed protection while public pages remained accessible without authentication. Additionally, the Identity schema had to coexist with the existing `Carousel`, `Service`, and `Portfolio` tables.

**Solution:**
- **Schema merging:** `ApplicationDbContext` inherits from `IdentityDbContext`, merging Identity's `AspNetUsers`, `AspNetRoles`, `AspNetUserClaims` with custom `DbSet<>` properties in a single context.
- **Layout isolation:** Two separate layouts enforced visual separation — `Admin_Layout.cshtml` (200px dark sidebar, navigation, logout) versus the public brand-themed layout.
- **Zero-custom auth:** Scaffolded Identity pages under `Areas/Identity/Pages/Account/` handled authentication flows with no custom controller logic. `SignInManager` and `UserManager` were injected directly into PageModel constructors.

### 8.4 Schema Evolution via Migrations

**Problem:** Building the CMS incrementally required the database schema to evolve over multiple sessions — starting with `Carousel`, adding `Service`, then `Portfolio`, all alongside Identity's pre-built schema. Managing this without data loss or manual SQL scripts required disciplined migration workflows.

**Solution:** Four explicit EF Core migrations tracked every schema change:
1. `20241008143004_mig1` — Initial Carousel table
2. `20241010145413_mig_maya` — Added Service entity
3. `20241013145516_m1` — Added Portfolio entity
4. `00000000000000_CreateIdentitySchema` — Identity scaffolding

Each migration generated `Up()`/`Down()` methods with `CreateTable`, `AddColumn`, and foreign key constraints. `Program.cs` used `app.MigrateDatabase()` in development mode to auto-apply pending migrations on startup, ensuring consistency across environments without manual `Update-Database` commands.

---

## 9. Projects Catalog

| Session | Core Techniques |
|---------|-----------------|
| Session 5 | Hardcoded arrays, `Random.Next()`, stateless data display |
| Session 8 | Static HTML/CSS/JS frontend template (iCREAM) |
| Session 16 | EF Core, SQL Server LocalDB, `globals` helper, admin CRUD |
| Session 18 | MVC pattern (`MVC_ASP.zip`) |
| Session 19 | Minimal Web API, RESTful endpoints (`TodoApi.zip`) |

**Final Project (CMS):**
- Razor Pages with code-behind PageModels
- Entity Framework Core 8.0 with SQL Server LocalDB
- ASP.NET Core Identity authentication
- Dual public/admin layouts
- Bootstrap 4.5.3 + Owl Carousel 2 + Isotope.js + Lightbox + Waypoints + CounterUp
- 13 partial sections composing the home page
- Auto-generated admin panels for Carousel, Service, Portfolio entities
- Image upload fields in Create/Edit forms
- Scaffolded Identity UI (Login, Register, Logout)
- Code-First Migrations with auto-apply on startup

---

*End of Master Reference Manual: ASP.NET Core Full-Stack Development*
