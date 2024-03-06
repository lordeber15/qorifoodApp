import axios from "axios";

const productoterminado = axios.create({
  baseURL: "http://localhost:3000/",
});
export const getProductoterminado = async () => {
  const res = await productoterminado.get("/productoterminado");
  return res.data;
};
export const createProductoterminado = (productoterminado) => {
  productoterminado.post("/productoterminado", productoterminado);
};
