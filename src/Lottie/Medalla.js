import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Medalla({ Text }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Lottie/31176-medal-badge.json"),
    });
  }, []);

  return (
    <div
      style={{
        width: "20px",
        height: "20px",
      }}
    >
      <div  ref={container}></div>
    </div>
  );
}
