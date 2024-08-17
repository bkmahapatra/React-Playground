import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com";
const Debounce = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log({ query, results });

  const fetchData = async () => {
    const url = `${BASE_URL}/products/search?q=${query}`;
    try {
      const res = await axios.get(url);
      const data = await res.data;
      console.log({ res });
      setResults(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (event) => {
    setQuery(event.target.value || "");
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => {
      setIsLoading(false);
      clearTimeout(timeoutId);
    };
  }, [query]);

  return (
    <div>
      <input type="text" value={query} onChange={handleSearch} />

      {isLoading ? (
        <div>Loading...</div>
      ) : query !== "" && results.length === 0 ? (
        <div>No results found!</div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Debounce2 = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log({ query, results });

  const fetchData = async (sQuery: string) => {
    if (!sQuery) return;

    const url = `${BASE_URL}/products/search?q=${sQuery}`;
    try {
      const res = await axios.get(url);
      const data = await res.data;
      console.log({ res });
      setResults(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const debounceFn = (func, delay) => {
    let timeoutId: any;
  
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  
    return (...arg) => {
      timeoutId = setTimeout(() => {
        func(...arg);
      }, delay);
    };
  };

  const debouncedFetch = debounceFn(fetchData, 1000);

  const handleSearch = (event) => {
    setQuery(event.target.value || "");

    debouncedFetch(event.target.value || "");
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="search here"
      />

      {isLoading ? (
        <div>Loading...</div>
      ) : query !== "" && results.length === 0 ? (
        <div>No results found!</div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Debounce;
