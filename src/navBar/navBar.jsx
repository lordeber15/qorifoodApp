import style from "./navBar.module.css";
import { Heading, Input } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function navBar() {
  return (
    <div className={style.contenedor}>
      <Heading>QuriFood</Heading>
      <div className={style.search}>
        <Input placeholder="Basic usage" />
        <Link to="#">
          <SearchIcon boxSize={5} />
        </Link>
      </div>
    </div>
  );
}
