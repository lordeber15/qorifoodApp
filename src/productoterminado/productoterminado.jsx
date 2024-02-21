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
  Divider,
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { useRef } from "react";
import moment from "moment";

export default function productoterminado() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const date = moment().format("L");
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
                  <Th textAlign={"center"}>
                    Entradas
                    <Th> Unidades</Th>
                    <Th> Caja x 21 </Th>
                  </Th>
                  <Th textAlign={"center"}>
                    Salidas
                    <Th> Unidades</Th>
                    <Th> Caja x 21 </Th>
                  </Th>
                  <Th textAlign={"center"}>
                    Stock Final
                    <Th> Unidades</Th>
                    <Th> Caja x 21 </Th>
                  </Th>
                  <Th textAlign={"center"}>Feha de Vencimiento</Th>
                  <Th textAlign={"center"}>Editar</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Th textAlign={"center"}>MP001</Th>
                  <Th textAlign={"center"}>Detergente </Th>
                  <Th textAlign={"center"}>Kg.</Th>
                  <Th isNumeric textAlign={"center"}>
                    28.50
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    8.50
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    8.50
                  </Th>
                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>

                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>
                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>
                  <Th textAlign={"center"}>{date}</Th>
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
                    1057.74
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    50.50
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    50.50
                  </Th>

                  <Th textAlign={"center"}>
                    <Th isNumeric> 8.5 </Th>
                    <Th></Th>
                    <Th isNumeric>3 </Th>
                    <Th> </Th>
                  </Th>

                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>
                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>
                  <Th textAlign={"center"}>{date}</Th>
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
                    94.56
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    50
                  </Th>
                  <Th isNumeric textAlign={"center"}>
                    50
                  </Th>
                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>

                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>
                  <Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      8.5{" "}
                    </Th>
                    <Th> </Th>
                    <Th isNumeric textAlign={"center"}>
                      {" "}
                      3{" "}
                    </Th>
                    <Th> </Th>
                  </Th>
                  <Th textAlign={"center"}>{date}</Th>
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
          <ModalHeader>Producto Terminado</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Tipo de pasta</FormLabel>
              <Input ref={initialRef} placeholder="Tipo de pasta" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Formato</FormLabel>
              <Select placeholder="Selecciona una Formato">
                <option value="TORNILLO">TORNILLO</option>
                <option value="TAGLIATELLE 8.3">TAGLIATELLE 8.3</option>
                <option value="CANUTO">CANUTO</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Unidad</FormLabel>
              <Select placeholder="Selecciona una Unidad">
                <option value="Metros">Mt.</option>
                <option value="Kilogramo">Kg.</option>
                <option value="Litro">Lt.</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>{"Presentacion (gr)"}</FormLabel>
              <Input type="number" placeholder="Presentacion (gr)" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>N° de Lote</FormLabel>
              <Input type="number" placeholder="N° de Lote" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Entradas</FormLabel>
              <Input type="number" placeholder="Unidad" />
              <Divider height="10px" />
              <Input type="number" placeholder="Caja x 21" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Salidas</FormLabel>
              <Input type="number" placeholder="Unidad" />
              <Divider height="10px" />
              <Input type="number" placeholder="Caja x 21" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Stock Final</FormLabel>
              <Input type="number" placeholder="Unidad" />
              <Divider height="10px" />
              <Input type="number" placeholder="Caja x 21" />
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
