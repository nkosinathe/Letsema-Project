// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

// Automatically attach access token to requests if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
