import style from "./dasboard.module.css";
import { Heading } from "@chakra-ui/react";
import Card from "../Card/card";
import {} from "@chakra-ui/react";
export default function dashboard() {
  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>
        <Heading>Dashboard</Heading>
      </div>
      <div className={style.card}>
        <Card
          cardname={"Materia Prima"}
          imagen={"src/assets/materiaprima.jpg"}
        />
        <Card cardname={"Empaques"} imagen={"src/assets/Empaques.jpg"} />
        <Card
          cardname={"Producto terminado"}
          imagen={"src/assets/Producto terminado.JPG"}
        />
        <Card
          cardname={"Insumos de Limpieza"}
          imagen={"src/assets/limpieza.jpg"}
        />
      </div>
    </div>
  );
}
