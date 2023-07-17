import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const LottieLoadingV: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../asset/Lottie/98194-loading.json"),
      });
    }
  }, [element]);

  return (
    <div
      style={{
        width: "90px",
        height: "90px",
      }}
    >
      <div className="container" ref={element}></div>
    </div>
  );
};
