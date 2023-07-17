import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function FlechaDonw({ Text }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Lottie/lf20_ipt62io6.json"),
    });
  }, []);

  return (
    <div
      style={{
        width: "40px",
        height: "40px",
      }}
    >
      <div className="container" ref={container}></div>
    </div>
  );
}
