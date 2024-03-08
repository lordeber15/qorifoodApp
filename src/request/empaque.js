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
  empaqueApi.post("/empaques", empaques);
};
