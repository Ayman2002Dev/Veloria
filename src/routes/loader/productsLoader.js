import axios from "axios";

const api = import.meta.env.VITE_API_PRODUCTS;

const limit = 20;
const productsLoader = async ({ request }) => {
  try {
    const url = new URL(request.url);
    let page = Number(url.searchParams.get("page") || 1);

    const skip = (page - 1) * limit;
    const response = await axios.get(api, {
      params: {
        skip,
        limit,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(`Error from products loader: ${error.message}`);
  }
};

export default productsLoader;
