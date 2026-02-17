import axios from "axios";

const api = import.meta.env.VITE_API_PRODUCTS;

const productDetailsLoader = async ({ params }) => {
  try {
    const { productId } = params;
    const response = await axios.get(`${api}/${productId || 1}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error To Get Product Details Loader:  ${error.message}`);
  }
};

export default productDetailsLoader;
