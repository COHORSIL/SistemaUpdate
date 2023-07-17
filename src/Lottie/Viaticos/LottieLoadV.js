import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieLoadV() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../asset/Lottie/98432-loading (1).json"),
    });
  }, []);

  return (
    <div
      style={{
        width: "135px",
        height: "135px",
      }}
    >
      <div className="container" ref={container}></div>
    </div>
  );
}
