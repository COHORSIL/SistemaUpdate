import { useState } from "react";
import {Button,Grid,TextField,makeStyles,CircularProgress} from "../../Utils/MaterialUIComponents";
import {Send,LockIcon,IconButton,Visibility,VisibilityOff,AccountCircle,} from "../../Utils/MaterialUI-Icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Slide from "react-reveal/Slide";

//APIS
import { LOGIN } from "../../Utils/Appis";

//imagenes
import imagen from "../../asset/FondoLogin.jpg";
import ff from "../../asset/Logo 2 sin Fondo.png";

//sass
import "./Login.scss";

import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Login({ setuserInfo, setTokenDecode }) {
  //state
  const [values, setValues] = useState({
    showPassword: false,
    password: "",
    usuario: "",
  });

  const navigate = useNavigate();

  const [loading, setloading] = useState(false);

  //estilo de botton
  const classes = useStyles();

  //Capturar Valores de inputs
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // ocultar o mostrar contra
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const mensaje1 = () => {
    toast.error("Usuario Incorrecto!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const mensaje2 = () => {
    toast.success("Inicio de sesion Correcctamente!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const submiPost = (e) => {
    setloading(true);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },

      body: JSON.stringify({
        username: values.usuario,
        clave: values.password,
      }),
    };
    var url = LOGIN;
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson: ", responseJson);

        if (responseJson.status === 1) {
          setuserInfo(responseJson);
          // setTokenDecode(`Bearer ${responseJson.token}`);
          setTokenDecode(`Bearer ${responseJson.token}`);
          localStorage.setItem("Token", JSON.stringify(responseJson));

          setloading(false);
          navigate("*");
          mensaje2();
        }

        if (responseJson.status === 2) {
          console.log(responseJson.descripcion);
          setloading(false);
          mensaje1();
        }
      })
      .catch((error) => {
        console.error(error);
        setloading(false);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submiPost();
    }
  };

  return (
    <div className="Login" style={{ backgroundImage: `url(${imagen})` }}>
      <div className="Login__dark" />
      <div className="Login__box">
        <Slide top>
          <div className="Login__box__logo">
            <img src={ff} alt="musifyt" />
          </div>
        </Slide>
        <div className="Login__box__formulario">
          <div className="Login__box__formulario__inputs">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Usuario"
                  name="nombre"
                  value={values.usuario}
                  onChange={handleChange("usuario")}
                />
              </Grid>
            </Grid>
          </div>

          <div className="Login__box__formulario__inputs">
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <LockIcon />
              </Grid>
              <Grid item>
                <TextField
                  id="input-with-icon-grid"
                  label="Contraseña"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  onKeyDown={handleKeyDown}
                />
              </Grid>
              <Grid>
                <IconButton
                  aria-label="Contraseña"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="Login__box__bottom">
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={
              loading ? (
                <CircularProgress disableShrink size={20} color="inherit" />
              ) : (
                <Send />
              )
            }
            onClick={submiPost}
          >
            Ingresar
          </Button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
}
