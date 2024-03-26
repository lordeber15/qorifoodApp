import { Input, Heading, Button } from "@chakra-ui/react";
import style from "./cambiarPassword.module.css";
import { useState, useEffect } from "react";
import { useQueryClient, useMutation } from "react-query";
import { updateLogin } from "../../request/login.js";

function CambiarPassword() {
  const queryClient = useQueryClient();

  const updateLoginMutation = useMutation({
    mutationFn: updateLogin,
    onSuccess: () => {
      queryClient.invalidateQueries("login");
    },
  });

  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const [password, setPassword] = useState("");

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleLogout = () => {
    localStorage.removeItem("userData");
  };

  const handleUpdatePassword = async () => {
    if (password === "") {
      console.log("Por favor, complete todos los campos.");
      return;
    }

    try {
      await updateLoginMutation.mutateAsync({
        id: userData?.id,
        usuario: userData?.usuario,
        password,
        cargo: userData?.cargo,
        // Agrega aquí los demás campos requeridos que deseas enviar al servidor
      });
      handleLogout();
      window.location.replace("");
      console.log("listo pero falta redirecionar");
    } catch (error) {
      console.error("Error al actualizar la contraseña:", error);
    }
  };

  // Verificar si userData está inicializado antes de renderizar
  if (!userData) {
    return null; // O puedes mostrar un spinner de carga u otro indicador
  }

  return (
    <div className={style.container}>
      <Heading>Cambiar Contraseña</Heading>
      <div className={style.usuario}>
        <h3 className={style.titleusuario}>Usuarios:</h3>
        <label>{userData.usuario}</label>
      </div>
      <div className={style.password}>
        <Input
          type="password"
          placeholder="Nueva Contraseña"
          onChange={handlerChangePassword}
        ></Input>
        <Button colorScheme="linkedin" onClick={handleUpdatePassword}>
          Cambiar Contraseña
        </Button>
      </div>
    </div>
  );
}

export default CambiarPassword;
