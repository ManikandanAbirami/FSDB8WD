import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:1337/api", // Backend URL
});

// Add a token to the request headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
