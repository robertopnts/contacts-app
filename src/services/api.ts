import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5555",
  timeout: 5000,
})

export default api