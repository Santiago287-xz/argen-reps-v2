import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Bienvenida from "./pages/Bienvenida";
import CrearCuenta from "./pages/crear-cuenta";
import CssBuyVsPandaBuy from "./pages/cssbuy-vs-pandabuy";
import ExpertBuy from "./pages/expert-buy";
import Paso1 from "./pages/paso-1";
import Paso2 from "./pages/paso-2";
import Pregunta from "./pages/pregunta";
import Productos from "./pages/Productos";
import QueEsCssBuy from "./pages/que-es-cssbuy";
import QueNecesito from "./pages/que-necesito";
import TipsAduana from "./pages/tips-aduana";
import Tracking from "./pages/tracking";

export default function App() {
  return (
    <RootLayout>
      <Routes>
        <Route path="/" element={<Bienvenida />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/cssbuy-vs-pandabuy" element={<CssBuyVsPandaBuy />} />
        <Route path="/expert-buy" element={<ExpertBuy />} />
        <Route path="/paso-1" element={<Paso1 />} />
        <Route path="/paso-2" element={<Paso2 />} />
        <Route path="/preguntas" element={<Pregunta />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/que-es-cssbuy" element={<QueEsCssBuy />} />
        <Route path="/que-necesito" element={<QueNecesito />} />
        <Route path="/tips-aduana" element={<TipsAduana />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </RootLayout>
  );
}
