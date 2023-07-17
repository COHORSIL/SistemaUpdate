import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  SvgIcon,
  alpha,
  useTheme,
} from "../Utils/MaterialUIComponents";
import Chart from "react-apexcharts";
import { useEffect, useState } from "react";

export const BardChartVertical = (props) => {
  const theme = useTheme();
  const { series, labels, height, sx, Titulo, AcctionBottom, Recortar } = props;
  const [LabelsD, setLabelsD] = useState([]);

  useEffect(() => {
    if (Recortar === 1) {
      const modifiedData = labels.map((word) => {
        const trimmedWord = word.trim();
        const firstLetter = trimmedWord[0].toUpperCase() + ".";
        const remainingText = trimmedWord
          .substring(trimmedWord.indexOf(" ") + 1)
          .trim();
        const limitedText = remainingText.substring(0, 5);
        return firstLetter + limitedText;
      });
      setLabelsD(modifiedData);
    } else {
      setLabelsD(labels);
    }
  }, [labels, Recortar]);

  if (!LabelsD) return <></>;

  const useChartOptions = {
    chart: {
      background: "transparent",
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [
      theme.palette.primary.main
    ],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: "solid",
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "40px",
      },
    },
    stroke: {
      colors: ["transparent"],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: LabelsD,
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          if (value >= 1000000) {
            return value / 1000000 + "M";
          } else if (value >= 1000) {
            return value / 1000 + "K";
          }
          return value;
        },
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    tooltip: {
      theme: "dark",
      y: {
        formatter: function (value) {
          return "L. " + value.toLocaleString();
        },
      },
    },
  };

  return (
    <Card
      sx={sx}
      style={{
        borderRadius: "20px", // Bordes redondeados de la tarjeta
        padding: "16px", // Espaciado interno de la tarjeta
        boxShadow: "0 0 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {Titulo === 0 ? null : (
        <CardHeader
          action={
            <Button
              color="inherit"
              size="small"
              startIcon={<SvgIcon fontSize="small"></SvgIcon>}
            >
              Sync
            </Button>
          }
          title={Titulo}
        />
      )}
      <CardContent>
        <Chart
          height={height}
          options={useChartOptions}
          series={series}
          type="bar"
          width="100%"
        />
      </CardContent>
      <Divider />
      {AcctionBottom === 0 ? null : (
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button
            color="inherit"
            endIcon={<SvgIcon fontSize="small"></SvgIcon>}
            size="small"
          >
            Overview
          </Button>
        </CardActions>
      )}
    </Card>
  );
};
