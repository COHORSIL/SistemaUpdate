/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import ReactApexChart from "react-apexcharts";
import { size } from "lodash";
import { Card,CardHeader,Box} from "../../Utils/MaterialUIComponents";

export default function GraficoDeparProveedor({ first, title }) {

  return (
    <Card>
      <CardHeader title={title} />
      <Box sx={{ mx: 3 }} dir="ltr">
        {size(first.options.xaxis.categories && first.series[0].data) > 0 ? (
          <ReactApexChart
            type="line"
            series={first.series}
            options={first.options}
            height={450}
          />
        ) : null}
      </Box>
    </Card>
  );
}
