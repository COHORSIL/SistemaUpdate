
import Chart from "react-apexcharts";

const AreaChart = ({ series, labels, width }) => {

  const options = {
    chart: {
      type: "area",
      height: 350,
      toolbar: {
        show: false, // Ocultar la barra de herramientas
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: labels,
      labels: {
        show: true,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    colors: ['#65CC55'], // Color de área
  };

  return (
    <div>
      <Chart options={options} series={[{ data: series }]} type="area" height={width} />
    </div>
  );
};

export default AreaChart;