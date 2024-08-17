import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import ProductCard from "../components/ProductCard";

const Lazyload = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    // const url = "https://dummyjson.com/products?limit=9";
    const url = "https://api.escuelajs.co/api/v1/products?offset=9&limit=9";
    try {
      const res = await axios.get(url);
      const resJson = res.data;
      console.log({ resJson });

      setData((prev) => [...prev, ...resJson]);
      // setHasMore(data.length >= resJson.total);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [data]);

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, []);

  const handleScroll = () => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    // console.log({ scrollHeight, scrollTop, clientHeight });

    if (clientHeight + scrollTop >= scrollHeight - 100) {
      // fetchData();
      console.log("first");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  // const LazyLoad = lazy(async () => {
  //   const url = "https://dummyjson.com/products?limit=9";
  //   const res = await axios.get(url);
  //   const resJson = res.data;

  //   return resJson?.products;
  // });

  return (
    <div>
      <div className="grid grid-cols-3">
        {data.map((product) => {
          return <ProductCard key={product.id} data={product} />;
        })}
      </div>

      {/* <Suspense fallback={<p>laoding...</p>}><LazyLoad /></Suspense> */}
    </div>
  );
};

export default Lazyload;
