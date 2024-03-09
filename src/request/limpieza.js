import axios from "axios";

const qoriApi = axios.create({
  /*baseURL: "http://localhost:3000/",*/
  baseURL: "https://qoriapp-backend.onrender.com/",
});
export const getLimpieza = async () => {
  const res = await qoriApi.get("/limpieza");
  return res.data;
};
export const createLimpieza = (limpieza) => {
  return qoriApi.post("/empaques", limpieza);
};

export const updateLimpieza = (limpieza) => {
  const limpiezaCopy = { ...limpieza };
  delete limpiezaCopy.id;
  return qoriApi.put(`/limpieza/${limpieza.id}`, limpiezaCopy);
};

export const deleteLimpieza = (id) => {
  return qoriApi.delete(`/limpieza/${id}`);
};
