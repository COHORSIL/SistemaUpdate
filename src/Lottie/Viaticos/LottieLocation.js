import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieLocation() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../asset/Lottie/89437-location-loading.json"),
    });
  }, []);

  return (
    <div
      style={{
        width: "70px",
        height: "70px",
      }}
    >
      <div className="container" ref={container}></div>
    </div>
  );
}
