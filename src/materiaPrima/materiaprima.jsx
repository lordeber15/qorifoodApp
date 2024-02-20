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
} from "@chakra-ui/react";
import { DeleteIcon, AddIcon, EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
export default function materiaprima() {
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
        />
      </div>

      <div className={style.tablas}>
        <Card padding={"15px"}>
          <TableContainer>
            <Table>
              <Thead>
                <Tr>
                  <Th>Codigo</Th>
                  <Th>Insumos</Th>
                  <Th>Medida</Th>
                  <Th isNumeric>Ingreso</Th>
                  <Th isNumeric>Salida</Th>
                  <Th>Icons</Th>
                  <Th>Editar</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr selected={true}>
                  <Th>MP001</Th>
                  <Th>Detergente </Th>
                  <Th>Kg.</Th>
                  <Th isNumeric>28.50</Th>
                  <Th isNumeric>8.50</Th>
                  <Th></Th>
                  <Th>
                    <IconButton
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
                  <Th>MP002</Th>
                  <Th>Jabon Liquido</Th>
                  <Th>Lt.</Th>
                  <Th isNumeric>1057.74</Th>
                  <Th isNumeric>50.50</Th>
                  <Th></Th>
                  <Th>
                    <IconButton
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
                  <Th>MP003</Th>
                  <Th>Alcohol en Gel </Th>
                  <Th>Lt.</Th>
                  <Th isNumeric>94.56</Th>
                  <Th isNumeric>50</Th>
                  <Th></Th>
                  <Th>
                    <IconButton
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
