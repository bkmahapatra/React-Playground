import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Pagination = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const skip = 6 * (page - 1);
    console.log(skip);
    const url = `https://api.escuelajs.co/api/v1/products?offset=${skip}&limit=6`;
    const res = await axios.get(url);
    const resJson = res.data;

    console.log({ res, resJson });
    setData(resJson);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log(page);

  return (
    <div>
      <div className="grid grid-cols-3">
        {data.map((product) => {
          return <ProductCard key={product?.id} data={product} />;
        })}
      </div>

      <div>
        <button className="m-2" onClick={() => {}}>
          prev
        </button>
        <button
          className="m-2"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
