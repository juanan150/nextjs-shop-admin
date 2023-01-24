const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endpoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
  },
  products: {
    getProduct: (id) => `${API}/${VERSION}/products/${id}`,
    allProducts: `${API}/${VERSION}/products`,
    updateProduct: (id) => `${API}/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/${VERSION}/products/${id}`,
    getProducts: (limit, offset) => `${API}/${VERSION}/products?limit=${limit}&offset=${offset}`,
    addProducts: `${API}/${VERSION}/products`,
  },
  users: {
    getUsers: `${API}/${VERSION}/users`,
    getUser: (id) => `${API}/${VERSION}/users/${id}`,
    updateUser: (id) => `${API}/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/${VERSION}/users/${id}`,
  },
  categories: {
    getCategories: `${API}/${VERSION}/categories`,
    addCategory: `${API}/${VERSION}/categories`,
    getCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    updateCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/${VERSION}/categories/${id}`,
  },
  files: {
    addImage: `${API}/${VERSION}/files/upload`,
  },
};

export default endpoints;
