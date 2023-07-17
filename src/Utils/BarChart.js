import Chart from "react-apexcharts";

const BarChart = ({ series, labels, width }) => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      toolbar: {
        show: false, // Oculta la barra de herramientas
      },
      background: "transparent",
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    xaxis: {
      categories: labels,
      labels: {
        show: false, // Ocultar las etiquetas del eje X
      },
    },
    yaxis: {
      show: true, // Ocultar el eje y
    },
    dataLabels: {
        enabled: false
      },
    tooltip: {
      enabled: false, // Ocultar el tooltip
    },
  };

  return (
    <div>
      <Chart
        options={options}
        series={[{ data: series }]}
        type="bar"
        height={width}
      />
    </div>
  );
};

export default BarChart;
