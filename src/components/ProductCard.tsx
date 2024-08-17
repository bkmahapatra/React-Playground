const ProductCard = ({ data }) => {
  const imageLink = data?.images[1].replace(/"/g, "") ?? "";
  return (
    <div className="max-w-44 p-2 m-1 border-white border rounded-md">
      <img src={imageLink} alt="" className="w-40 h-40 rounded-md" />
      <div>{data.title}</div>
      <div>{data.price}</div>
    </div>
  );
};

export default ProductCard;
