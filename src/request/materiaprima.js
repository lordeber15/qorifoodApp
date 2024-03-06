import axios from "axios";

const materiaPrimaApi = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getMateriaPrimas = async () => {
  const res = await materiaPrimaApi.get("/materiaprima");
  return res.data;
};
export const createMateriaPrimas = (materiaprimas) => {
  materiaPrimaApi.post("/materiaprimas", materiaprimas);
};
