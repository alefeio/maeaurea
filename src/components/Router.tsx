import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Empresa } from "../pages/Empresa";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { CartaoConsulta } from "../pages/CartaoConsulta";
import { Especialidades } from "../pages/Especialidades";
import { Consulta } from "../pages/Consulta";
import { Contato } from "../pages/Contato";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cartao-consulta" element={<CartaoConsulta />} />
        <Route path="/clinica" element={<Empresa />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/agende-sua-consulta" element={<Consulta />} />
        <Route path="/contato" element={<Contato />} />
      </Route>
    </Routes>
  );
}
