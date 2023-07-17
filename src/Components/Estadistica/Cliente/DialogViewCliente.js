/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { Dialog,DialogContent,DialogContentText,DialogTitle} from "../../../Utils/MaterialUIComponents";

import { refreshGlobal } from "../../../Context/ContextRefresh";
import { TOPCLIENTES } from "../../../Utils/Appis";
import { size } from "lodash";
import Format from "../../../Utils/Format";
import Backdroop from "../../../Utils/Backdroop";

//*Graphit
import PieChart from "../../../Utils/PieChart";
import BarChart from "../../../Utils/BarChart";
import AreaChart from "../../../Utils/AreaChart";

//*Select fechas
import SelectYear from "../../../Hooks/SelectYear";
import SelectMes from "../../../Hooks/SelectMes";

export default function DialogViewCliente({
  Dialogopen,
  setDialog,
  IDcliente,
  NombreC,
}) {
  const [Mes, setMes] = useState(null);
  const [Years, setYears] = useState(null);

  const { TokenDecode } = useContext(refreshGlobal);
  const [DataCliente, setDataCliente] = useState([]);
  const [chartData, setchartData] = useState([]);
  const [Drop, setDrop] = useState(false);

  useEffect(() => {
    if (size(Mes) > 0 && size(Years) > 0) {
      setDrop(true);
      fetch(
        `${TOPCLIENTES}?anio=${Years.value}&mes=${Mes.value}&id=${IDcliente}`,
        {
          method: "GET",
          headers: { Authorization: TokenDecode },
        }
      )
        .then((res) => res.json())
        .then((activid) => {
          console.log("activid: ", activid);
          setDataCliente(activid);
          setchartData(activid.Linea.slice(0, 5));
          setDrop(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [TokenDecode, IDcliente, Mes, Years]);

  return (
    <div>
      <Dialog
        open={Dialogopen}
        onClose={() => setDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            maxWidth: "90%", // Ajusta el valor según tus necesidades
          },
        }}
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{
            backgroundColor: "#E4F1F9",
            textAlign: "center",
            fontWeight: "bold",
            color: "black",
            fontSize: 20,
          }}
        >
          {`Detalles de ${" "} ${NombreC} `}
        </DialogTitle>
        <DialogContent>
          <Backdroop Drop={Drop} setDrop={setDrop}></Backdroop>

          <DialogContentText id="alert-dialog-description">
            {/* {size(DataCliente) > 0 ? ( */}
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: 10,
                }}
              >
                <SelectMes Mes={Mes} setMes={setMes} />

                <SelectYear Years={Years} setYears={setYears} />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  borderRadius: 5,
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  style={{
                    width: 300,
                    backgroundColor: "#F6F6F6",
                    // padding: 10,
                    marginRight: 10,
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      padding: 10,
                      backgroundColor: "#E4F1F9",
                      color: "black",
                    }}
                  >
                    AÑO
                  </div>

                  {size(DataCliente.Anio) > 0 ? (
                    <>
                      <div style={{ marginTop: 15 }}>
                        <PieChart
                          series={DataCliente.Anio.map((item) => item.Total)}
                          labels={DataCliente.Anio.map((item) => item.Anio)}
                          width={300}
                        ></PieChart>
                      </div>

                      <div style={{ padding: 10, marginTop: 32 }}>
                        {DataCliente.Anio.map((item) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: 5,
                            }}
                          >
                            <div style={{ color: "black" }}>{item.Anio}</div>
                            <div
                              style={{ color: "#3282B8", fontWeight: "bold" }}
                            >
                              L. {Format(item.Total)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>

                <div
                  style={{
                    width: 350,
                    backgroundColor: "#F6F6F6",
                    // padding: 10,
                    marginRight: 10,
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      padding: 10,
                      backgroundColor: "#E4F1F9",
                      color: "black",
                    }}
                  >
                    LINEA
                  </div>

                  {size(DataCliente.Linea) > 0 ? (
                    <>
                      <BarChart
                        series={chartData.map((item) => item.Total)}
                        labels={chartData.map((item) => item.Nombre_Linea)}
                        width={250}
                      ></BarChart>

                      <div style={{ padding: 10 }}>
                        {DataCliente.Linea.map((item) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: 5,
                            }}
                          >
                            <div style={{ color: "black" }}>
                              {item.Nombre_Linea}
                            </div>
                            <div
                              style={{ color: "#1C6E8C", fontWeight: "bold" }}
                            >
                              L. {Format(item.Total)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>

                <div
                  style={{
                    width: 450,
                    backgroundColor: "#F6F6F6",
                    // padding: 10,
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      padding: 10,
                      backgroundColor: "#E4F1F9",
                      color: "black",
                    }}
                  >
                    PROVEEDOR
                  </div>

                  {size(DataCliente.Proveedor) > 0 ? (
                    <>
                      <AreaChart
                        series={DataCliente.Proveedor.map((item) => item.Total)}
                        labels={DataCliente.Proveedor.map((item) =>
                          item.Nombre_Proveedor.slice(0, 3)
                        )}
                        width={250}
                      ></AreaChart>

                      <div style={{ padding: 10 }}>
                        {DataCliente.Proveedor.map((item) => (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: 5,
                            }}
                          >
                            <div style={{ color: "black" }}>
                              {item.Nombre_Proveedor}
                            </div>
                            <div
                              style={{ color: "#0E5066", fontWeight: "bold" }}
                            >
                              L. {Format(item.Total)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </>
            {/* ) : (
              <div>
                <LottieLoading></LottieLoading>
              </div>
            )} */}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
