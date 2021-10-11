import { Route, Switch, Redirect } from "react-router-dom";
import Xbox from "./Componentes/Paginas/Xbox";
import PlayStation from "./Componentes/Paginas/Playstation";
import Soporte from "./Componentes/Paginas/Soporte";
import FormularioSoporte from "./Componentes/Paginas/FormularioSoporte";
import PC from "./Componentes/Paginas/PC";
import Garena from "./Componentes/Paginas/Garena";

function App() {
  return (
    <body>
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
        <Route path="/Playstation" exact>
          <PlayStation />
        </Route>
        <Route path="/Playstation/Formulario">
          <FormularioSoporte />
        </Route>
        <Route path="/PC" exact>
          <PC />
        </Route>
        <Route path="/PC/Formulario">
          <FormularioSoporte />
        </Route>
        <Route path="/Garena" exact>
          <Garena />
        </Route>
       {/* <Route path="/Garena/Formulario">
          <FormularioGarena />
        </Route> */}
      </Switch>
    </body>
  );
}

export default App;
