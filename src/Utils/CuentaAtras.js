import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import moment from "moment/moment";
import "./CuentaAtras.scss";

export default function CuentaAtras({ initialDate, start }) {
  const [estado, setestado] = useState(false);
  const [estado1, setestado1] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (start === false) {
        setestado(true);
        setestado1(false);
      } else {
        setestado(false);
        setestado1(true);
      }
    }, 1000);
  }, [start]);
  return (
    <div>
      {start ? (
        estado1 === true ? (
          <Countdown
            date={moment(initialDate).format()}
            intervalDelay={0}
            precision={3}
            renderer={renderer}
            autoStart={true}
            // controlled={true}
          ></Countdown>
        ) : null
      ) : estado === true ? (
        <Countdown
          date={moment(initialDate).format()}
          intervalDelay={0}
          precision={3}
          renderer={renderer}
          autoStart={false}
          // controlled={true}
        ></Countdown>
      ) : null}
    </div>
  );
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  //console.log(pause);
  if (completed) {
    // Render a completed state
    //return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span id="reloj">
        {days}:{hours}:{minutes}:{seconds}
      </span>
    );
  }
};
