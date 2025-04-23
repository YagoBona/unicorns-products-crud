import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { UnicornProvider } from "./context/UnicornContext";
import UnicornRoutes from "./unicorns";      // rutas del módulo unicornios
import ProductRoutes from "./products";      // rutas del módulo productos

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redireccion por defecto */}
        <Route path="/" element={<Navigate to="/unicornios" />} />

        {/* Rutas del módulo de unicornios, envueltas en el UnicornProvider */}
        <Route
          path="/unicornios/*"
          element={
            <UnicornProvider>
              <UnicornRoutes />
            </UnicornProvider>
          }
        />

        {/* Rutas del módulo de productos (sin contexto) */}
        <Route path="/productos/*" element={<ProductRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
