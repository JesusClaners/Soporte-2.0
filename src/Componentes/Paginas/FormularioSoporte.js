import Formulario from "../UI/Formulario";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

const FormularioSoporte = () => {
  return (
    <>
      <Paper elevation={24}>
        <h2>Ingrese los datos en el siguiente formulario</h2>

        <Formulario />
        <button>
          <Link to="/">Volver</Link>
        </button>
      </Paper>
    </>
  );
};

export default FormularioSoporte;
