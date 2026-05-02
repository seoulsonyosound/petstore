# Pet API Contract

**Base Path**: `/alejos/api/v1/pets`

## Endpoints

### 1. List Pets
`GET /alejos/api/v1/pets`

Retrieves a paginated list of pets with optional filtering and sorting.

**Query Parameters**:
- `page` (integer, default: 0): Page number.
- `size` (integer, default: 20): Items per page.
- `search` (string): Search by name or breed.
- `type` (string): Filter by pet type (DOG, CAT, BIRD, FISH).
- `availability` (boolean): Filter by availability.
- `sort` (string): Sort field and direction (e.g., `name,asc`, `age,desc`).

**Response** (200 OK):
```json
{
  "content": [
    {
      "id": "uuid",
      "name": "Buddy",
      "type": "DOG",
      "breed": "Golden Retriever",
      "age": 24,
      "sex": "MALE",
      "availability": true,
      "imageUrl": "..."
    }
  ],
  "pageable": { ... },
  "totalPages": 5,
  "totalElements": 100,
  "last": false,
  "size": 20,
  "number": 0,
  "sort": { ... },
  "numberOfElements": 20,
  "first": true,
  "empty": false
}
```

### 2. Get Pet Details
`GET /alejos/api/v1/pets/{id}`

Retrieves full details for a specific pet.

**Response** (200 OK):
```json
{
  "id": "uuid",
  "name": "Buddy",
  "type": "DOG",
  "breed": "Golden Retriever",
  "age": 24,
  "sex": "MALE",
  "availability": true,
  "imageUrl": "..."
}
```
**Response** (404 Not Found):
```json
{
  "message": "Pet with id {id} not found"
}
```
