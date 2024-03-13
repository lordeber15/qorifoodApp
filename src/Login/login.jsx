import style from "./login.module.css";
import {
  Heading,
  IconButton,
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Modal,
  ModalFooter,
  ModalOverlay,
  FormControl,
  ModalContent,
  ModalHeader,
  Button,
  FormLabel,
  Input,
  ModalCloseButton,
  ModalBody,
  Select,
  useDisclosure,
  CircularProgress,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getLogin,
  createLogin,
  deleteLogin,
  updateLogin,
} from "../request/login";

export default function Login() {
  const {
    isLoading,
    data: dataLogin,
    isError,
    error,
  } = useQuery({
    queryKey: ["login"],
    queryFn: getLogin,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const queryClient = useQueryClient();

  const addLoginMutation = useMutation({
    mutationFn: createLogin,
    onSuccess: () => {
      console.log("lo hiciste")
      queryClient.invalidateQueries("login");
    },
  });

  const deleteLoginMutation = useMutation({
    mutationFn: deleteLogin,
    onSuccess: () => {
      queryClient.invalidateQueries("login");
    },
  });

  const updateLoginMutation = useMutation({
    mutationFn: updateLogin,
    onSuccess: () => {
      queryClient.invalidateQueries("login");
    },
  });

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [editLoginId, setEditLoginId] = useState(null);

  const handlerClickLogin = async () => {
    if (usuario === "" || password === "" || cargo === "") {
      console.log("Debe completar todos los campos.");
      return;
    }
    try {
      await addLoginMutation.mutateAsync({
        usuario,
        password,
        cargo,
      });
      handlerReset();
      onClose();
    } catch (error) {
      console.error("Error al agregar el login:", error);
    }
  };

  const handlerChangeUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const handlerChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlerChangeCargo = (e) => {
    setCargo(e.target.value);
  };

  const handleDeleteLogin = (id) => {
    deleteLoginMutation.mutate(id);
  };

  const handleEditLogin = (id) => {
    setEditLoginId(id);
    const login = dataLogin.find((login) => login.id === id);
    if (login) {
      setUsuario(login.usuario);
      setPassword(login.password);
      setCargo(login.cargo);
      onOpen();
    }
  };

  const handleUpdateLogin = () => {
    if (usuario === "" || password === "" || cargo === "") {
      console.log("Por favor, complete todos los campos.");
      return;
    }
    try {
      updateLoginMutation.mutate({
        id: editLoginId,
        usuario,
        password,
        cargo,
      });
      onClose();
      handlerReset();
    } catch (error) {
      console.error("Error al actualizar el login:", error);
    }
  };

  const handlerReset = () => {
    setUsuario("");
    setPassword("");
    setCargo("");
    setEditLoginId(null);
  };

  if (isLoading) {
    return (
      <div className={style.loading}>
        <CircularProgress isIndeterminate color="green.300" />
      </div>
    );
  } else if (isError) {
    return <div className={style.error}>Error: {error.message}</div>;
  }

  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>
        <Link to={"/dashboard"}>
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="Send email"
            icon={<ArrowLeftIcon />}
          />
        </Link>

        <Heading>Crear Usuario</Heading>

        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </div>
      {dataLogin.length === 0 ? (
        <Heading className={style.nodatos}>No hay Datos que mostrar</Heading>
      ) : (
        <div className={style.tablas}>
          <Card padding={"15px"}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>Codigo</Th>
                    <Th textAlign={"center"}>Usuario</Th>
                    <Th textAlign={"center"}>Password</Th>
                    <Th textAlign={"center"}>Cargo</Th>
                    <Th textAlign={"center"}>Acciones</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataLogin.map((login) => (
                    <Tr key={login.id}>
                      <Td textAlign={"center"}>{login.id}</Td>
                      <Td textAlign={"center"}>{login.usuario}</Td>
                      <Td textAlign={"center"}>{login.password}</Td>
                      <Td textAlign={"center"}>{login.cargo}</Td>
                      <Td textAlign={"center"}>
                        <IconButton
                          variant="outline"
                          colorScheme="teal"
                          aria-label="Edit login"
                          icon={<EditIcon />}
                          onClick={() => handleEditLogin(login.id)}
                        />
                        <IconButton
                          variant="outline"
                          colorScheme="teal"
                          aria-label="Delete login"
                          icon={<DeleteIcon />}
                          onClick={() => handleDeleteLogin(login.id)}
                        />
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        </div>
      )}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handlerReset();
        }}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editLoginId ? "Editar" : "Agregar"} Login
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Usuario"
                value={usuario}
                onChange={handlerChangeUsuario}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlerChangePassword}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cargo</FormLabel>
              <Select
              placeholder="Cargo"
              value={cargo}
              onChange={handlerChangeCargo}
              >
                <option value="Administrador">Administrador</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Usuario">Usuario</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => {
                onClose();
                handlerReset();
              }} mr={3}>
              Cancelar
            </Button>
            {editLoginId ? (
              <Button colorScheme="blue" onClick={handleUpdateLogin}>
                Actualizar
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={handlerClickLogin}>
                Guardar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
