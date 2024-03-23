import style from "./navBar.module.css";
import {
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, HamburgerIcon, SmallAddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [userData, setUserData] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    if (userData && userData.cargo === "Administrador") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [userData]);

  const handleLogout = () => {
    localStorage.removeItem("userData");
  };
  return (
    <div className={style.contenedor}>
      <div className={style.icon}>
        <Link to="/dashboard">
          <Heading>QuriFood</Heading>
        </Link>
      </div>
      <div className={style.search}>
        <label>Bienvenido! {userData && userData.usuario}</label>
        <Menu>
          <MenuButton
            color={"#fffff"}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {isAdmin && (
              <Link to="/login">
                <MenuItem icon={<SmallAddIcon />}>Crear Usuarios</MenuItem>
              </Link>
            )}
            <Link to="/" onClick={handleLogout}>
              <MenuItem icon={<EditIcon />}>Salir</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
