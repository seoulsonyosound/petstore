# Quickstart: Pet Listing

## Backend (Spring Boot)
1. Ensure Java 17+ and PostgreSQL are installed.
2. Configure `src/main/resources/application.properties` with database credentials.
3. Run `./mvnw spring-boot:run`.
4. API will be available at `http://localhost:8080/alejos/api/v1/pets`.

## Frontend (React)
1. Navigate to the `frontend` directory.
2. Run `npm install`.
3. Set `REACT_APP_API_BASE_URL=http://localhost:8080/alejos/api/v1`.
4. Run `npm start`.

## Deployment (Render)
1. Connect GitHub repository to Render.
2. Create a "Web Service" for the backend.
3. Create a "Static Site" for the frontend.
4. Create a "PostgreSQL" instance.
5. Set environment variables in Render Dashboard.
