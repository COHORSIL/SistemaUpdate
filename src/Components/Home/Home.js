/* eslint-disable jsx-a11y/alt-text */
import Fade from "react-reveal/Fade";
import logo from "../../asset/Logo 2 sin Fondo.png";
import { useEffect } from "react";
import "./Home.scss";

export default function Home() {

  return (
    <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    background: "transparent", // Establece el fondo del contenedor como transparente
  }}
>
  <Fade top>
    <img src={logo} style={{ background: "transparent" }}></img> {/* Establece el fondo de la imagen como transparente */}
  </Fade>
</div>
  );
}
