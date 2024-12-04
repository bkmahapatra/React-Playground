import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="">
      {Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        return (
          <span
            key={index}
            className={`text-5xl p-2 cursor-pointer ${
              value <= (hover || rating) ? "text-yellow-400" : ""
            }`}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
