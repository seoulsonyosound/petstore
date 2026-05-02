package com.alejos.petstore.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.util.UUID;

@Entity
@Table(name = "pets")
public class Pet {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @NotBlank(message = "Name is required")
    private String name;

    @NotNull(message = "Type is required")
    @Enumerated(EnumType.STRING)
    private PetType type;

    @NotBlank(message = "Breed is required")
    private String breed;

    @NotNull(message = "Age is required")
    @Min(value = 0, message = "Age must be at least 0")
    private Integer age;

    @NotNull(message = "Sex is required")
    @Enumerated(EnumType.STRING)
    private Sex sex;

    @NotNull(message = "Availability is required")
    private Boolean availability;

    @NotBlank(message = "Image URL is required")
    @Column(name = "image_url")
    private String imageUrl;

    public enum PetType {
        DOG, CAT, BIRD, FISH
    }

    public enum Sex {
        MALE, FEMALE, UNKNOWN
    }

    // Default constructor
    public Pet() {}

    // Getters and Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public PetType getType() { return type; }
    public void setType(PetType type) { this.type = type; }

    public String getBreed() { return breed; }
    public void setBreed(String breed) { this.breed = breed; }

    public Integer getAge() { return age; }
    public void setAge(Integer age) { this.age = age; }

    public Sex getSex() { return sex; }
    public void setSex(Sex sex) { this.sex = sex; }

    public Boolean getAvailability() { return availability; }
    public void setAvailability(Boolean availability) { this.availability = availability; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
