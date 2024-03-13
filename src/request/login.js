import axios from "axios";

const loginAPI = axios.create({
  baseURL: "http://localhost:3000/",
   /*baseURL: "https://qoriapp-backend.onrender.com/",*/
});
export const getLogin = async () => {
  const res = await loginAPI.get("/login");
  return res.data;
};
export const createLogin = (login) => {
    loginAPI.post("/login", login);
};

export const updateLogin = (login) => {
  const loginCopy = { ...login };
  delete loginCopy.id;
  return loginAPI.put(`/login/${login.id}`, loginCopy);
};

export const deleteLogin = (id) => {
  return loginAPI.delete(`/login/${id}`);
};