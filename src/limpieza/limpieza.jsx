import style from "./limpieza.module.css";
import {
  Heading,
  IconButton,
  Card,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
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
  useDisclosure,
  Select,
  CircularProgress,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getLimpieza,
  createLimpieza,
  deleteLimpieza,
  updateLimpieza,
} from "../request/limpieza";

export default function Limpieza() {
  const {
    isLoading,
    data: dataLimpieza,
    isError,
    error,
  } = useQuery({
    queryKey: ["limpieza"],
    queryFn: getLimpieza,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const queryClient = useQueryClient();

  const addLimpiezaMutation = useMutation({
    mutationFn: createLimpieza,
    onSuccess: () => {
      queryClient.invalidateQueries("limpieza");
    },
  });

  const deleteLimpiezaMutation = useMutation({
    mutationFn: deleteLimpieza,
    onSuccess: () => {
      queryClient.invalidateQueries("limpieza");
    },
  });

  const updateLimpiezaMutation = useMutation({
    mutationFn: updateLimpieza,
    onSuccess: () => {
      queryClient.invalidateQueries("limpieza");
    },
  });
  const [valueInputLimpieza, setInputLimpieza] = useState("");
  const [valueSelectMedida, setValueSelectMedida] = useState("");
  const [valueInputInicial, setInputInicial] = useState(0.0);
  const [valueInputIngreso, setInputIngreso] = useState(0.0);
  const [valueInputSalida, setInputSalida] = useState(0.0);
  const [editLimpiezaId, setEditLimpiezaId] = useState(null);

  if (isLoading) {
    return (
      <div className={style.loading}>
        <CircularProgress isIndeterminate color="green.300" />
      </div>
    );
  } else if (isError) {
    return <div className={style.error}>Error: {error.message}</div>;
  }

  const handlerClickLimpieza = async () => {
    if (
      valueSelectMedida == "" ||
      valueInputLimpieza == "" ||
      valueInputInicial == 0 ||
      valueInputIngreso == 0 ||
      valueInputSalida == 0
    ) {
      return console.log(
        "Debes ingresar un empaque, Seleccionar un medida, inicial, ingreso y salida"
      );
    }
    try {
      await addLimpiezaMutation.mutateAsync({
        limpieza: valueInputLimpieza,
        medida: valueSelectMedida,
        inicial: valueInputInicial,
        ingreso: valueInputIngreso,
        salida: valueInputSalida,
      });
      handlerReset();
      onClose();
      queryClient.invalidateQueries("limpieza");
    } catch (error) {
      console.error("Error al agregar la limpieza:", error);
    }
  };

  const handlerChangeSelectMedida = (e) => {
    setValueSelectMedida(e.target.value);
  };
  const handlerChangeInputLimpieza = (e) => {
    setInputLimpieza(e.target.value);
  };
  const handlerChangeInputInicial = (e) => {
    setInputInicial(e.target.value);
  };
  const handlerChangeInputIngreso = (e) => {
    setInputIngreso(e.target.value);
  };
  const handlerChangeInputSalida = (e) => {
    setInputSalida(e.target.value);
  };
  const handleDeleteLimpieza = (id) => {
    deleteLimpiezaMutation.mutate(id);
    queryClient.invalidateQueries("limpieza");
  };
  const handleEditLimpieza = (id) => {
    setEditLimpiezaId(id);
    const limpieza = dataLimpieza.find((limpieza) => limpieza.id === id);
    if (limpieza) {
      setInputLimpieza(limpieza.limpieza);
      setValueSelectMedida(limpieza.medida);
      setInputInicial(limpieza.inicial);
      setInputIngreso(limpieza.ingreso);
      setInputSalida(limpieza.salida);
      onOpen();
    }
  };

  const handleUpdateLimpieza = () => {
    if (
      valueSelectMedida === "" ||
      valueInputLimpieza === "" ||
      valueInputInicial === 0 ||
      valueInputIngreso === 0 ||
      valueInputSalida === 0
    ) {
      console.log(
        "Por favor, complete todos los campos y seleccione una limpieza."
      );
      return;
    }
    try {
      updateLimpiezaMutation.mutate({
        id: editLimpiezaId,
        limpieza: valueInputLimpieza,
        medida: valueSelectMedida,
        inicial: valueInputInicial,
        ingreso: valueInputIngreso,
        salida: valueInputSalida,
      });
      onClose();
      handlerReset();
    } catch (error) {
      console.error("Error al actualizar la limpieza:", error);
    }
  };

  const handlerReset = () => {
    setValueSelectMedida("");
    setInputLimpieza("");
    setInputInicial(0.0);
    setInputIngreso(0.0);
    setInputSalida(0.0);
    setEditLimpiezaId(null);
  };

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

        <Heading>Insumos de Limpieza</Heading>

        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </div>

      {dataLimpieza.length === 0 ? (
        <Heading className={style.nodatos}>No hay Datos que mostrar</Heading>
      ) : (
        <div className={style.tablas}>
          <Card padding={"15px"}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>Codigo</Th>
                    <Th textAlign={"center"}>Insumos</Th>
                    <Th textAlign={"center"}>Medida</Th>
                    <Th isNumeric textAlign={"center"}>
                      Inicial
                    </Th>
                    <Th isNumeric textAlign={"center"}>
                      Ingreso
                    </Th>
                    <Th isNumeric textAlign={"center"}>
                      Salida
                    </Th>
                    <Th textAlign={"center"}>Saldo</Th>
                    <Th textAlign={"center"}>Editar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataLimpieza.map((datoLimpieza) => (
                    <Tr key={datoLimpieza.id}>
                      <Th textAlign={"center"}>{datoLimpieza.id}</Th>
                      <Th textAlign={"center"}>{datoLimpieza.limpieza}</Th>
                      <Th textAlign={"center"}>{datoLimpieza.medida}</Th>
                      <Th textAlign={"center"}>{datoLimpieza.inicial}</Th>
                      <Th textAlign={"center"}>{datoLimpieza.ingreso}</Th>
                      <Th textAlign={"center"}>{datoLimpieza.salida}</Th>
                      <Th textAlign={"center"}>
                        {parseFloat(datoLimpieza.inicial) +
                          parseFloat(datoLimpieza.ingreso) -
                          parseFloat(datoLimpieza.salida)}
                      </Th>
                      <Th textAlign={"center"}>
                        <IconButton
                          marginRight={"5px"}
                          variant="outline"
                          colorScheme="teal"
                          onClick={() => handleEditLimpieza(datoLimpieza.id)}
                          icon={<EditIcon />}
                        />
                        <IconButton
                          variant="outline"
                          colorScheme="teal"
                          onClick={() => handleDeleteLimpieza(datoLimpieza.id)}
                          icon={<DeleteIcon />}
                        />
                      </Th>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        </div>
      )}

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={() => {
          onClose();
          handlerReset();
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Insumos de Limpieza</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Insumos</FormLabel>
              <Input
                onChange={handlerChangeInputLimpieza}
                value={valueInputLimpieza}
                ref={initialRef}
                placeholder="Insumos"
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Medida</FormLabel>
              <Select
                onChange={handlerChangeSelectMedida}
                value={valueSelectMedida}
                placeholder="Selecciona una Unidad"
                required
              >
                <option value="Mt">Metros.</option>
                <option value="Kg">Kilogranos.</option>
                <option value="Lt">Litros.</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Inicial</FormLabel>
              <Input
                onChange={handlerChangeInputInicial}
                value={valueInputInicial}
                type="number"
                placeholder="Inicial"
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Ingreso</FormLabel>
              <Input
                onChange={handlerChangeInputIngreso}
                value={valueInputIngreso}
                type="number"
                placeholder="Ingreso"
                required
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Salida</FormLabel>
              <Input
                onChange={handlerChangeInputSalida}
                value={valueInputSalida}
                type="number"
                placeholder="Salida"
                required
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            {editLimpiezaId == null ? (
              <Button onClick={handlerClickLimpieza} colorScheme="blue" mr={3}>
                Guardar
              </Button>
            ) : (
              <Button onClick={handleUpdateLimpieza} colorScheme="blue" mr={3}>
                Editar
              </Button>
            )}

            <Button
              onClick={() => {
                onClose();
                handlerReset();
              }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
