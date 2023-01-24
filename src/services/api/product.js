import axios from "axios";
import endpoints from "@services/api";

async function addProduct(body) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      accept: "/*",
    },
  };
  const response = await axios.post(endpoints.products.addProducts, body, config);

  return response.data;
}

async function deleteProduct(id) {
  const response = await axios.delete(endpoints.products.deleteProduct(id));
  return response.data;
}

async function updateProduct(id, body) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      accept: "/*",
    },
  };
  const response = await axios.put(endpoints.products.updateProduct(id), body, config);

  return response.data;
}

export { addProduct, deleteProduct, updateProduct };
