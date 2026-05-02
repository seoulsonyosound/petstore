# Data Model: Pet Listing

## Entities

### Pet
Represents an individual animal in the store.

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID | Primary Key | Unique identifier |
| name | String | Not Null | Pet's name |
| type | Enum | Not Null | DOG, CAT, BIRD, FISH |
| breed | String | Not Null | Specific breed or "Mixed/Unknown" |
| age | Integer | Not Null, >= 0 | Age in months |
| sex | Enum | Not Null | MALE, FEMALE, UNKNOWN |
| availability | Boolean | Not Null | True if available for adoption |
| image_url | String | Not Null | URL to the pet's photo |

## Enumerations

- **PetType**: `DOG`, `CAT`, `BIRD`, `FISH`
- **Sex**: `MALE`, `FEMALE`, `UNKNOWN`

## Sample Data (PostgreSQL)

```sql
INSERT INTO pets (id, name, type, breed, age, sex, availability, image_url) VALUES
-- Dogs
(gen_random_uuid(), 'Buddy', 'DOG', 'Golden Retriever', 24, 'MALE', true, 'https://example.com/buddy.jpg'),
(gen_random_uuid(), 'Bella', 'DOG', 'Beagle', 12, 'FEMALE', true, 'https://example.com/bella.jpg'),
(gen_random_uuid(), 'Charlie', 'DOG', 'Labrador', 36, 'MALE', false, 'https://example.com/charlie.jpg'),
-- Cats
(gen_random_uuid(), 'Luna', 'CAT', 'Siamese', 18, 'FEMALE', true, 'https://example.com/luna.jpg'),
(gen_random_uuid(), 'Oliver', 'CAT', 'Maine Coon', 48, 'MALE', true, 'https://example.com/oliver.jpg'),
(gen_random_uuid(), 'Milo', 'CAT', 'Persian', 6, 'MALE', true, 'https://example.com/milo.jpg'),
-- Birds
(gen_random_uuid(), 'Rio', 'BIRD', 'Parrot', 60, 'MALE', true, 'https://example.com/rio.jpg'),
(gen_random_uuid(), 'Sky', 'BIRD', 'Canary', 12, 'FEMALE', true, 'https://example.com/sky.jpg'),
(gen_random_uuid(), 'Peep', 'BIRD', 'Cockatiel', 24, 'MALE', false, 'https://example.com/peep.jpg'),
-- Fishes
(gen_random_uuid(), 'Goldie', 'FISH', 'Goldfish', 3, 'FEMALE', true, 'https://example.com/goldie.jpg'),
(gen_random_uuid(), 'Bubbles', 'FISH', 'Betta', 6, 'MALE', true, 'https://example.com/bubbles.jpg'),
(gen_random_uuid(), 'Fin', 'FISH', 'Guppy', 2, 'MALE', true, 'https://example.com/fin.jpg');
```
