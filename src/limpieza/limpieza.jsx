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
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function limpieza() {
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
    </div>
  );
}
