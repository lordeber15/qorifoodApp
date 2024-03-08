import style from "./login.module.css";
import { useState } from "react";
import imagen from "../assets/Logo.png";
import {
  Heading,
  Divider,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Center,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className={style.contenedor}>
      <div className={style.imagen}>
        <Heading size="4xl">Bienvenido a la</Heading>
        <Heading size="4xl">Aplicacion Qorifood </Heading>
      </div>
      <div className={style.login}>
        <img src={imagen} width={"50%"} />
        <Heading>Ingresar</Heading>
        <Center>
          <Divider height="20px" orientation="horizontal" />
        </Center>
        <Input placeholder="Usuario" />
        <Center>
          <Divider height="10px" orientation="horizontal" />
        </Center>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Contraseña"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Center>
          <Divider height="10px" orientation="horizontal" />
        </Center>
        <Link to="/dashboard">
          <Button width={"100%"} colorScheme="gray">
            Ingresar
          </Button>
        </Link>
      </div>
    </div>
  );
}
