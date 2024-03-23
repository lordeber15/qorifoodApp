import axios from "axios";

const loginAPI = axios.create({
  /*baseURL: "http://localhost:3000/",*/
  baseURL: "https://qoriapp-backend.onrender.com/",
});

export const getUser = async () => {
  const res = await loginAPI.get("/login");
  return res.data;
};
