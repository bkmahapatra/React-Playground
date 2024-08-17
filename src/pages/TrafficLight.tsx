import React, { useEffect, useState } from "react";

const TrafficLight = () => {
  const lights = {
    red: { color: "red", duration: 10000 },
    yellow: { color: "yellow", duration: 5000 },
    green: { color: "green", duration: 8000 },
  };

  const [lightColor, setLightColor] = useState(lights.red);

  const changeColor = () => {
    switch (lightColor.color) {
      case "red":
        setLightColor(lights.yellow);
        break;
      case "yellow":
        setLightColor(lights.green);
        break;
      case "green":
        setLightColor(lights.red);
        break;
      default:
        setLightColor(lights.red);
    }
  };

  useEffect(() => {
    const intId = setTimeout(() => {
      changeColor();
    }, lightColor.duration);

    return () => clearTimeout(intId);
  }, [lightColor]);

  return (
    <div className="bg-slate-600 p-3 rounded-md w-fit outline outline-1 outline-cyan-500">
      <div
        className={`w-24 h-24 rounded-full m-3 ${
          lightColor.color === "red" ? "bg-red-500" : "bg-stone-900"
        }`}
      ></div>
      <div
        className={`w-24 h-24 rounded-full m-3 ${
          lightColor.color === "yellow" ? "bg-yellow-500" : "bg-stone-900"
        }`}
      ></div>
      <div
        className={`w-24 h-24 rounded-full m-3 ${
          lightColor.color === "green" ? "bg-green-500" : "bg-stone-900"
        }`}
      ></div>
    </div>
  );
};

export default TrafficLight;
