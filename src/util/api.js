import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 1000,
  headers: {Authorization: 'Bearer ' + 'localStorage.token'}
});

export default apiClient;
