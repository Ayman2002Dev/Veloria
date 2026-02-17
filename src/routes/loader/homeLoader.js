import axios from "axios";

const productApi = import.meta.env.VITE_API_PRODUCTS;

const homeLoader = async () => {
  try {
    const response = await axios.get(productApi, {
      params: {
        limit: 194,
      },
    });

    const products = response.data.products;

    const discountedProducts = products.filter(
      (product) => product.discountPercentage > 17,
    );
    return discountedProducts;
  } catch (error) {
    throw new Error(`Error From Products Swiper: ${error}`);
  }
};

export default homeLoader;
