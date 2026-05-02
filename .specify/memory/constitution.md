<!--
<sync_impact_report>
- Version change: [TEMPLATE] → 1.0.0
- List of modified principles:
  - [PRINCIPLE_1_NAME] → I. Type-Safe Spring Boot Backend
  - [PRINCIPLE_2_NAME] → II. Component-Based React Frontend
  - [PRINCIPLE_3_NAME] → III. Persistent Relational Data
  - [PRINCIPLE_4_NAME] → IV. Continuous Render Deployment
  - [PRINCIPLE_5_NAME] → V. E-commerce Domain Integrity
- Added sections: Technology Stack, Development Workflow
- Removed sections: None
- Templates requiring updates:
  - .specify/templates/plan-template.md: ✅ updated
  - .specify/templates/spec-template.md: ✅ updated
  - .specify/templates/tasks-template.md: ✅ updated
- Follow-up TODOs: None
</sync_impact_report>
-->

# petstore Constitution

## Core Principles

### I. Type-Safe Spring Boot Backend
Java Spring Boot MUST be used for all backend services. All APIs MUST be typed and documented using 
Swagger/OpenAPI. Business logic MUST reside in the service layer, isolated from web and data 
concerns to ensure testability and maintainability.

### II. Component-Based React Frontend
The frontend MUST be built with React 18+ using functional components and hooks. Tailwind CSS 
MUST be used for layout and custom styling, while MUI (Material UI) MUST be used for complex UI 
components and design system consistency.

### III. Persistent Relational Data
PostgreSQL is the source of truth for all transactional data. All schema changes MUST be managed 
via versioned migrations. Relationships and constraints MUST be enforced at the database level to 
ensure data integrity across the e-commerce platform.

### IV. Continuous Render Deployment
The application MUST be architected for deployment on Render. Both frontend and backend MUST be 
configured for automated, zero-downtime deployments. Environment-specific configuration MUST be 
managed strictly via environment variables.

### V. E-commerce Domain Integrity
The system MUST prioritize the integrity of the pet catalog, shopping cart, and order processing. 
Transactional consistency is non-negotiable for order placement and inventory management to 
prevent stock overselling and data corruption.

## Technology Stack

- **Backend**: Java 17+, Spring Boot 3.x
- **Frontend**: React 18+, TypeScript, Tailwind CSS 3.x, MUI 5.x
- **Database**: PostgreSQL 15+
- **Infrastructure**: Render

## Development Workflow

- **Testing**: JUnit/Mockito for Backend, Jest/React Testing Library for Frontend.
- **CI/CD**: Automated builds and tests on every pull request.
- **Documentation**: Swagger/OpenAPI for API documentation.

## Governance

- This constitution supersedes all other development practices in the petstore project.
- Amendments require a version bump and documented rationale in the Sync Impact Report.
- All implementation plans MUST include a 'Constitution Check' to ensure alignment with these principles.
- Complexity MUST be justified and documented in implementation plans.
- Use `README.md` for project-level guidance and `docs/` for detailed architectural documentation.

**Version**: 1.0.0 | **Ratified**: 2026-05-01 | **Last Amended**: 2026-05-01
