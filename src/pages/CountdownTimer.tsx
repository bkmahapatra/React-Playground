import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [timer, setTimer] = useState(6);

  console.log("component");

  useEffect(() => {
    if (timer <= 0) {
      return;
    }

    const timoutId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    console.log(timoutId);

    return () => clearTimeout(timoutId);
  }, [timer]);

  return <div>{timer}</div>;
};

export default CountdownTimer;
