import axios from "axios";

const baseUrl = "http://localhost:3001";

const getAll = () => {
  const response = axios.get(`${baseUrl}/persons`);
  return response.then((res) => res.data);
};

const create = (newObject) => {
  const response = axios.post(`${baseUrl}/persons`, newObject);
  return response.then((res) => res.data);
};

const update = (id, newObject) => {
  const response = axios.put(`${baseUrl}/persons/${id}`, newObject);
  return response.then((res) => res.data);
};

const remove = (id) => {
  const response = axios.delete(`${baseUrl}/persons/${id}`);
  return response.then((res) => res.data);
};

export default { getAll, create, update, remove };
