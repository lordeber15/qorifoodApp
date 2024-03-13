import Landing from "./Landing/landing";
import Dashboard from "./dashboard/dashboard";
import Limpieza from "./limpieza/limpieza";
import Empaque from "./empaque/empaque";
import Materiaprima from "./materiaPrima/materiaprima";
import Productoterminado from "./productoterminado/productoterminado";
import Login from "./login/login";
import NavBar from "./navBar/navBar";
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  const locationNow = useLocation();
  return (
    <div>
      {locationNow.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/materiaprima" element={<Materiaprima />}></Route>
        <Route path="/limpieza" element={<Limpieza />}></Route>
        <Route path="/empaques" element={<Empaque />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/productoterminado"
          element={<Productoterminado />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
