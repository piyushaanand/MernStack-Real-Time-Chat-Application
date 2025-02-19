import axios from "axios";

// Create Axios instance
export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api": "/api",
  withCredentials: true,
});
