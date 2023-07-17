import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const LottieAero: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../asset/Lottie/34514-flight.json"),
      });
    }
  }, [element]);

  return (
    <div
      style={{
        width: "70px",
        height: "70px",
      }}
    >
      <div className="container" ref={element}></div>
    </div>
  );
};
