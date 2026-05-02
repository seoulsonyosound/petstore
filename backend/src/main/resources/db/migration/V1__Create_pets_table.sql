CREATE TABLE pets (
    id UUID PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(50) NOT NULL,
    breed VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL,
    sex VARCHAR(50) NOT NULL,
    availability BOOLEAN NOT NULL,
    image_url TEXT NOT NULL
);
