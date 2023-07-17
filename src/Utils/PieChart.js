import Chart from "react-apexcharts";

const PieChart = ({ series, labels, width }) => {
  const options = {
    chart: {
      type: "pie",
    },
    labels: labels,
    legend: {
      position: "bottom",
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return "L. " + value.toLocaleString();
        },
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={series} type="pie" width={width} />
    </div>
  );
};

export default PieChart;
