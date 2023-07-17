/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";

//*Material
import { Divider, Typography, IconButton , Button} from "../../../Utils/MaterialUIComponents";
import {VisibilityIcon,FilterHdrIcon,PeopleIcon, FastfoodIcon, SearchIcon} from "../../../Utils/MaterialUI-Icons"
import { size } from "lodash";
import { TOPCLIENTES } from "../../../Utils/Appis";
import { refreshGlobal } from "../../../Context/ContextRefresh";
import { ToastContainer, toast } from "react-toastify";
import Format from "../../../Utils/Format";
import DialogEstas from "./DialogEstas";
import Fade from "react-reveal/Fade";
import LottieLoading from "../../../Lottie/LottieLoading";
import Excelexport from "../../../Utils/Excelexport";
import DialogViewCliente from "./DialogViewCliente";
import moment from "moment";
import Medalla from "../../../Lottie/Medalla";
import { BardChartVertical } from "../../../Utils/BardChartVertical";
import SelectMes from "../../../Hooks/SelectMes";
import SelectYear from "../../../Hooks/SelectYear";


export default function ClientePestadis() {
  const { TokenDecode } = useContext(refreshGlobal);
  const [Mes, setMes] = useState(null);
  const [Years, setYears] = useState([]);
  const [Clientes, setClientes] = useState([]);
  const [Dialog, setDialog] = useState(false);
  const [Dialog2, setDialog2] = useState(false);
  const [SelectData, setSelectData] = useState([]);
  const [Apiurl, setApiurl] = useState("");
  const [Text, setText] = useState("Cargando...");
  const [Title, setTitle] = useState("");
  const [IDcliente, setIDcliente] = useState([]);
  const [NombreC, setNombreC] = useState("");
  const [DataGrapersona, setDataGrapersona] = useState([]);

  useEffect(() => {
    setText("Cargando...");
    if (size(Mes) > 0 && size(Years) > 0) {
      let url = `${TOPCLIENTES}?anio=${Years.value}&mes=${Mes.value}`;
      setTitle("TOP 50 CLIENTES");

      if (Apiurl === "REGIONESTADISTICA") {
        url = `${TOPCLIENTES}/getbyRegion?anio=${Years.value}&mes=${Mes.value}&region=${SelectData.value}`;
        setTitle("POR REGION");
      }

      if (Apiurl === "PROVSTADISTICA") {
        url = `${TOPCLIENTES}/getbyProveedor?anio=${Years.value}&mes=${Mes.value}&proveedor=${SelectData.value}`;
        setTitle("POR PROVEEDOR");
      }

      if (Apiurl === "LINEASTADISTICA") {
        url = `${TOPCLIENTES}/getbyLinea?anio=${Years.value}&mes=${Mes.value}&linea=${SelectData.value}`;
        setTitle("POR LINEA");
      }

      fetch(url, {
        method: "GET",
        headers: { Authorization: TokenDecode },
      })
        .then((res) => res.json())
        .then((activid) => {
          if (activid.status === 2) {
            toast.error(activid.descripcion, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return;
          }

          if (activid.status === 3) {
            toast.error(
              `Se vencio el token, Se redirigirá al Login, Inicie Sesion`,
              {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
          }

          setClientes(activid);
          setDataGrapersona(activid.slice(0, 10));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Mes y year error");
    }
    setTimeout(() => {
      setText("No se encontraron resultados...");
    }, 3000);
  }, [TokenDecode, Mes, Years, SelectData]);

  const OpenDialog = (api) => {
    setApiurl(api);
    setDialog(true);
  };

  const OpenDialog2 = (item) => {
    setIDcliente(item.Codigo);
    setNombreC(item.Nombre);
    setDialog2(true);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredClientes = Clientes.filter((item) =>
    item.Nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {Dialog && size(Apiurl) > 0 ? (
        <DialogEstas
          Dialogopen={Dialog}
          setDialog={setDialog}
          setSelectData={setSelectData}
          SelectData={SelectData}
          Apiurl={Apiurl}
        ></DialogEstas>
      ) : null}

      {Dialog2 && size(IDcliente) > 0 ? (
        <DialogViewCliente
          Dialogopen={Dialog2}
          setDialog={setDialog2}
          IDcliente={IDcliente}
          NombreC={NombreC}
        ></DialogViewCliente>
      ) : null}

      <Typography
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        {size(SelectData.label) > 0 ? SelectData.label : Title}
      </Typography>

      <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
        <SelectMes Mes={Mes} setMes={setMes} />

        <SelectYear Years={Years} setYears={setYears} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<FilterHdrIcon />}
          style={{ margin: 10 }}
          onClick={() => OpenDialog("REGIONESTADISTICA")}
        >
          Por Region
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<PeopleIcon />}
          style={{ margin: 10 }}
          onClick={() => OpenDialog("PROVSTADISTICA")}
        >
          Por Proveedor
        </Button>

        <Button
          variant="contained"
          color="primary"
          startIcon={<FastfoodIcon />}
          style={{ margin: 10 }}
          onClick={() => OpenDialog("LINEASTADISTICA")}
        >
          Por Linea
        </Button>

        {size(Clientes) > 0 ? (
          <div style={{ marginLeft: 15, marginTop: 10 }}>
            <Excelexport
              fileName={Title + "-" + moment().format("LL")}
              Data={Clientes}
            />
          </div>
        ) : null}
      </div>

      {size(DataGrapersona) > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div style={{ width: "90%", marginBottom: 15 }}>
            <BardChartVertical
             series={[
              {
                name: "Comprado",
                data: DataGrapersona.map((item) => item.Total),
              },
            ]}
              labels={DataGrapersona.map((item) => item.Nombre)}
              height={250}
              sx={{ height: "100%" }}
              Titulo={0}
              AcctionBottom={0}
              Recortar={1}
            />
          </div>
        </div>
      ) : null}

      {size(Clientes) > 0 ? (
        <div>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "1px solid rgb(0, 143, 251)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                paddingLeft: 10,
                backgroundColor: "white",
                width: 300,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: 10,
                }}
              >
                <SearchIcon style={{ color: "black" }} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Buscar…"
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  color: "black",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 10,
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", width: 850 }}>
              <div style={{ width: 200, fontWeight: "bold", fontSize: 17 }}>
                Codigo
              </div>
              <div style={{ width: 350, fontWeight: "bold", fontSize: 17 }}>
                Nombre
              </div>
              <div style={{ width: 200, fontWeight: "bold", fontSize: 17 }}>
                Total
              </div>
            </div>
          </div>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              alignContent: "center",
            }}
          >
            <div style={{ width: 900, borderWidth: 1 }}>
              {filteredClientes.map((item, index) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 10,
                  }}
                  key={index}
                >
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Fade left delay={index * 100} key={index}>
                      <div style={{ marginRight: 15, fontWeight: "bold" }}>
                        <div
                          style={{
                            position: "absolute",
                            left: -30,
                            bottom: 20,
                          }}
                        >
                          {index < 10 ? <Medalla /> : null}
                        </div>
                        {index + 1}
                      </div>
                      <div style={{ width: 200 }}>{item.Codigo}</div>
                      <div
                        style={{
                          width: 350,
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                        }}
                      >
                        {item.Nombre}
                      </div>
                      <div style={{ width: 200 }}>L. {Format(item.Total)}</div>
                      <div style={{ width: 100, marginTop: -10 }}>
                        <IconButton
                          aria-label="delete"
                          onClick={() => OpenDialog2(item)}
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </div>
                    </Fade>
                  </div>
                  <Divider></Divider>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: "center", fontWeight: "bold" }}>{Text}</div>
          <LottieLoading></LottieLoading>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </>
  );
}
