import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const LottieEditando: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../asset/Lottie/71894-drawing-pencil-edit.json"),
      });
    }
  }, [element]);

  return (
    <div
      style={{
        width: "25px",
        height: "25px",
      }}
    >
      <div className="container" ref={element}></div>
    </div>
  );
};
