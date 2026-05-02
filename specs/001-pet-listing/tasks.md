# Tasks: Pet Listing

**Input**: Design documents from `specs/001-pet-listing/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/api.md

**Tests**: JUnit/Mockito for Backend, Jest/React Testing Library for Frontend.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Path Conventions

- **Web app**: `backend/src/main/java/com/alejos/petstore/`, `frontend/src/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Create project structure for backend/ and frontend/ directories
- [x] T002 Initialize Spring Boot project in backend/ with Java 17, Web, JPA, Postgres, and Validation dependencies
- [x] T003 Initialize React project in frontend/ with TypeScript, Tailwind CSS, and MUI
- [x] T004 [P] Configure application.properties in backend/src/main/resources/ with PostgreSQL settings
- [x] T005 [P] Setup ESLint and Prettier for frontend/ and Checkstyle for backend/

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [x] T006 Create Pet entity in backend/src/main/java/com/alejos/petstore/models/Pet.java
- [x] T007 Setup Flyway or Liquibase migrations in backend/src/main/resources/db/migration/ for pets table
- [x] T008 Create PetRepository interface in backend/src/main/java/com/alejos/petstore/repositories/PetRepository.java
- [x] T009 [P] Configure Global Exception Handler in backend/src/main/java/com/alejos/petstore/exceptions/GlobalExceptionHandler.java
- [x] T010 [P] Create API Client utility in frontend/src/services/apiClient.ts using base path /alejos

**Checkpoint**: Foundation ready - user story implementation can now begin

---

## Phase 3: User Story 1 - Browse Pet Catalog (Priority: P1) 🎯 MVP

**Goal**: Display a paginated list of pets and view pet details.

**Independent Test**: Navigate to / and see first 20 pets; click a pet to see full details.

### Implementation for User Story 1

- [x] T011 [P] [US1] Create PetDTO in backend/src/main/java/com/alejos/petstore/dto/PetDTO.java
- [x] T012 [US1] Implement PetService.getPets(Pageable) in backend/src/main/java/com/alejos/petstore/services/PetService.java
- [x] T013 [US1] Implement GET /alejos/api/v1/pets in backend/src/main/java/com/alejos/petstore/controllers/PetController.java
- [x] T014 [US1] Implement GET /alejos/api/v1/pets/{id} in backend/src/main/java/com/alejos/petstore/controllers/PetController.java
- [x] T015 [P] [US1] Create PetCard component in frontend/src/components/PetCard.tsx
- [x] T016 [P] [US1] Create PetDetail component in frontend/src/components/PetDetail.tsx
- [x] T017 [US1] Create PetListPage in frontend/src/pages/PetListPage.tsx (fetch pets with pagination)
- [x] T018 [US1] Create PetDetailPage in frontend/src/pages/PetDetailPage.tsx
- [x] T019 [US1] Setup React Router in frontend/src/App.tsx for home and detail routes

**Checkpoint**: User Story 1 is functional - Catalog can be browsed with pagination.

---

## Phase 4: User Story 2 - Search and Filter Pets (Priority: P2)

**Goal**: Search by name/breed and filter by type/availability.

**Independent Test**: Use search bar and filters; verify list updates automatically.

### Implementation for User Story 2

- [x] T020 [US2] Update PetRepository with search and filter query methods
- [x] T021 [US2] Update PetService to handle search, filter, and sort parameters
- [x] T022 [US2] Update PetController GET /alejos/api/v1/pets to accept query parameters
- [x] T023 [P] [US2] Create SearchBar component in frontend/src/components/SearchBar.tsx with debounce
- [x] T024 [P] [US2] Create FilterPanel component in frontend/src/components/FilterPanel.tsx
- [x] T025 [US2] Integrate SearchBar and FilterPanel into PetListPage.tsx

**Checkpoint**: User Story 2 is functional - Users can search and filter pets.

---

## Phase 5: User Story 3 - Check Pet Availability (Priority: P1)

**Goal**: Clearly indicate availability status on list and detail views.

**Independent Test**: Verify "Adopted" pets are visually distinct or filtered correctly.

### Implementation for User Story 3

- [x] T026 [US3] Update PetCard.tsx to show availability badge/status
- [x] T027 [US3] Update PetDetail.tsx to show detailed availability info
- [x] T028 [US3] Add styling for "Adopted" pets in PetCard.tsx (e.g., grayscale or overlay)

**Checkpoint**: User Story 3 is functional - Availability status is transparent to users.

---

## Phase N: Polish & Cross-Cutting Concerns

- [x] T029 [P] Create SQL seed script with sample data in backend/src/main/resources/import.sql
- [x] T030 Add loading states and skeletons in frontend/src/components/LoadingSkeleton.tsx
- [x] T031 Implement responsive design tweaks for mobile in Tailwind
- [x] T032 [P] Configure Render deployment blueprints (render.yaml)
- [x] T033 Final verification of SC-001 to SC-006 measurable outcomes

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Setup (Phase 1)** -> **Foundational (Phase 2)**
2. **Foundational (Phase 2)** -> **User Stories (Phase 3+)**
3. **User Story 1 (P1)** is the MVP and should be completed before others.

### Parallel Opportunities

- T004, T005 (Setup)
- T009, T010 (Foundational)
- T011, T015, T016 (US1 Components/DTOs)
- T023, T024 (US2 Components)

---

## Implementation Strategy

### MVP First (User Story 1)
1. Initialize projects.
2. Implement core Pet model and API for listing.
3. Build the basic frontend list and detail views.
4. Validate Browse functionality.

### Incremental Delivery
- Add Search/Filter after Browse is stable.
- Polish UI and availability indicators in final pass.
- Deploy to Render using environment-specific configs.
