import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieCloack({ Text }) {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../asset/Lottie/7316-clock.json"),
    });
  }, []);

  return (
    <div style={{ width: "150px", height: " 150px" }}>
      <div className="container" ref={container}></div>
    </div>
  );
}
