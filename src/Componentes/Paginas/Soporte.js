import Acordeon from "../UI/Acordeon";
import Cuerpo from "../UI/Cuerpo";
import Navegacion from "../UI/Navegacion";
import { Typography } from "@mui/material";
import "./Main.css";
import Tarjeta from "../UI/Tarjeta";
import Banner from "../UI/Banner";
import FAQGeneral from "../UI/FAQ_General";

const Soporte = () => {
  return (
    <Cuerpo>
      <Banner />
      <Typography className="main__texto"> Como podemos ayudarte?</Typography>
      <Navegacion />
      <Acordeon>
        <FAQGeneral/>
      </Acordeon>
      <Typography className="main__h2">¿Eres creador de contenido?</Typography>
      <Typography className="main__h2">¡Unete Claners Creators!</Typography>
      <Tarjeta>
        <button>Enviar solicitud</button>
      </Tarjeta>
    </Cuerpo>
  );
};

export default Soporte;
