import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const LottieSinImagen: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../asset/Lottie/107376-add-image.json"),
      });
    }
  }, [element]);

  return (
    <div
      style={{
        width: "170px",
        height: "170px",
        marginLeft: "35px",
      }}
    >
      <div className="container" ref={element}></div>
    </div>
  );
};
