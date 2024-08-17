import React, { useEffect, useRef, useState } from "react";

const CountdownTimer = () => {
  const [timer, setTimer] = useState(10);

  let timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    if (timer <= 0) {
      clearTimeout(timerRef.current);
    }

    return () => clearTimeout(timerRef.current);
  }, [timer]);

  return <div>{timer}</div>;
};

export default CountdownTimer;
