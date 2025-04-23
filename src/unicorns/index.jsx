import { Routes, Route } from "react-router-dom";
import { UnicornProvider } from "../context/UnicornContext";
import UnicornsView from "./UnicornsView";
import UnicornForm from "./UnicornForm";

const UnicornRoutes = () => {
  return (
    <UnicornProvider>
      <Routes>
        <Route path="/" element={<UnicornsView />} />
        <Route path="/crear" element={<UnicornForm />} />
        <Route path="/editar/:id" element={<UnicornForm />} />
      </Routes>
    </UnicornProvider>
  );
};

export default UnicornRoutes;
