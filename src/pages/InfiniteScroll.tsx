import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://dummyjson.com";
const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasmore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  console.log({ page });
  const fetchData = async () => {
    if (!hasMore || isLoading) return;

    const skip = (page - 1) * 6;
    const url = `${BASE_URL}/products?limit=6&skip=${skip}`;

    setIsLoading(true);
    try {
      const res = await axios.get(url);
      const data = await res.data;
      if (data?.products.length === 0) {
        setHasmore(false);
        return;
      }
      setData((prev) => [...prev, ...data?.products]);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("first");
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY + 10 >=
      document.body.offsetHeight
    ) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {data.map((item: any) => {
        return (
          <div key={item.id} className="p-3">
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
          </div>
        );
      })}
      {isLoading ? <div>Loading...</div> : ""}
    </div>
  );
};
export default InfiniteScroll;

// const handleScroll = () => {
//     console.log({
//       //   win: window.innerHeight,
//       //   pageYoff: window.scrollY,
//       //   docSct: document.documentElement.scrollTop,
//       //   docOffh: document.documentElement.offsetHeight,
//       ddd: window.innerHeight + window.scrollY,
//       off: document.body.offsetHeight,
//     });

//     if (
//       // window.innerHeight + document.documentElement.scrollTop >=
//       // document.documentElement.offsetHeight - 100
//       window.innerHeight + window.scrollY + 10 >=
//       document.body.offsetHeight
//     ) {
//       console.log("---");
//       setPage((prev) => prev + 1);
//     }
//   };
