import axios from "axios";

// 🔗 Base URL of your backend
const BASE_URL = "http://localhost:3000/api/womenProducts";

// 👉 Get all products
export const getAllProducts = async () => {
  return await axios.get(`${BASE_URL}/get`);
};

// 👉 Get single product by ID
export const getProductById = async (id) => {
  return await axios.get(`${BASE_URL}/get/${id}`);
};

// 👉 Create product
export const createProduct = async (productData) => {
  return await axios.post(`${BASE_URL}/post`, productData);
};

// 👉 Update product
export const updateProduct = async (id, updatedData) => {
  return await axios.put(`${BASE_URL}/update/${id}`, updatedData);
};

// 👉 Delete product
export const deleteProduct = async (id) => {
  return await axios.delete(`${BASE_URL}/delete/${id}`);
};
