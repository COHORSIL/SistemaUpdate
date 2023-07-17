
import Chart from "react-apexcharts";

export default function Graficos({ first }) {
  return (
    <>
      <Chart
        options={first.options}
        series={first.series}
        type="line"
        height={350}
      />
    </>
  );
}
