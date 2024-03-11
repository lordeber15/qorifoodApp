import style from "./materiaprima.module.css";
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
  getMateriaPrima,
  createMateriaPrima,
  deleteMateriaPrima,
  updateMateriaPrima,
} from "../request/materiaprima";

export default function MateriaPrima() {
  const {
    isLoading,
    data: dataMateriaPrima,
    isError,
    error,
  } = useQuery({
    queryKey: ["materiaprima"],
    queryFn: getMateriaPrima,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const queryClient = useQueryClient();

  const addMateriaPrimaMutation = useMutation({
    mutationFn: createMateriaPrima,
    onSuccess: () => {
      queryClient.invalidateQueries("materiaprima");
    },
  });

  const deleteMateriaPrimaMutation = useMutation({
    mutationFn: deleteMateriaPrima,
    onSuccess: () => {
      queryClient.invalidateQueries("materiaprima");
    },
  });

  const updateMateriaPrimaMutation = useMutation({
    mutationFn: updateMateriaPrima,
    onSuccess: () => {
      queryClient.invalidateQueries("materiaprima");
    },
  });

  const [valueInputMateriaPrima, setInputMateriaPrima] = useState("");
  const [valueSelectMedida, setValueSelectMedida] = useState("");
  const [valueInputInicial, setInputInicial] = useState(0.0);
  const [valueInputIngreso, setInputIngreso] = useState(0.0);
  const [valueInputSalida, setInputSalida] = useState(0.0);
  const [editMateriaPrimaId, setEditMateriaPrimaId] = useState(null);

  const handlerClickMateriaPrima = async () => {
    if (
      valueSelectMedida === "" ||
      valueInputMateriaPrima === "" ||
      valueInputInicial === 0 ||
      valueInputIngreso === 0 ||
      valueInputSalida === 0
    ) {
      console.log(
        "Debes ingresar un empaque, seleccionar una medida, inicial, ingreso y salida."
      );
      return;
    }
    try {
      await addMateriaPrimaMutation.mutateAsync({
        insumo: valueInputMateriaPrima,
        medida: valueSelectMedida,
        inicial: valueInputInicial,
        ingreso: valueInputIngreso,
        salida: valueInputSalida,
      });
      handlerReset();
      onClose();
    } catch (error) {
      console.error("Error al agregar la materia prima:", error);
    }
  };

  const handlerChangeSelectMedida = (e) => {
    setValueSelectMedida(e.target.value);
  };
  const handlerChangeInputMateriaPrima = (e) => {
    setInputMateriaPrima(e.target.value);
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
  const handleDeleteMateriaPrima = (id) => {
    deleteMateriaPrimaMutation.mutate(id);
  };
  const handleEditMateriaPrima = (id) => {
    setEditMateriaPrimaId(id);
    const materiaPrima = dataMateriaPrima.find(
      (materiaPrima) => materiaPrima.id === id
    );
    if (materiaPrima) {
      setInputMateriaPrima(materiaPrima.insumo);
      setValueSelectMedida(materiaPrima.medida);
      setInputInicial(materiaPrima.inicial);
      setInputIngreso(materiaPrima.ingreso);
      setInputSalida(materiaPrima.salida);
      onOpen();
    }
  };

  const handleUpdateMateriaPrima = () => {
    if (
      valueSelectMedida === "" ||
      valueInputMateriaPrima === "" ||
      valueInputInicial === 0 ||
      valueInputIngreso === 0 ||
      valueInputSalida === 0
    ) {
      console.log(
        "Por favor, complete todos los campos y seleccione una materia prima."
      );
      return;
    }
    try {
      updateMateriaPrimaMutation.mutate({
        id: editMateriaPrimaId,
        insumo: valueInputMateriaPrima,
        medida: valueSelectMedida,
        inicial: valueInputInicial,
        ingreso: valueInputIngreso,
        salida: valueInputSalida,
      });
      onClose();
      handlerReset();
    } catch (error) {
      console.error("Error al actualizar la materia prima:", error);
    }
  };

  const handlerReset = () => {
    setValueSelectMedida("");
    setInputMateriaPrima("");
    setInputInicial(0.0);
    setInputIngreso(0.0);
    setInputSalida(0.0);
    setEditMateriaPrimaId(null);
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

        <Heading>Materia Prima</Heading>

        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </div>

      {dataMateriaPrima.length === 0 ? (
        <Heading className={style.nodatos}>No hay Datos que mostrar</Heading>
      ) : (
        <div className={style.tablas}>
          <Card padding={"15px"}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>Codigo</Th>
                    <Th textAlign={"center"}>Materia Prima</Th>
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
                  {dataMateriaPrima.map((materiaPrima) => (
                    <Tr key={materiaPrima.id}>
                      <Th textAlign={"center"}>{materiaPrima.id}</Th>
                      <Th textAlign={"center"}>{materiaPrima.insumo}</Th>
                      <Th textAlign={"center"}>{materiaPrima.medida}</Th>
                      <Th textAlign={"center"}>{materiaPrima.inicial}</Th>
                      <Th textAlign={"center"}>{materiaPrima.ingreso}</Th>
                      <Th textAlign={"center"}>{materiaPrima.salida}</Th>
                      <Th textAlign={"center"}>
                        {
                        (parseFloat(materiaPrima.inicial)+parseFloat(materiaPrima.ingreso))-parseFloat(materiaPrima.salida)
                        }
                      </Th>
                      <Th textAlign={"center"}>
                        <IconButton
                          marginRight={"5px"}
                          variant="outline"
                          colorScheme="teal"
                          onClick={() =>
                            handleEditMateriaPrima(materiaPrima.id)
                          }
                          icon={<EditIcon />}
                        />
                        <IconButton
                          variant="outline"
                          colorScheme="teal"
                          onClick={() =>
                            handleDeleteMateriaPrima(materiaPrima.id)
                          }
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
          <ModalHeader>Materia Prima</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Materia Prima</FormLabel>
              <Input
                onChange={handlerChangeInputMateriaPrima}
                value={valueInputMateriaPrima}
                ref={initialRef}
                placeholder="Materia Prima"
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
            {editMateriaPrimaId == null ? (
              <Button onClick={handlerClickMateriaPrima} colorScheme="blue" mr={3}>
                Guardar
              </Button>
            ) : (
              <Button onClick={handleUpdateMateriaPrima} colorScheme="blue" mr={3}>
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
