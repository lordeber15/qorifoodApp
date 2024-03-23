import style from "./landing.module.css";
import { useState, useEffect } from "react";
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
import { getUser } from "../request/Landing";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const {
    //isLoading,
    data: dataUser,
    //isError,
    //error,
  } = useQuery({
    queryKey: ["login"],
    queryFn: getUser,
  });
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPasword] = useState("");

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handledusuario = (e) => {
    setUsuario(e.target.value);
  };
  const handledPassword = (e) => {
    setPasword(e.target.value);
  };

  const handleClick = () => setShow(!show);

  const handleIngresar = () => {
    if (dataUser) {
      const user = dataUser.find(
        (user) => usuario === user.usuario && password === user.password
      );
      if (user) {
        localStorage.setItem("userData", JSON.stringify(user));
        navigate("/dashboard");
      } else {
        console.log("No puedes ingresar");
      }
    } else {
      console.log("Datos de usuario no disponibles aún");
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
        <Input
          placeholder="Usuario"
          value={usuario}
          onChange={handledusuario}
        />
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
