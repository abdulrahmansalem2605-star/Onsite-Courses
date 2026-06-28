# 🏛️ ASP.NET Core Full-Stack Course - My Learning Journey

## 🎯 Technical Context & Summary

This repository chronicles my complete progression from absolute beginner to confident full-stack ASP.NET Core developer across **19 intensive sessions**. What started as a blank IDE and a curiosity about web development evolved into a production-grade Content Management System complete with authentication, database migrations, admin panels, RESTful APIs, and a polished Bootstrap frontend. Each session represents a stepping stone — from hardcoding arrays of student names onto a Razor page, all the way to architecting multi-table Entity Framework Core data layers integrated with ASP.NET Core Identity. The course spanned September and October 2024, documented not only through code but also via session recordings and reference PDFs on cloud-native architecture, microservices, and Azure deployment — laying the groundwork for what comes next.

## 🧠 Deep Tech Stack & Concepts

### Core Framework & Runtime
- **ASP.NET Core 8.0** (`.NET 8.0` SDK) — the backbone, configured via `WebApplication.CreateBuilder(args)` with the minimal API-style `Program.cs` entry point
- **Razor Pages** as the primary UI paradigm — every page split into `.cshtml` (view markup) and `.cshtml.cs` (PageModel with `OnGet()`/`OnPost()` handlers), demonstrating the code-behind separation pattern
- **MVC exposure** in Session 18 via `MVC_ASP.zip`, introducing the classic Model-View-Controller triad
- **Minimal Web API** in Session 19 (`TodoApi.zip`) — RESTful endpoint design as a capstone transition into API-first development

### Data Access & Persistence
- **Entity Framework Core 8.0.8** with two flavors of provider: `Microsoft.EntityFrameworkCore.SqlServer` (primary, LocalDB) and `Microsoft.EntityFrameworkCore.Sqlite` (secondary)
- **Code-First Migrations** — four incremental schema migrations (`mig1` → `mig_maya` → `m1` + Identity scaffold) showing real schema evolution: adding `Carousel`, `Service`, and `Portfolio` tables in sequence
- **`ApplicationDbContext : IdentityDbContext`** — a single `DbContext` inheriting from the Identity-aware base, exposing `DbSet<Carousel>`, `DbSet<Service>`, `DbSet<Portfolio>`
- **Custom `globals` helper class** — an early repository-like pattern that manually constructs `DbContextOptions<ApplicationDbContext>` and exposes `get_carousels()`, `get_Services()`, `get_Portfolios()` — bridging the gap before full DI adoption

### Authentication & Authorization
- **ASP.NET Core Identity** with Individual Accounts — `AddDefaultIdentity<IdentityUser>` wired into EF Core stores, requiring confirmed accounts via `SignIn.RequireConfirmedAccount = true`
- **`SignInManager.PasswordSignInAsync()`** for login, **`UserManager.CreateAsync()`** for registration, **`SignInManager.SignOutAsync()`** for logout
- **Two distinct layouts**: `_Layout.cshtml` (public-facing) vs `Admin_Layout.cshtml` (admin sidebar at 200px, dark `#283039` background, collapses to 70px on mobile)

### Frontend & Static Assets
- **Bootstrap 4.5.3** with custom CSS variables — primary pink (`#F195B2`), secondary blue (`#62C3E7`), font stack Poppins
- **Owl Carousel 2** for service, product, team, and testimonial sliders — configured via jQuery with items count, autoplay, and responsive breakpoints
- **Isotope.js** for portfolio filtering (All / Cone / Vanilla / Chocolate categories)
- **Lightbox** for image galleries, **Waypoints** + **CounterUp** for scroll-triggered animations
- **13 partial sections** on the home page (`sections/Section (1)` through `Section (13)`) — a modular component architecture within Razor Pages

### Admin CRUD & Scaffolding
- **Complete auto-generated admin panels** for Carousels, Services, and Portfolios — each with `Index`, `Create`, `Edit`, `Details`, `Delete` — using `[BindProperty]` model binding, `_context.Attach().State = EntityState.Modified` for updates, and `_context.Remove()` for deletes
- **Image upload fields** (`<input type="file">`) in Create/Edit forms tied to string `Img` properties
- **Scaffolded Identity UI** in `Areas/Identity/Pages/Account/` — Login, Register, Logout with `InputModel` validation attributes

### Reference Architecture Knowledge
- **5 Microsoft Press PDFs** in the `Dotnet/` directory covering cloud-native .NET apps on Azure, modern web architecture, Azure quick-start for .NET, Blazor for Web Forms developers, and microservices with containers
- **6 reference images** (Sep-Oct 2024) capturing whiteboard diagrams and architectural sketches from live sessions

## 💡 Problem-Solving Case Study

### 1. The Hardcoded Data Ceiling

**Challenge:** In Session 5, student data was hardcoded as parallel arrays (`students[9]` and `genders[9]`) with `Random.Next(0, 100)` generating grades on every page refresh. This approach was stateless, non-persistent, and completely unscalable — every visit created fresh "random" data with no ability to edit or delete.

**Solution:** The final project (`Session 16`) replaces this entirely with EF Core and SQL Server LocalDB. `Carousel`, `Service`, and `Portfolio` models become database tables with proper primary keys (`int ID`), ordering (`int Order`), soft-delete flags (`bool Active`), and string content fields. The `globals` helper class abstracts database access, and the admin CRUD pages provide full create-read-update-delete over persisted data. The random-student demo evolved into a live-managed content system.

### 2. Static Frontend → Dynamic CMS Bridge

**Challenge:** Session 8's `Website Frontend` was a pure HTML/CSS/JS static template ("iCREAM" ice cream shop) with hardcoded carousels, services, portfolio items, and team members. Migrating this to a dynamic, database-driven CMS meant preserving the exact same Bootstrap markup and Owl Carousel configurations while replacing static content with Razor `@foreach` loops over EF Core queries.

**Solution:** The 13 partial sections in `final_project` mirror the Session 8 template structure exactly — `Section (3)` reads `globals.get_carousels()` for the hero carousel, `Section (7)` iterates `globals.get_Services()` for the service cards, `Section (8)` renders `globals.get_Portfolios()` filtered by `Active == true` and ordered by `Order`. The static carousel JSON was replaced with server-rendered Razor, but the frontend JavaScript (Owl Carousel init, Isotope filter, Lightbox) remained 1:1 intact — proving the clean separation of concerns.

### 3. Identity Integration & Admin Isolation

**Challenge:** Adding authentication to a previously anonymous website required retrofitting login/registration without breaking the existing public pages. The admin panels needed to be protected but the public site had to remain accessible without authentication. Additionally, the Identity schema needed to coexist with the existing `Carousel`, `Service`, and `Portfolio` tables.

**Solution:** `ApplicationDbContext` inherits from `IdentityDbContext`, merging Identity's `AspNetUsers`, `AspNetRoles`, `AspNetUserClaims`, etc. with the custom `DbSet<>` properties. Two separate layouts enforce visual isolation: the admin layout (`Admin_Layout.cshtml`) provides a 200px dark sidebar with navigation links and logout, while the public layout uses the full ice-cream brand theme. The scaffolded Identity pages under `Areas/Identity/Pages/Account/` handle auth flows with zero custom controller logic — `SignInManager` and `UserManager` are injected directly into the PageModel constructors.

### 4. Schema Evolution via Migrations

**Challenge:** Building the CMS incrementally meant the database schema had to evolve over multiple sessions — starting with just a `Carousel` table, adding `Service` later, then `Portfolio`, and always alongside Identity's pre-built schema. Managing this without data loss or manual SQL scripts required disciplined migration workflows.

**Solution:** Four explicit EF Core migrations (`20241008143004_mig1` → `20241010145413_mig_maya` → `20241013145516_m1` + the Identity scaffolding migration `00000000000000_CreateIdentitySchema`) track every schema change. Each migration adds `Up()`/`Down()` methods with `CreateTable`, `AddColumn`, and foreign key constraints. The `Program.cs` uses `app.MigrateDatabase()` in development mode to auto-apply pending migrations on startup — eliminating manual `Update-Database` commands and ensuring consistency across environments.
