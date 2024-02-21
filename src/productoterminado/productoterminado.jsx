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
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function productoterminado() {
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
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
                  </Th>

                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
                  </Th>
                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
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

                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th></Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
                  </Th>

                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
                  </Th>
                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
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
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
                  </Th>

                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
                  </Th>
                  <Th>
                    <Th isNumeric> 8.5 </Th>
                    <Th> </Th>
                    <Th isNumeric> 3 </Th>
                    <Th> </Th>
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
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </div>
    </div>
  );
}
