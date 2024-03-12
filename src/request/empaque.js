import axios from "axios";

const qoriApi = axios.create({
  /*baseURL: "http://localhost:3000/",*/
   baseURL: "https://qoriapp-backend.onrender.com/",
});
export const getEmpaques = async () => {
  const res = await qoriApi.get("/empaques");
  return res.data;
};
export const createEmpaques = (empaques) => {
  return qoriApi.post("/empaques", empaques);
};

export const updateEmpaques = (empaques) => {
  const empaquesCopy = { ...empaques };
  delete empaquesCopy.id;
  return qoriApi.put(`/empaques/${empaques.id}`, empaquesCopy);
};

export const deleteEmpaques = (id) => {
  return qoriApi.delete(`/empaques/${id}`);
};
