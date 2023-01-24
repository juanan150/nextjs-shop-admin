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

export { addProduct };
