import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-app-mern-stack.vercel.app",
  withCredentials: true,
});

export default apiRequest;