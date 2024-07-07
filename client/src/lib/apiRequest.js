import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-app-mern-stack-ihfu.vercel.app/",
  withCredentials: true,
});

export default apiRequest;