import Login from "./Login/login";
import Dashboard from "./dashboard/dashboard";
import NavBar from "./navBar/navBar";
import { Route, Routes, useLocation } from "react-router-dom";
function App() {
  const locationNow = useLocation();
  return (
    <div>
      {locationNow.pathname !== "/" && <NavBar />}
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
