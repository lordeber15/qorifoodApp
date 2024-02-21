import style from "./navBar.module.css";
import {
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function navBar() {
  return (
    <div className={style.contenedor}>
      <Link to="/dashboard">
        <Heading>QuriFood</Heading>
      </Link>
      <div className={style.search}>
        <Input placeholder="Buscar..." />
        <Link to="#">
          <SearchIcon boxSize={5} />
        </Link>
        <Menu>
          <MenuButton
            color={"#fffff"}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <Link to="/ ">
              <MenuItem icon={<EditIcon />}>Salir</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
