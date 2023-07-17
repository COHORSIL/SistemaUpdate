import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieArrowUp() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Lottie/81102-blue-arrow-up.json"),
    });
  }, []);

  return (
    <div style={{ width: "50px", height: " 50px" }}>
      <div className="container" ref={container}></div>
    </div>
  );
}
