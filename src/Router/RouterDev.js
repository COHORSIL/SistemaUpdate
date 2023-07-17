import { Routes, Route } from "react-router-dom";

//!Success
import ContabilidadMenu from "../Components/Contabilidad/ContabilidadMenu";
//!Estadistica
import EstadisticaP from "../Components/Estadistica/EstadisticaP";
import AcordionDetalles from "../Components/Estadistica/AcordionDetalles";
import ClientePestadis from "../Components/Estadistica/Cliente/ClientePestadis";

export default function RouterDev() {
  return (
    <Routes>
      {/* cliente */}
      <Route path="/ContabilidadMenu" element={<ContabilidadMenu />} />
 {/* Estadisticas */}

 <Route path="/EstadisticaP" element={<EstadisticaP />} />
        <Route path="/AcordionDetalles" element={<AcordionDetalles />} />
        <Route path="/ClientePestadis" element={<ClientePestadis />} />
    </Routes>
  );
}
