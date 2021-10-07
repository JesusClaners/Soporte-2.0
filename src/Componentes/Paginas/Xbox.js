import Boton from "../UI/BotonSimple";
import Cuerpo from "../UI/Cuerpo";
import { Link } from "react-router-dom";


const Xbox = () => {
  return (
    <Cuerpo>
      <h2>Pagina de soporte Xbox</h2>
      <Boton>
      <Link to='/'>Volver</Link>
      </Boton>
      <Boton>
        <Link to='/Xbox/Formulario'>Soporte</Link>
      </Boton>
    </Cuerpo>
  );
};

export default Xbox;
