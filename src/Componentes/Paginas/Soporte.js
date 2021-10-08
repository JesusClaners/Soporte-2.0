import React from "react";
import Acordeon from "../UI/Acordeon";
import Navegacion from "../UI/Navegacion";
import "../Styles/root.css";
import Tarjeta from "../UI/Tarjeta";
import Banner from "../UI/Banner";
import { Paper } from "@mui/material";

const Soporte = () => {
  return (
    <>
      <Banner />
      <Paper elevation={24}>
        <h1> Como podemos ayudarte?</h1>
        <Navegacion />
        <Acordeon>
          <p>
            Este es solo un texto de prueba <br />
            aqui deben de aparecer las preguntas
            <br />
            una vez termine el archivo JSON
          </p>
        </Acordeon>
        <h2>¿Eres creador de contenido?</h2>
        <h2>¡Unete Claners Creators!</h2>
        <Tarjeta>
          <button disabled>Enviar solicitud</button>
        </Tarjeta>
      </Paper>
    </>
  );
};

export default Soporte;
