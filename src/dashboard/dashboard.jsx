import style from "./dasboard.module.css";
import { Heading } from "@chakra-ui/react";
import Card from "../Card/card";
import empaques from "../assets/Empaques.jpg";
import materiaprima from "../assets/materiaprima.jpg";
import productterminado from "../assets/Productoterminado.jpg";
import limpieza from "../assets/limpieza.jpg";
export default function dashboard() {
  return (
    <div className={style.contenedor}>
      <div className={style.titulo}>
        <Heading>Dashboard</Heading>
      </div>
      <div className={style.card}>
        <Card
          cardname={"Materia Prima"}
          imagen={materiaprima}
          url={"/materiaprima"}
        />
        <Card cardname={"Empaques"} imagen={empaques} url={"/empaques"} />
        <Card
          cardname={"Producto terminado"}
          imagen={productterminado}
          url={"/productoterminado"}
        />
        <Card
          cardname={"Insumos de Limpieza"}
          imagen={limpieza}
          url={"/limpieza"}
        />
      </div>
    </div>
  );
}
