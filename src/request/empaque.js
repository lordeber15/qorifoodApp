import axios from "axios";

const empaqueApi = axios.create({
  /*baseURL: "http://localhost:3000/",*/
  baseURL: "https://qoriapp-backend.onrender.com/",
});
export const getEmpaques = async () => {
  const res = await empaqueApi.get("/empaques");
  return res.data;
};
export const createEmpaques = (empaques) => {
  return empaqueApi.post("/empaques", empaques);
};

export const updateEmpaques = (empaques) => {
  const empaquesCopy = { ...empaques };
  delete empaquesCopy.id;
  return empaqueApi.put(`/empaques/${empaques.id}`, empaquesCopy);
};

export const deleteEmpaques = (id) => {
  return empaqueApi.delete(`/empaques/${id}`);
};
