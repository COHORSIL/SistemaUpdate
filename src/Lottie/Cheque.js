import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function Cheque({ Text }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Lottie/Cheque.json"),
    });
  }, []);

  return (
    <div
      style={{
        width: "100px",
        height: "100px",
      }}
    >
      <div className="container" ref={container}></div>
    </div>
  );
}
