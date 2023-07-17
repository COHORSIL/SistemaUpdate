import { useState } from "react";
import TexfieldMaskNumeric from "../../Hooks/TexfieldMaskNumeric";
import SelectMes from "../../Hooks/SelectMes";
import SelectYear from "../../Hooks/SelectYear";


import {Box,Grid,Container} from "../../Utils/MaterialUIComponents"
import { BardChartVertical } from "../../Utils/BardChartVertical";
import CardMenu from "../../Utils/CardMenu";

interface OptionFecha {
  label: string;
  value: string;
}

export default function ContabilidadMenu() {
  const [Valueinput, setValueinput] = useState({
    value: "",
    valuetemp: "",
  });
  const [Mes, setMes] = useState<OptionFecha | null>(null);
  const [Years, setYears] = useState<OptionFecha | null>(null);

  return (
    <div>
      {/* <TexfieldMaskNumeric
        Valueinput={Valueinput}
        setValueinput={setValueinput}
        label="Gastado"
      />

      <SelectMes Mes={Mes} setMes={setMes} />

      <SelectYear Years={Years} setYears={setYears}/> */}

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} lg={3}>
              <CardMenu
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
            <CardMenu
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
            <CardMenu
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
            <CardMenu
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>

            <Grid item xs={12} lg={8}>
              <BardChartVertical
                series={[
                  {
                    name: "Este año",
                    data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                  },
                  {
                    name: "Año, pasado",
                    data: [18, 12, 5, 10, 3, 14, 12, 16, 10, 5, 18, 5],
                  },
                ]}
                labels={[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ]}
                height={250}
                sx={{ height: "100%" }}
                Titulo={"Pagos Ejecutados"}
                AcctionBottom={0}
                Recortar={0}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
            <CardMenu
                difference={12}
                positive
                sx={{ height: "100%" }}
                value="$24k"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
