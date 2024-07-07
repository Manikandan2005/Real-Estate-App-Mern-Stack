import axios from "axios";

const apiRequest = axios.create({
  baseURL: "real-estate-app-mern-stack-dlnp9hazw-manikandans-projects.vercel.app",
  withCredentials: true,
});

export default apiRequest;