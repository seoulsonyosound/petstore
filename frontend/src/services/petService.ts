import apiClient from "./apiClient";

export interface Pet {
  id?: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  sex: string;
  availability: boolean;
  imageUrl: string;
}

const petService = {
  getPets: (params: any) => apiClient.get("/pets", { params }),
  getPetById: (id: string) => apiClient.get(`/pets/${id}`),
  createPet: (pet: Pet) => apiClient.post("/pets", pet),
  updatePet: (id: string, pet: Pet) => apiClient.put(`/pets/${id}`, pet),
  deletePet: (id: string) => apiClient.delete(`/pets/${id}`),
};

export default petService;
