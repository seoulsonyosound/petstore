package com.alejos.petstore.controllers;

import com.alejos.petstore.dto.PetDTO;
import com.alejos.petstore.models.Pet;
import com.alejos.petstore.services.PetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import java.util.UUID;

@RestController
@RequestMapping("/alejos/api/v1/pets")
@CrossOrigin(origins = "*") // For development
public class PetController {

    @Autowired
    private PetService petService;

    @GetMapping
    public Page<PetDTO> getPets(
            @RequestParam(required = false) String search,
            @RequestParam(required = false) Pet.PetType type,
            @RequestParam(required = false) Boolean availability,
            Pageable pageable) {
        return petService.getPets(search, type, availability, pageable);
    }

    @GetMapping("/{id}")
    public PetDTO getPetById(@PathVariable UUID id) {
        return petService.getPetById(id);
    }

    @PostMapping
    public PetDTO createPet(@RequestBody PetDTO petDTO) {
        return petService.createPet(petDTO);
    }

    @PutMapping("/{id}")
    public PetDTO updatePet(@PathVariable UUID id, @RequestBody PetDTO petDTO) {
        return petService.updatePet(id, petDTO);
    }

    @DeleteMapping("/{id}")
    public void deletePet(@PathVariable UUID id) {
        petService.deletePet(id);
    }
}
