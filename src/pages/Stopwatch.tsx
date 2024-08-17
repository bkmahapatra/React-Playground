import React, { useEffect, useState } from "react";
import {
  IoNavigateCircleOutline,
  IoPauseCircleOutline,
  IoPlayCircleOutline,
  IoStopCircleOutline,
} from "react-icons/io5";

const Stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [markPts, setMarkPts] = useState<number[]>([]);

  useEffect(() => {
    let timerId: number;

    if (isRunning) {
      timerId = setInterval(() => {
        setTimer((prev) => prev + 10);
      }, 10);
    }

    return () => clearTimeout(timerId);
  }, [isRunning]);

  const formatedTime = (time: number) => {
    const mili = Math.floor((time % 1000) / 10);
    const sec = Math.floor((time % (60 * 1000)) / 1000);
    const min = Math.round((time % (60 * 60 * 1000)) / 60000);
    const hr = Math.round(time / (60 * 60 * 1000));

    return `${hr.toString().padStart(2, "0")} :
        ${min.toString().padStart(2, "0")} :
        ${sec.toString().padStart(2, "0")} :
        ${mili.toString().padStart(2, "0")}`;
  };

  const toggleStart = () => {
    setIsRunning((prev) => !prev);
  };
  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
    setMarkPts([]);
  };
  const hadlePin = () => {
    setMarkPts((prev) => [...prev, timer]);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="bg-sky-600 rounded-md p-3">
        <div className="font-bold text-white text-5xl">
          {formatedTime(timer)}
        </div>
      </div>
      <div>
        <button onClick={toggleStart}>
          {isRunning ? (
            <IoPauseCircleOutline className="text-white text-5xl" />
          ) : (
            <IoPlayCircleOutline className="text-white text-5xl" />
          )}
        </button>
        <button onClick={handleReset}>
          <IoStopCircleOutline className="text-white text-5xl" />
        </button>
        <button onClick={hadlePin} disabled={timer === 0}>
          <IoNavigateCircleOutline className="text-white text-5xl" />
        </button>
      </div>
      <div>
        {markPts.map((item, index) => {
          return <p key={index}>{formatedTime(item)}</p>;
        })}
      </div>
    </div>
  );
};

export default Stopwatch;
