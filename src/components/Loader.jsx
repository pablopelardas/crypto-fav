import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-[400px] flex justify-center items-center">
      <ThreeCircles
        outerCircleColor="#bd5b1e"
        middleCircleColor="#fcd34d"
        innerCircleColor="#fde68a"
      />
    </div>
  );
};

export default Loader;
