import { Route, Switch, Redirect } from "react-router-dom";
import Xbox from "./Componentes/Paginas/Xbox";
import Soporte from "./Componentes/Paginas/Soporte";
import FormularioSoporte from "./Componentes/Paginas/FormularioSoporte";

function App() {
  return (

      <Switch>
        <Route path="/" exact>
          <Redirect to="/Soporte" />
        </Route>

        <Route path="/Soporte">
          <Soporte />
        </Route>
        <Route path="/Xbox" exact>
          <Xbox />
        </Route>
        <Route path="/Xbox/Formulario">
          <FormularioSoporte />
        </Route>
      </Switch>
    
  );
}

export default App;
