INSERT INTO pets (id, name, type, breed, age, sex, availability, image_url) VALUES
-- Dogs
(gen_random_uuid(), 'Buddy', 'DOG', 'Golden Retriever', 24, 'MALE', true, 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Bella', 'DOG', 'Beagle', 12, 'FEMALE', true, 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Charlie', 'DOG', 'Labrador', 36, 'MALE', false, 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800'),
-- Cats
(gen_random_uuid(), 'Luna', 'CAT', 'Siamese', 18, 'FEMALE', true, 'https://images.unsplash.com/photo-1513245543132-31f507417b26?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Oliver', 'CAT', 'Maine Coon', 48, 'MALE', true, 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Milo', 'CAT', 'Persian', 6, 'MALE', true, 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800'),
-- Birds
(gen_random_uuid(), 'Rio', 'BIRD', 'Parrot', 60, 'MALE', true, 'https://images.unsplash.com/photo-1522850949506-58555f29a8ec?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Sky', 'BIRD', 'Canary', 12, 'FEMALE', true, 'https://images.unsplash.com/photo-1522850949506-58555f29a8ec?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Peep', 'BIRD', 'Cockatiel', 24, 'MALE', false, 'https://images.unsplash.com/photo-1522850949506-58555f29a8ec?auto=format&fit=crop&w=800'),
-- Fishes
(gen_random_uuid(), 'Goldie', 'FISH', 'Goldfish', 3, 'FEMALE', true, 'https://images.unsplash.com/photo-1524704659690-3f7a3fe41abd?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Bubbles', 'FISH', 'Betta', 6, 'MALE', true, 'https://images.unsplash.com/photo-1524704659690-3f7a3fe41abd?auto=format&fit=crop&w=800'),
(gen_random_uuid(), 'Fin', 'FISH', 'Guppy', 2, 'MALE', true, 'https://images.unsplash.com/photo-1524704659690-3f7a3fe41abd?auto=format&fit=crop&w=800');
