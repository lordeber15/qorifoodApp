import axios from "axios";

const productoTerminado = axios.create({
  baseURL: "http://localhost:3000/",
   /*baseURL: "https://qoriapp-backend.onrender.com/",*/
});
export const getProductoterminado = async () => {
  const res = await productoTerminado.get("/productoterminado");
  return res.data;
};
export const createProductoterminado = (productoterminado) => {
  return productoTerminado.post("/productoterminado", productoterminado);
};

export const updateProductoTerminado = (productoterminado) => {
  const productoTerminadoCopy = { ...productoterminado };
  delete productoTerminadoCopy.id;
  return productoTerminado.put(`/productoterminado/${productoterminado.id}`, productoTerminadoCopy);
};

export const deleteProductoTerminado = (id) => {
  return productoTerminado.delete(`/productoterminado/${id}`);
};