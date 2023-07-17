import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export const LottieBus: React.FC = () => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (element.current) {
      lottie.loadAnimation({
        container: element.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../asset/Lottie/34600-bus-ticket.json"),
      });
    }
  }, [element]);

  return (
    <div
      style={{
        width: "70px",
        height: "70px",
      }}
    >
      <div className="container" ref={element}></div>
    </div>
  );
};
