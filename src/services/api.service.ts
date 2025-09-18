import axios from "axios";

const api = () => {
  const token = localStorage.getItem("token");
  const instance = axios.create({
    baseURL: "http://localhost:1990/api/v1",
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return instance;
};

const getAll = async (endpoint: string) => {
  const response = await api().get(endpoint);
  return response.data;
};

const getById = async (endpoint: string, id: string) => {
  const response = await api().get(`${endpoint}/${id}`);
  return response.data;
};

const apiService = {
  getAll,
  getById,
};

export default apiService;
