import Acordeon from "../UI/Acordeon";
import Cuerpo from "../UI/Cuerpo";
import Navegacion from "../UI/Navegacion";
import { Typography } from "@mui/material";
import "./Main.css";
import Boton from "../UI/BotonSimple";
import Tarjeta from "../UI/Tarjeta";
import Banner from "../UI/Banner";
import Lector from "../UI/Lector";

const Main = () => {
  return (
    <Cuerpo>
      <Banner />
      <Typography className="main__texto"> Como podemos ayudarte?</Typography>
      <Navegacion />
      <Acordeon>
        <Typography className="main__texto">
         {/*  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum." */}
          <Lector/>
        </Typography>
      </Acordeon>
      <Typography className="main__h2">¿Eres creador de contenido?</Typography>
      <Typography className="main__h2">¡Unete Claners Creators!</Typography>
      <Tarjeta>
        <Boton>Enviar solicitud</Boton>
      </Tarjeta>
    </Cuerpo>
  );
};

export default Main;
