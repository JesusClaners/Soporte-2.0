import Cuerpo from "../UI/Cuerpo";
import { Link } from "react-router-dom";


const Xbox = () => {
  return (
    <Cuerpo>
      <h2>Pagina de soporte Xbox</h2>
      <button>
      <Link to='/'>Volver</Link>
      </button>
      <button>
        <Link to='/Xbox/Formulario'>Soporte</Link>
      </button>
    </Cuerpo>
  );
};

export default Xbox;
