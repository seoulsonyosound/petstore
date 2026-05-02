# Research: Pet Listing Implementation

## Decision: Spring Boot 3 + Java 17
**Rationale**: Aligns with the project constitution (Principle I). Spring Boot 3 provides native support for Jakarta EE 10 and improved observability.
**Alternatives Considered**: Node.js (Express), but Spring Boot was explicitly requested and constitutionalized.

## Decision: PostgreSQL 15+ on Render
**Rationale**: Constitution Principle III requires Postgres. Render provides a managed Postgres service with easy integration for Spring Boot apps.
**Alternatives Considered**: External DB providers like Supabase or AWS RDS, but Render keeps infrastructure consolidated (Principle IV).

## Decision: React 18 + Tailwind CSS + MUI 5
**Rationale**: Constitution Principle II. React 18 provides Concurrent Mode for better UI responsiveness. Tailwind for custom utility styling and MUI for complex components (pagination, search bars).
**Alternatives Considered**: Bootstrap or plain CSS, but Tailwind/MUI combination is constitutionalized for this project.

## Decision: Server-Side Pagination
**Rationale**: Clarified in session 2026-05-01. Prevents client-side performance degradation as the pet catalog grows.
**Alternatives Considered**: Infinite scroll (rejected for better predictability and SEO/linkability).

## Decision: Render Web Services
**Rationale**: Constitution Principle IV. Render handles automatic deployments from Git, SSL, and environment variable management efficiently.
**Alternatives Considered**: Heroku or Vercel, but Render is the target platform.
