import style from "./landing.module.css";
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


export default function Landing() {
  const [show, setShow] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPasword] = useState("");

  const handledusuario = (e)=>{
    setUsuario(e.target.value);
  }
  const handledPassword = (e)=>{
    setPasword(e.target.value);
  }

  const handleClick = () => setShow(!show);

  const handleIngresar = () => {
    console.log(usuario)
    console.log(password)
    if(usuario=="eber" && password=="123456"){
      window.location = ('/dashboard')
      setPasword("")
      setUsuario("")
    }else{
      console.log("no puedes ingresar")
    }
  };

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
        <Input placeholder="Usuario" value={usuario} onChange={handledusuario} />
        <Center>
          <Divider height="10px" orientation="horizontal" />
        </Center>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={handledPassword}
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
        <Button width={"100%"} colorScheme="gray" onClick={handleIngresar}>
          Ingresar
        </Button>
      </div>
    </div>
  );
}
