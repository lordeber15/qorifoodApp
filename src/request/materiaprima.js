import axios from "axios";

const materiaPrimaApi = axios.create({
  /*baseURL: "http://localhost:3000/",*/
   baseURL: "https://qoriapp-backend.onrender.com/",
});
export const getMateriaPrima = async () => {
  const res = await materiaPrimaApi.get("/materiaprima");
  return res.data;
};
export const createMateriaPrima = (materiaprima) => {
  return materiaPrimaApi.post("/materiaprima", materiaprima);
};

export const updateMateriaPrima = (materiaprima) => {
  const materiaPrimaCopy = { ...materiaprima };
  delete materiaPrimaCopy.id;
  return materiaPrimaApi.put(`/materiaprima/${materiaprima.id}`, materiaPrimaCopy);
};

export const deleteMateriaPrima = (id) => {
  return materiaPrimaApi.delete(`/materiaprima/${id}`);
};