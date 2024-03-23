import Landing from "./Landing/landing";
import Dashboard from "./dashboard/dashboard";
import Limpieza from "./limpieza/limpieza";
import Empaque from "./empaque/empaque";
import Materiaprima from "./materiaPrima/materiaprima";
import Productoterminado from "./productoterminado/productoterminado";
import Login from "./Login/login";
import NavBar from "./navBar/navBar";
import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes";

function App() {
  const storedUserData = JSON.parse(localStorage.getItem("userData")) || null;
  const locationNow = useLocation();
  return (
    <div>
      {locationNow.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route element={<ProtectedRoutes user={storedUserData} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/materiaprima" element={<Materiaprima />} />
          <Route path="/limpieza" element={<Limpieza />} />
          <Route path="/empaques" element={<Empaque />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productoterminado" element={<Productoterminado />} />
          <Route path="*" element={<Landing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
