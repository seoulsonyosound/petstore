package com.alejos.petstore.dto;

import com.alejos.petstore.models.Pet;
import java.util.UUID;

public class PetDTO {
    private UUID id;
    private String name;
    private Pet.PetType type;
    private String breed;
    private Integer age;
    private Pet.Sex sex;
    private Boolean availability;
    private String imageUrl;

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public Pet.PetType getType() { return type; }
    public void setType(Pet.PetType type) { this.type = type; }

    public String getBreed() { return breed; }
    public void setBreed(String breed) { this.breed = breed; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public Pet.Sex getSex() { return sex; }
    public void setSex(Pet.Sex sex) { this.sex = sex; }

    public Boolean getAvailability() { return availability; }
    public void setAvailability(Boolean availability) { this.availability = availability; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
