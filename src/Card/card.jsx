import {
  Heading,
  Card,
  CardBody,
  CardFooter,
  Image,
  Button,
  CardHeader,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function card({ cardname, imagen, url }) {
  return (
    <div>
      <Card maxW="xs">
        <CardHeader>
          <Heading size={"md"} align="center">
            {cardname}
          </Heading>
        </CardHeader>
        <CardBody>
          <Image
            src={imagen}
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
        </CardBody>
        <CardFooter>
          <Link to={url}>
            <Button width={"100%"} variant="solid" colorScheme="blue">
              Ingresar
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
