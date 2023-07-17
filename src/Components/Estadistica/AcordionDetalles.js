/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, forwardRef , useContext} from "react";
import { Estadistica } from "../../Utils/Appis";
import Select from "react-select";
import { Mes5 } from "../../Utils/Appis";
import { useLocation } from "react-router-dom";
import Atras from "../../GoBack/ButtonGoBack";
import { size } from "lodash";



import {AddBox,ArrowUpward,Check,ChevronLeft,ChevronRight,Clear,DeleteOutline,Edit,FilterList,FirstPage,LastPage,Remove,SaveAlt,Search,ViewColumn} from "../../Utils/MaterialUI-Icons"


import { refreshGlobal } from "../../Context/ContextRefresh";
import Format from "../../Utils/Format";
import GraficoDepar from "./GraficoDepar";
import GraficoDeparProveedor from "./GraficoDeparProveedor";
import CargandoLottie from "../../Lottie/cargandoLottie";
import FlechaUp from "../../Lottie/FlechaUp";
import FlechaDonw from "../../Lottie/FlechaDonw";
import AcordionDetalles2 from "./AcordionDetalles2";

export default function AcordionDetalles({ rowData, Mes, Codigo, Producto }) {
  const location = useLocation();
  const { TokenDecode } = useContext(refreshGlobal);
  const mes = new Date();
  const NMes = mes.getMonth();
  const [actividades, setactividades] = useState([]);
  const [Gasto, setGasto] = useState({
    label: "",
    value: "",
  });
  const [data, setData] = useState([]);
  const [placeHolder] = useState({
    label: "Seleccione un Mes",
    value: 1000,
  });
  const [Recargar, setRecargar] = useState(false);
  const [Recargar1, setRecargar1] = useState(false);

  const [first, setfirst] = useState({
    series: [
      {
        name: "2022",
        data: [],
      },
      {
        name: "2021",
        data: [],
      },
      {
        name: "2020",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: ["#D4932E", "#545454", "#77B6EA"],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "L" + Format(val);
          },
        },
      },
    },
  });

  const [first2, setfirst2] = useState({
    series: [
      {
        name: "2020",
        data: [],
      },
      {
        name: "2021",
        data: [],
      },
      {
        name: "2022",
        data: [],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      colors: ["#D4932E", "#545454", "#77B6EA"],
      plotOptions: {
        bar: {
          horizontal: true,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return Number(val);
          },
        },
      },
    },
  });

  const [first3, setfirst3] = useState({
    series: [
      {
        name: "2020",
        data: [],
      },
      {
        name: "2021",
        data: [],
      },
      {
        name: "2022",
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
      },
      colors: ["#77B6EA", "#545454", "#D4932E"],
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return "L" + Format(val);
        },
      },
      stroke: {
        curve: "smooth",
      },
      title: {
        text: "Reporte de ventas por mes",
        align: "left",
      },
      grid: {
        borderColor: "#e7e7e7",
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      markers: {
        size: 1,
      },
      xaxis: {
        categories: [],
        title: {
          text: "Month",
        },
      },
      // yaxis: {
      //   title: {
      //     text: "Temperature",
      //   },
      // },
      legend: {
        position: "top",
        horizontalAlign: "right",
        floating: true,
        offsetY: -25,
        offsetX: -5,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "L" + Format(val);
          },
        },
      },
    },
  });


  useEffect(() => {
    setRecargar(false);

    let colums2 = [];
    let ven2020 = [];
    let ven2021 = [];
    let ven2022 = [];

    if (size(rowData) > 0) {
  
      fetch(`${Estadistica}&id=${Codigo}&mes=${Mes}&producto=${Producto}`, {
        method: "GET", headers: { Authorization: TokenDecode },
      })
        .then((res) => res.json())
        .then((activid) => {
          // console.log(activid);

          setData(activid.Estadistica);

          activid.Mas_Vendido_Ventas.map((item) => {
            colums2.push(item.Nombre);
          });

          activid.Mas_Vendido_Ventas.map((item) => {
            ven2020.push(Number(item.Venta2020));
          });

          activid.Mas_Vendido_Ventas.map((item) => {
            ven2021.push(Number(item.Venta2021));
          });

          activid.Mas_Vendido_Ventas.map((item) => {
            ven2022.push(Number(item.Venta2022));
          });

          setfirst(first, (first.options.xaxis.categories = colums2));
          setfirst(
            first,
            ((first.series[0].data = ven2022),
            (first.series[1].data = ven2021),
            (first.series[2].data = ven2020))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      // console.log("venta");
      fetch(
        `${Estadistica}&id=${location.state.Codigo}&mes=${
          Gasto.value ? Gasto.value : NMes + 1
        }`,
        {
          method: "GET", headers: { Authorization: TokenDecode },
        }
      )
        .then((res) => res.json())
        .then((activid) => {
          setData(activid.Estadistica);

          activid.Mas_Vendido_Ventas.map((item) => {
            colums2.push(item.Nombre);
          });

          activid.Mas_Vendido_Ventas.map((item) => {
            ven2020.push(Number(item.Venta2020));
          });

          activid.Mas_Vendido_Ventas.map((item) => {
            ven2021.push(Number(item.Venta2021));
          });

          activid.Mas_Vendido_Ventas.map((item) => {
            ven2022.push(Number(item.Venta2022));
          });

          setfirst(first, (first.options.xaxis.categories = colums2));
          setfirst(
            first,
            ((first.series[0].data = ven2022),
            (first.series[1].data = ven2021),
            (first.series[2].data = ven2020))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [Recargar, Recargar1]);

  useEffect(() => {
    setRecargar(false);

    let colums2 = [];
    let value2 = [];
    let ven2021 = [];
    let ven2022 = [];

    let Nombre_Mes = [];
    let Vent2020 = [];
    let Vent2021 = [];
    let Vent2022 = [];

    if (size(rowData) > 0) {
      fetch(`${Estadistica}&id=${Codigo}&mes=${Mes}&producto=${Producto}`, {
        method: "GET", headers: { Authorization: TokenDecode },
      })
        .then((res) => res.json())
        .then((activid) => {
          // setData(activid.Estadistica);

          activid.Mas_Vendido_Cantidad.map((item) => {
            colums2.push(item.Nombre);
            value2.push(Number(item.Cantidad2020));
            ven2021.push(Number(item.Cantidad2021));
            ven2022.push(Number(item.Cantidad2022));
          });

          setfirst2(
            first2,
            ((first2.options.xaxis.categories = colums2),
            (first2.series[0].data = value2),
            (first2.series[1].data = ven2021),
            (first2.series[2].data = ven2022))
          );

          activid.Proveedor.map((item) => {
            Nombre_Mes.push(item.Nombre_Mes);
          });

          activid.Proveedor.map((item) => {
            Vent2020.push(Number(item.Venta2020));
          });

          activid.Proveedor.map((item) => {
            Vent2021.push(Number(item.Venta2021));
          });

          activid.Proveedor.map((item) => {
            Vent2022.push(Number(item.Venta2022));
          });

          setfirst3(first3, (first3.options.xaxis.categories = Nombre_Mes));
          setfirst3(
            first3,
            ((first3.series[0].data = Vent2020),
            (first3.series[1].data = Vent2021),
            (first3.series[2].data = Vent2022))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      fetch(
        `${Estadistica}&id=${location.state.Codigo}&mes=${
          Gasto.value ? Gasto.value : NMes + 1
        }`,
        {
          method: "GET", headers: { Authorization: TokenDecode },
        }
      )
        .then((res) => res.json())
        .then((activid) => {
          // setData(activid.Estadistica);

          activid.Mas_Vendido_Cantidad.map((item) => {
            colums2.push(item.Nombre);
            value2.push(Number(item.Cantidad2020));
            ven2021.push(Number(item.Cantidad2021));
            ven2022.push(Number(item.Cantidad2022));
          });

          setfirst2(
            first2,
            ((first2.options.xaxis.categories = colums2),
            (first2.series[0].data = value2),
            (first2.series[1].data = ven2021),
            (first2.series[2].data = ven2022))
          );

          activid.Proveedor.map((item) => {
            Nombre_Mes.push(item.Nombre_Mes);
          });

          activid.Proveedor.map((item) => {
            Vent2020.push(Number(item.Venta2020));
          });

          activid.Proveedor.map((item) => {
            Vent2021.push(Number(item.Venta2021));
          });

          activid.Proveedor.map((item) => {
            Vent2022.push(Number(item.Venta2022));
          });

          setfirst3(first3, (first3.options.xaxis.categories = Nombre_Mes));
          setfirst3(
            first3,
            ((first3.series[0].data = Vent2020),
            (first3.series[1].data = Vent2021),
            (first3.series[2].data = Vent2022))
          );
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [Recargar, Recargar1]);

  useEffect(() => {
    fetch(Mes5, {
      method: "GET", headers: { Authorization: TokenDecode },
    })
      .then((res) => res.json())
      .then((activid) => {
        setactividades(activid);
        // console.log(activid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRecargar1(true);
    }, 300);
  }, []);

  const onChageSelect = (label, value) => {
    setGasto({
      ...Gasto,
      label: label,
      value: value,
    });
    setfirst(first, (first.options.xaxis.categories = ""));
    setfirst(first, (first.series[0].data = ""));

    setfirst2(first2, (first2.options.xaxis.categories = ""));
    setfirst2(first2, (first2.series[0].data = ""));

    setfirst3(first3, (first3.options.xaxis.categories = ""));
    setfirst3(first3, (first3.series[0].data = ""));

    setRecargar(true);
  };

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  return (
    <>
      <Atras />
      <div style={{ marginLeft: "8%" }}>
        <h1> {location.state.Nombre}</h1>{" "}
      </div>

      {size(rowData) > 0 ? null : (
        <>
          <div
            style={{
              width: 300,
              marginRight: "auto",
              marginLeft: "auto",
              marginBottom: 50,
            }}
          >
            <Select
              //   key={`my_unique_select_key__${Gasto.id}`}
              value={Gasto.value ? Gasto : placeHolder}
              options={actividades}
              onChange={(data) => {
                onChageSelect(data.label, data.value);
              }}
            />
          </div>
        </>
      )}

      {size(
        first.options.xaxis.categories &&
          first2.options.xaxis.categories &&
          first3.options.xaxis.categories
      ) > 0 ? (
        <>
          <GraficoDeparProveedor first={first3} />
          <GraficoDepar
            first={first}
            title={"10 Productos mas vendidos en LPS."}
          />
          <GraficoDepar first={first2} title={"10 Unidades mas vendidos"} />.
        </>
      ) : (
        <CargandoLottie />
      )}

      {/* {size(rowData) > 0 ? null : (
        <>
          {size(data) > 0 ? (
            <MaterialTable
              title={false}
              icons={tableIcons}
              columns={[
                {
                  title: "Nombre",
                  field: "Nombre",

                  cellStyle: {
                    fontSize: "12px",
                    fontWeight: "bold",
                  },
                },
                {
                  title: "Cantidad",
                  field: "Cantidad2020",

                  cellStyle: {
                    fontSize: "12px",
                    fontWeight: "bold",
                  },
                  render: (rowData) => (
                    <>
                      <div>
                        <div style={{ display: "flex" }}>
                          <p>2020 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#77B6EA",
                            }}
                          >
                            {Number(rowData.Cantidad2020)}
                          </p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <p>2021 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#545454",
                            }}
                          >
                            {Number(rowData.Cantidad2021)}
                          </p>

                          {Number(rowData.Cantidad2021) >
                          Number(rowData.Cantidad2020) ? (
                            <FlechaUp />
                          ) : (
                            <FlechaDonw />
                          )}
                        </div>

                        <div style={{ display: "flex" }}>
                          <p>2022 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#D4932E",
                            }}
                          >
                            {Number(rowData.Cantidad2022)}
                          </p>

                          {Number(rowData.Cantidad2022) >
                          Number(rowData.Cantidad2021) ? (
                            <FlechaUp />
                          ) : (
                            <FlechaDonw />
                          )}
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  title: "Costo de Ventas",
                  field: "Cantidad2020",

                  cellStyle: {
                    fontSize: "12px",
                    fontWeight: "bold",
                  },
                  render: (rowData) => (
                    <>
                      <div>
                        <div style={{ display: "flex" }}>
                          <p>2020 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#77B6EA",
                            }}
                          >
                            L. {Format(rowData.Costo2020)}
                          </p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <p>2021 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#545454",
                            }}
                          >
                            L. {Format(rowData.Costo2021)}
                          </p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <p>2022 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#D4932E",
                            }}
                          >
                            L. {Format(rowData.Costo2022)}
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  title: "Ventas",
                  field: "Cantidad2020",

                  cellStyle: {
                    fontSize: "12px",
                    fontWeight: "bold",
                  },
                  render: (rowData) => (
                    <>
                      <div>
                        <div style={{ display: "flex" }}>
                          <p>2020 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#77B6EA",
                            }}
                          >
                            L. {Format(rowData.Venta2020)}
                          </p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <p>2021 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#545454",
                            }}
                          >
                            L. {Format(rowData.Venta2021)}
                          </p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <p>2022 </p>

                          <p style={{ marginLeft: 25 }}>|</p>
                          <p
                            style={{
                              marginLeft: 25,
                              fontSize: "13px",
                              fontWeight: "bold",
                              color: "#D4932E",
                            }}
                          >
                            L. {Format(rowData.Venta2022)}
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
                {
                  title: "Inventario",
                  field: "Inventario",
                  headerStyle: {
                    marginLeft: "25px",
                  },

                  cellStyle: {
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginLeft: "12px",
                  },
                  render: (rowData) => (
                    <>
                      <div>
                        <div style={{ display: "flex" }}>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginRight: "5px",
                            }}
                          >
                            Unidades:
                          </p>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#D4592E",
                            }}
                          >
                            {Format(rowData.Inventario)}
                          </p>
                        </div>

                        <div style={{ display: "flex" }}>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              marginRight: "5px",
                            }}
                          >
                            Costo:
                          </p>
                          <p
                            style={{
                              fontSize: "15px",
                              fontWeight: "bold",
                              color: "#D4592E",
                            }}
                          >
                            L. {Format(rowData.Inventario_Lps)}
                          </p>
                        </div>
                      </div>
                    </>
                  ),
                },
              ]}
              data={data}
              options={{
                actionsColumnIndex: -1,
                paging: false,
                search: true,

                exportButton: true,
                headerStyle: {
                  backgroundColor: "#01579b",
                  color: "#FFF",
                  fontSize: 18,
                },
              }}
              localization={{
                header: {
                  actions: "",
                  backgroundColor: "red",
                },
              }}
              detailPanel={(rowData) => (
                <>
                  <h4 style={{ textAlign: "center", fontSize: 18 }}>
                    Movimientos de {rowData.Nombre}
                  </h4>
                  <AcordionDetalles2
                    rowData={rowData}
                    Mes={Gasto.value ? Gasto.value : NMes + 1}
                    Codigo={location.state.Codigo}
                    Producto={rowData.Producto}
                  />
                </>
              )}
            />
          ) : null}
        </>
      )} */}
    </>
  );
}
