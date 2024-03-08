import style from "./empaque.module.css";
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
import { getEmpaques, createEmpaques } from "../request/empaque";

export default function Empaque() {
  const {
    isLoading,
    data: dataEmpaques,
    isError,
    error,
  } = useQuery({
    queryKey: ["empaques"],
    queryFn: getEmpaques,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const queryClient = useQueryClient();

  const addEmpaqueMutation = useMutation({
    mutationFn: createEmpaques,
    onSuccess: () => {
      console.log("ya se agrego tu tranquilo estas a salvo");
      queryClient.invalidateQueries("egresos");
    },
  });
  const [valueInputEmpaque, setInputEmpaque] = useState("");
  const [valueSelectMedida, setValueSelectMedida] = useState("");
  const [valueInputInicial, setInputInicial] = useState(0.0);
  const [valueInputIngreso, setInputIngreso] = useState(0.0);
  const [valueInputSalida, setInputSalida] = useState(0.0);

  if (isLoading) {
    return (
      <div className={style.loading}>
        <CircularProgress isIndeterminate color="green.300" />
      </div>
    );
  } else if (isError) {
    return <div className={style.error}>Error: {error.message}</div>;
  }

  const handlerClickEmpaque = async () => {
    if (
      valueSelectMedida == "" &&
      valueInputEmpaque == "" &&
      valueInputInicial == 0 &&
      valueInputIngreso == 0 &&
      valueInputSalida == 0
    ) {
      return console.log(
        "Debes ingresar un empaque, Seleccionar un medida, inicial, ingreso y salida"
      );
    } else if (valueInputEmpaque == "") {
      return console.log("Debes ingresar un Empaque");
    } else if (valueSelectMedida == "") {
      return console.log("Debes Seleccionar un Medida");
    } else if (valueInputInicial == "") {
      return console.log("Debes ingresar un Inicial");
    } else if (valueInputIngreso == "") {
      return console.log("Debes ingresar un Ingreso");
    } else if (valueInputSalida == "") {
      return console.log("Debes ingresar un Salida");
    }
    try {
      await addEmpaqueMutation.mutateAsync({
        empaque: valueInputEmpaque,
        medida: valueSelectMedida,
        inicial: valueInputInicial,
        ingreso: valueInputIngreso,
        salida: valueInputSalida,
      });
      handlerReset();
      onClose();
      queryClient.invalidateQueries("empaques");
    } catch (error) {
      console.error("Error al agregar el empaque:", error);
    }
  };
  const handlerChangeSelectMedida = (e) => {
    setValueSelectMedida(e.target.value);
  };
  const handlerChangeInputEmpaque = (e) => {
    setInputEmpaque(e.target.value);
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

  const handlerReset = () => {
    setValueSelectMedida("");
    setInputEmpaque("");
    setInputInicial(0.0);
    setInputIngreso(0.0);
    setInputSalida(0.0);
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

        <Heading>Empaques</Heading>

        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </div>
      {dataEmpaques.length == 0 ? (
        <div>No hay Datos que mostrar</div>
      ) : (
        <div className={style.tablas}>
          <Card padding={"15px"}>
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th textAlign={"center"}>Codigo</Th>
                    <Th textAlign={"center"}>Empaque</Th>
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
                    <Th isNumeric textAlign={"center"}>
                      saldo
                    </Th>
                    <Th textAlign={"center"}>Editar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataEmpaques &&
                    dataEmpaques.map((datosempaques) => {
                      return (
                        <Tr key={datosempaques.id}>
                          <Th textAlign={"center"}>{datosempaques.id}</Th>
                          <Th textAlign={"center"}>{datosempaques.empaque} </Th>
                          <Th textAlign={"center"}>{datosempaques.medida} </Th>
                          <Th textAlign={"center"}>{datosempaques.inicial} </Th>
                          <Th textAlign={"center"}>{datosempaques.ingreso} </Th>
                          <Th textAlign={"center"}>{datosempaques.salida} </Th>
                          <Th textAlign={"center"}>
                            {parseFloat(datosempaques.inicial) +
                              parseFloat(datosempaques.ingreso) -
                              parseFloat(datosempaques.salida)}
                          </Th>
                          <Th textAlign={"center"}>
                            <IconButton
                              marginRight={"5px"}
                              variant="outline"
                              colorScheme="teal"
                              aria-label="Send email"
                              icon={<EditIcon />}
                            />
                            <IconButton
                              variant="outline"
                              colorScheme="teal"
                              aria-label="Send email"
                              icon={<DeleteIcon />}
                            />
                          </Th>
                        </Tr>
                      );
                    })}
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
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Empaques</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Empaque</FormLabel>
              <Input
                onChange={handlerChangeInputEmpaque}
                value={valueInputEmpaque}
                ref={initialRef}
                placeholder="Empaque"
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Media</FormLabel>
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
            <Button onClick={handlerClickEmpaque} colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
