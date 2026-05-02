package com.alejos.petstore.repositories;

import com.alejos.petstore.models.Pet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import java.util.UUID;

@Repository
public interface PetRepository extends JpaRepository<Pet, UUID>, JpaSpecificationExecutor<Pet> {}
