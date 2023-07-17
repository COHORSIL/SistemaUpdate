import React, { useContext } from "react";
import {Avatar,makeStyles} from "../Utils/MaterialUIComponents"

import "./PerfilUsuario.scss";
import { refreshGlobal } from "../Context/ContextRefresh";
import LottieCorreo from "../Lottie/LottieCorreo";
import LottieUsuario from "../Lottie/LottieUsuario";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    fontSize: "60px",
  },
}));

export default function PerfilUsuario() {
  const classes = useStyles();
  const { userInfo } = useContext(refreshGlobal);

  

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Datos de Empleado</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="conatiner_Perfil">
          <div className="avatar">
            <Avatar
              sizes="25"
              alt="Bryan"
              src={userInfo.foto}
              className={classes.large}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieUsuario /> <h1>{userInfo.usuario}</h1>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LottieCorreo /> <h1>{userInfo.email}</h1>
      </div>
    </>
  );
}
