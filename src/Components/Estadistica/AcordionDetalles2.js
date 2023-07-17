/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect, useState, useContext } from "react";
import { Estadistica } from "../../Utils/Appis";

import { refreshGlobal } from "../../Context/ContextRefresh";
import { size } from "lodash";
import Format from "../../Utils/Format";
import GraficoDepar from "./GraficoDepar";
import GraficoDeparProveedor from "./GraficoDeparProveedor";
import CargandoLottie from "../../Lottie/cargandoLottie";


export default function AcordionDetalles2({ rowData, Mes, Codigo, Producto }) {
  const { TokenDecode } = useContext(refreshGlobal);
  const [actividades, setactividades] = useState([]);
  const [data, setData] = useState([]);
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

  // console.log(first3);

  useEffect(() => {
    let colums2 = [];
    let ven2020 = [];
    let ven2021 = [];
    let ven2022 = [];

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
  }, [Recargar, Recargar1]);

  useEffect(() => {
    let colums2 = [];
    let value2 = [];
    let ven2021 = [];
    let ven2022 = [];

    let Nombre_Mes = [];
    let Vent2020 = [];
    let Vent2021 = [];
    let Vent2022 = [];

    fetch(`${Estadistica}&id=${Codigo}&mes=${Mes}&producto=${Producto}`, {
      method: "GET",headers: { Authorization: TokenDecode },
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
  }, [Recargar, Recargar1]);

  useEffect(() => {
    fetch(Mes, {
      method: "GET",headers: { Authorization: TokenDecode },
    })
      .then((res) => res.json())
      .then((activid) => {
        setactividades(activid);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRecargar1(true);
    }, 1000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setRecargar(true);
    }, 3000);
  }, []);

  return (
    <>
      {size(
        first.options.xaxis.categories &&
          first2.options.xaxis.categories &&
          first3.options.xaxis.categories
      ) > 0 ? (
        <>
          <GraficoDeparProveedor first={first3} />
          <GraficoDepar
            first={first}
            title={"Productos mas vendidos por centro"}
          />
          <GraficoDepar
            first={first2}
            title={"Unidades mas vendidos por centro"}
          />
          .
        </>
      ) : (
        <CargandoLottie />
      )}
    </>
  );
}
