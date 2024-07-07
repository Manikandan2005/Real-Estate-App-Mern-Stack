import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-app-mern-stack-ihfu-63k0x0ul9-manikandans-projects.vercel.app/",
  withCredentials: true,
});

export default apiRequest;