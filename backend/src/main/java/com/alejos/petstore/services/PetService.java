package com.alejos.petstore.services;

import com.alejos.petstore.dto.PetDTO;
import com.alejos.petstore.models.Pet;
import com.alejos.petstore.repositories.PetRepository;
import jakarta.persistence.criteria.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class PetService {

    @Autowired
    private PetRepository petRepository;

    public Page<PetDTO> getPets(String search, Pet.PetType type, Boolean availability, Pageable pageable) {
        Specification<Pet> specification = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            if (search != null && !search.isBlank()) {
                String pattern = "%" + search.toLowerCase() + "%";
                predicates.add(
                    cb.or(
                        cb.like(cb.lower(root.get("name")), pattern),
                        cb.like(cb.lower(root.get("breed")), pattern)
                    )
                );
            }

            if (type != null) {
                predicates.add(cb.equal(root.get("type"), type));
            }

            if (availability != null) {
                predicates.add(cb.equal(root.get("availability"), availability));
            }

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        return petRepository.findAll(specification, pageable)
                .map(this::convertToDTO);
    }

    public PetDTO getPetById(UUID id) {
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found with id: " + id));
        return convertToDTO(pet);
    }

    public PetDTO createPet(PetDTO petDTO) {
        Pet pet = new Pet();
        updatePetFromDTO(pet, petDTO);
        Pet savedPet = petRepository.save(pet);
        return convertToDTO(savedPet);
    }

    public PetDTO updatePet(UUID id, PetDTO petDTO) {
        Pet pet = petRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Pet not found with id: " + id));
        updatePetFromDTO(pet, petDTO);
        Pet updatedPet = petRepository.save(pet);
        return convertToDTO(updatedPet);
    }

    public void deletePet(UUID id) {
        if (!petRepository.existsById(id)) {
            throw new RuntimeException("Pet not found with id: " + id);
        }
        petRepository.deleteById(id);
    }

    private void updatePetFromDTO(Pet pet, PetDTO dto) {
        pet.setName(dto.getName());
        pet.setType(dto.getType());
        pet.setBreed(dto.getBreed());
        pet.setAge(dto.getAge());
        pet.setSex(dto.getSex());
        pet.setAvailability(dto.getAvailability());
        pet.setImageUrl(dto.getImageUrl());
    }

    private PetDTO convertToDTO(Pet pet) {
        PetDTO dto = new PetDTO();
        dto.setId(pet.getId());
        dto.setName(pet.getName());
        dto.setType(pet.getType());
        dto.setBreed(pet.getBreed());
        dto.setAge(pet.getAge());
        dto.setSex(pet.getSex());
        dto.setAvailability(pet.getAvailability());
        dto.setImageUrl(pet.getImageUrl());
        return dto;
    }
}
