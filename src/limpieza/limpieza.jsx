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
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useRef } from "react";
export default function Limpieza() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
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

      <div className={style.tablas}>
        <Card padding={"15px"}>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th textAlign={"center"}>Codigo</Th>
                  <Th textAlign={"center"}>Insumos</Th>
                  <Th textAlign={"center"}>Medida</Th>
                  <Th textAlign={"center"}>Inicial</Th>
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
                <Tr>
                  <Th textAlign={"center"}>MP001</Th>
                  <Th textAlign={"center"}>Detergente </Th>
                  <Th textAlign={"center"}>Kg.</Th>
                  <Th isNumeric textAlign={"center"}>
                    28.65
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    28.50
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    8.50
                  </Th>
                  <Th></Th>
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
                <Tr>
                  <Th textAlign={"center"}>MP002</Th>
                  <Th textAlign={"center"}>Jabon Liquido</Th>
                  <Th textAlign={"center"}>Lt.</Th>
                  <Th isNumeric textAlign={"center"}>
                    48.58
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    1057.74
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    50.50
                  </Th>
                  <Th></Th>
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
                <Tr>
                  <Th textAlign={"center"}>MP003</Th>
                  <Th textAlign={"center"}>Alcohol en Gel </Th>
                  <Th textAlign={"center"}>Lt.</Th>
                  <Th isNumeric textAlign={"center"}>
                    58.27
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    94.56
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    50
                  </Th>
                  <Th></Th>
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
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </div>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Insimos de Limpieza</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Insumos</FormLabel>
              <Input ref={initialRef} placeholder="Insumos" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Media</FormLabel>
              <Select placeholder="Selecciona una Unidad">
                <option value="Metros">Mt.</option>
                <option value="Kilogramo">Kg.</option>
                <option value="Litro">Lt.</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Inicial</FormLabel>
              <Input type="number" placeholder="Inicial" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Ingreso</FormLabel>
              <Input type="number" placeholder="Ingreso" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Salida</FormLabel>
              <Input type="number" placeholder="Salida" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Guardar
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
