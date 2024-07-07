import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-app-mern-stack-ppcwnyqng-manikandans-projects.vercel.app",
  withCredentials: true,
});

export default apiRequest;