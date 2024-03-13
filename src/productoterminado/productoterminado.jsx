import style from "./productoterminado.module.css";
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
  useDisclosure,
  Select,
  CircularProgress,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useQuery, useQueryClient, useMutation } from "react-query";
import {
  getProductoterminado,
  createProductoterminado,
  deleteProductoTerminado,
  updateProductoTerminado,
} from "../request/productoterminado";

export default function Productoterminado() {
  const { isLoading, data: dataProductosTerminados, isError, error } = useQuery({
    queryKey: ["productoterminado"],
    queryFn: getProductoterminado,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const queryClient = useQueryClient();

  const addProductoTerminadoMutation = useMutation({
    mutationFn: createProductoterminado,
    onSuccess: () => {
      queryClient.invalidateQueries("productoterminado");
    },
  });

  const deleteProductoTerminadoMutation = useMutation({
    mutationFn: deleteProductoTerminado,
    onSuccess: () => {
      queryClient.invalidateQueries("productoterminado");
    },
  });

  const updateProductoTerminadoMutation = useMutation({
    mutationFn: updateProductoTerminado,
    onSuccess: () => {
      queryClient.invalidateQueries("productoterminado");
    },
  });

  const [tpasta, setTpasta] = useState("");
  const [formato, setFormato] = useState("");
  const [unidad, setUnidad] = useState("");
  const [presentacion, setPresentacion] = useState("");
  const [lote, setLote] = useState(0.0);
  const [fechaVencimiento, setFechaVencimiento] = useState("");

  const [editProductoTerminadoId, setEditProductoTerminadoId] = useState(null);

  const handlerClickProductoTerminado = async () => {
    if (
      tpasta === "" ||
      formato === "" ||
      unidad === "" ||
      presentacion === "" ||
      lote === "" ||
      fechaVencimiento === ""
    ) {
      console.log("Debe completar todos los campos.");
      return;
    }
    try {
      await addProductoTerminadoMutation.mutateAsync({
        tpasta: tpasta,
        formato: formato,
        unidad:unidad,
        presentacion:presentacion,
        lote:lote,
        fechaVencimiento:fechaVencimiento,
      });
      handlerReset();
      onClose();
    } catch (error) {
      console.error("Error al agregar el producto terminado:", error);
    }
  };

  const handlerChangeTpasta = (e) => {
    setTpasta(e.target.value);
  };
  const handlerChangeFormato = (e) => {
    setFormato(e.target.value);
  };
  const handlerChangeUnidad = (e) => {
    setUnidad(e.target.value);
  };
  const handlerChangePresentacion = (e) => {
    setPresentacion(e.target.value);
  };
  const handlerChangeLote = (e) => {
    setLote(e.target.value);
  };
  const handlerChangeFechaVencimiento = (e) => {
    setFechaVencimiento(e.target.value);
  };
  const handleDeleteProductoTerminado = (id) => {
    deleteProductoTerminadoMutation.mutate(id);
  };
  const handleEditProductoTerminado = (id) => {
    setEditProductoTerminadoId(id);
    const productoTerminado = dataProductosTerminados.find(
      (producto) => producto.id === id
    );
    if (productoTerminado) {
      setTpasta(productoTerminado.tpasta);
      setFormato(productoTerminado.formato);
      setUnidad(productoTerminado.unidad);
      setPresentacion(productoTerminado.presentacion);
      setLote(productoTerminado.lote);
      setFechaVencimiento(productoTerminado.fechavencimiento);
      onOpen();
    }
  };

  const handleUpdateProductoTerminado = () => {
    if (
      tpasta === "" ||
      formato === "" ||
      unidad === "" ||
      presentacion === "" ||
      lote === "" ||
      fechaVencimiento === ""
    ) {
      console.log("Por favor, complete todos los campos.");
      return;
    }
    try {
      updateProductoTerminadoMutation.mutate({
        tpasta:tpasta,
        formato:formato,
        unidad:unidad,
        presentacion:presentacion,
        lote:lote,
        fechaVencimiento:fechaVencimiento,
      });
      onClose();
      handlerReset();
    } catch (error) {
      console.error("Error al actualizar el producto terminado:", error);
    }
  };

  const handlerReset = () => {
    setTpasta("");
    setFormato("");
    setUnidad("");
    setPresentacion("");
    setLote("");
    setFechaVencimiento("");
    setEditProductoTerminadoId(null);
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

        <Heading>Producto terminado</Heading>

        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="Send email"
          icon={<AddIcon />}
          onClick={onOpen}
        />
      </div>
      {dataProductosTerminados.length === 0 ? (
        <Heading className={style.nodatos}>No hay Datos que mostrar</Heading>
      ) : (
      <div className={style.tablas}>
        <Card padding={"15px"}>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th textAlign={"center"}>Codigo</Th>
                  <Th textAlign={"center"}>Tipo de Pasta</Th>
                  <Th textAlign={"center"}>Formato</Th>
                  <Th textAlign={"center"}>Unidad</Th>
                  <Th textAlign={"center"}>{"Presentacion (gr)"}</Th>
                  <Th textAlign={"center"}>N° Lote</Th>
                  <Th textAlign={"center"}>Fecha de Vencimiento</Th>
                  <Th textAlign={"center"}>Acciones</Th>
                </Tr>
              </Thead>
              <Tbody>
                {dataProductosTerminados.map((item) => (
                  <Tr key={item.id}>
                    <Td textAlign={"center"}>{item.id}</Td>
                    <Td textAlign={"center"}>{item.tpasta}</Td>
                    <Td textAlign={"center"}>{item.formato}</Td>
                    <Td textAlign={"center"}>{item.unidad}</Td>
                    <Td textAlign={"center"}>{item.presentacion}</Td>
                    <Td textAlign={"center"}>{item.lote}</Td>
                    <Td textAlign={"center"}>{item.fechavencimiento}</Td>
                    <Td textAlign={"center"}>
                      <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label="Edit producto terminado"
                        icon={<EditIcon />}
                        onClick={() => handleEditProductoTerminado(item.id)}
                      />
                      <IconButton
                        variant="outline"
                        colorScheme="teal"
                        aria-label="Delete producto terminado"
                        icon={<DeleteIcon />}
                        onClick={() => handleDeleteProductoTerminado(item.id)}
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
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editProductoTerminadoId ? "Editar" : "Agregar"} Producto Terminado</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tipo de Pasta</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Tipo de Pasta"
                value={tpasta}
                onChange={handlerChangeTpasta}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Formato</FormLabel>
              <Input
                placeholder="Formato"
                value={formato}
                onChange={handlerChangeFormato}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Unidad</FormLabel>
              <Select
                placeholder="Unidad"
                value={unidad}
                onChange={handlerChangeUnidad}
              >
                <option value="Mt">Metros.</option>
                <option value="Kg">Kilogranos.</option>
                <option value="Lt">Litros.</option>
              </Select>
              
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Presentación (gr)</FormLabel>
              <Input
                placeholder="Presentación"
                value={presentacion}
                onChange={handlerChangePresentacion}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Número de Lote</FormLabel>
              <Input
              type="number"
                placeholder="Número de Lote"
                value={lote}
                onChange={handlerChangeLote}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Fecha de Vencimiento</FormLabel>
              <Input
              type="date"
                placeholder="Fecha de Vencimiento"
                value={fechaVencimiento}
                onChange={handlerChangeFechaVencimiento}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} mr={3}>
              Cancelar
            </Button>
            {editProductoTerminadoId ? (
              <Button colorScheme="blue" onClick={handleUpdateProductoTerminado}>
                Actualizar
              </Button>
            ) : (
              <Button colorScheme="blue" onClick={handlerClickProductoTerminado}>
                Guardar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
