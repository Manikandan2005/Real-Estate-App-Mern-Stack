import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-app-mern-stack-ihfu-r8n3r73fu-manikandans-projects.vercel.app",
  withCredentials: true,
});

export default apiRequest;