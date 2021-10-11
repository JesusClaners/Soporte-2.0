import { Link } from "react-router-dom";
import Tarjeta from "../UI/Tarjeta";
import Acordeon from "../UI/Acordeon";
import BannerPC from "../UI/BannerPC";
import { Stack } from "@mui/material";
import { Paper } from "@mui/material";

const PC = () => {
  return (
    <>
      <BannerPC />
      <Paper elevation={24}>
        <h1> Soporte para PC</h1>

        <Acordeon>
          <p>
            Este es solo un texto de prueba <br />
            aqui deben de aparecer las preguntas
            <br />
            una vez termine el archivo JSON
          </p>
        </Acordeon>

        <Tarjeta>
          <Stack>
            <h2>Necesitas mas ayuda?</h2>
            <button>
              <Link to="/PC/Formulario">Soporte</Link>
            </button>
          </Stack>
        </Tarjeta>
        <Tarjeta>
          <button>
            <Link to="/">Volver</Link>
          </button>
        </Tarjeta>
      </Paper>
    </>
  );
};

export default PC;
