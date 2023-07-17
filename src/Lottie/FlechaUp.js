import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function FlechaUp({ Text }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Lottie/81102-blue-arrow-up (1).json"),
    });
  }, []);

  return (
    <div
      style={{
        width: "60px",
        height: "60px",
      }}
    >
      <div className="container" ref={container}></div>
    </div>
  );
}
