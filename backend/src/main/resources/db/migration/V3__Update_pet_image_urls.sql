UPDATE pets
SET image_url = CASE name
    WHEN 'Buddy' THEN 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZGVuJTIwcmV0cmlldmVyfGVufDB8fDB8fHww'
    WHEN 'Bella' THEN 'https://images.unsplash.com/photo-1677433780881-664fb3ea068e?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    WHEN 'Charlie' THEN 'https://images.unsplash.com/photo-1554456854-55a089fd4cb2?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFicmFkb3J8ZW58MHx8MHx8fDA%3D'
    WHEN 'Luna' THEN 'https://images.unsplash.com/photo-1510704652036-67838c2cfab6?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
    WHEN 'Oliver' THEN 'https://images.unsplash.com/photo-1687084837480-c0861fdc5a82?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1haW5lJTIwY29vbiUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D'
    WHEN 'Milo' THEN 'https://images.unsplash.com/photo-1665851486292-4da23410c539?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNpYW4lMjBjYXR8ZW58MHx8MHx8fDA%3D'
    WHEN 'Rio' THEN 'https://images.unsplash.com/photo-1604826010917-65cf53d6249b?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnJvdHxlbnwwfHwwfHx8MA%3D%3D'
    WHEN 'Sky' THEN 'https://images.unsplash.com/photo-1586861256152-6c7e7ce3895d?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuYXJ5fGVufDB8fDB8fHww'
    WHEN 'Peep' THEN 'https://images.unsplash.com/photo-1458410489211-ba19aa2f2902?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ja2F0aWVsfGVufDB8fDB8fHww'
    WHEN 'Goldie' THEN 'https://images.unsplash.com/photo-1668862347626-70a980820f06?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z29sZGZpc2h8ZW58MHx8MHx8fDA%3D'
    WHEN 'Bubbles' THEN 'https://images.unsplash.com/photo-1534575180408-b7d7c0136ee8?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJldHRhJTIwZmlzaHxlbnwwfHwwfHx8MA%3D%3D'
    WHEN 'Fin' THEN 'https://images.unsplash.com/photo-1711826949355-30acbe1b385a?fm=jpg&q=60&w=3000&h=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3VwcHl8ZW58MHx8MHx8fDA%3D'
    ELSE image_url
END
WHERE name IN ('Buddy', 'Bella', 'Charlie', 'Luna', 'Oliver', 'Milo', 'Rio', 'Sky', 'Peep', 'Goldie', 'Bubbles', 'Fin');
