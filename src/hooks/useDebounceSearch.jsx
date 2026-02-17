import axios from "axios";
import { useEffect, useState } from "react";

function useDebounceSearch({ query, delay }) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const apiSearch = import.meta.env.VITE_API_SEARCH;

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    const fetcher = async (q) => {
      try {
        const response = await axios.get(`${apiSearch}?q=${q}`);
        return response.data.products || [];
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err);
        return [];
      }
    };

    const timer = setTimeout(() => {
      fetcher(query).then((data) => {
        setResults(data);
        setLoading(false);
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [query, delay, apiSearch]);

  return { loading, results, error };
}

export default useDebounceSearch;
