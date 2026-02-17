import axios from "axios";
const categoryApi = import.meta.env.VITE_API_CATEGORY;
const limit = 20;
const categoryLoader = async ({ request, params }) => {
  try {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page") || 1);
    const skip = (page - 1) * limit;
    const { category } = params;
    const response = await axios.get(`${categoryApi}/${category}`, {
      params: {
        limit,
        skip,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(`Error From Get Product Category: ${error}`);
  }
};

export default categoryLoader;
