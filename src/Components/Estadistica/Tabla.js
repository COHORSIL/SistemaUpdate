/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, useEffect, useContext } from "react";
import { Card,TextField,Button, Grid ,Typography,CardActionArea,CardContent} from "../../Utils/MaterialUIComponents";
import {DonutLargeIcon, SearchIcon} from "../../Utils/MaterialUI-Icons"

import { refreshGlobal } from "../../Context/ContextRefresh";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
import "moment/locale/es";
import "./TablaInve.scss";
import { useNavigate } from "react-router-dom";
import { proveedores_Internacionales } from "../../Utils/Appis";



import "./Principal.scss";
import Fade from 'react-reveal/Fade';
import { size } from "lodash";

moment.locale("es");
export default function TablaProduc() {
  const [data, setData] = useState([]);
  const { TokenDecode } = useContext(refreshGlobal);
  //Estado de Filtros {
  const [filtro, setFiltro] = useState([]);
  const [busqueda, setBusquedad] = useState("");
  // }

  const navigate = useNavigate();
  //Combo box

  const seleccionarProduc = (Prove) => {
    navigate("/AcordionDetalles/", { state: Prove });
  };

  useEffect(() => {
    fetch(`${proveedores_Internacionales}&id=2&centro=02014`, {
      method: "GET",
      headers: { Authorization: TokenDecode },
    })
      .then((res) => res.json())
      .then((activid) => {
        setData(activid.Proveedores);
        setFiltro(activid.Proveedores);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Filtro {
  const handlebuscar = (e) => {
    setBusquedad(e.target.value);
    filtrar(e.target.value);
  };
  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = filtro.filter((elemento) => {
      if (
        elemento.Nombre.toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setData(resultadosBusqueda);
  };
  // }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={7} style={{ paddingLeft: 100 }}>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 20 }}>
              <SearchIcon />
            </div>

            <div>
              <TextField
                id="input-with-icon-grid"
                label="Buscar Proveedor"
                value={busqueda}
                onChange={handlebuscar}
                style={{ width: 300 }}
              />
            </div>
          </div>
        </Grid>
      </Grid>
{size(data) > 0 ? 
      <Grid container spacing={8}>
        {data.map((item, index) => (
          <Grid item md={4} key={item.Codigo}>
           <Fade left delay={index * 200} key={item.Codigo}>
            <Card
              className="principal__ProductList"
              onClick={() => seleccionarProduc(item)}
            >
              <CardActionArea>
              <div style={{ position: "relative", height: 180, width: "100%" }}>
            {item.Foto !== null ? (
              <img
                src={item.Foto}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  maxHeight: "100%",
                  maxWidth: "100%",
                }}
                alt="profile-image"
              />
            ) : null}
          </div>
                <CardContent
                  style={{ backgroundColor: "#3A5F9B", height: 100 }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h4"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  ></Typography>

                  <Typography
                    gutterBottom
                    variant="h8"
                    component="h2"
                    style={{ color: "white", fontWeight: "bold" }}
                  >
                    {item.Nombre}
                  </Typography>

                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    style={{ color: "white" }}
                  >
                    Cantidad de Productos: {item.Cantidad_Productos}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            </Fade>
          </Grid>
        ))}
      </Grid> : null }

      <ToastContainer />
    </>
  );
}

function Data20({ rowData, navigate }) {
  const seleccionarProduc = () => {
    navigate("/DetalleMovimiento", { state: `${JSON.stringify(rowData)}` });
  };

  return (
    <>
      <Button
        onClick={seleccionarProduc}
        variant="contained"
        color="secondary"
        startIcon={<DonutLargeIcon />}
        style={{ marginLeft: 50 }}
      >
        Movimientos
      </Button>
    </>
  );
}
