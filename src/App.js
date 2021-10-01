import Main from "./Componentes/Paginas/Main"
import NavClan from "./Componentes/UI/NavegacionClaners"
import { Route, Switch, Redirect } from 'react-router-dom';
import Cuerpo from "./Componentes/UI/Cuerpo";
import Xbox from "./Componentes/Paginas/Xbox";

function App() {
  return (
    <div>
       <Cuerpo>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/Main' />
        </Route>
        <Route path ='/Xbox' exact>
          <Xbox />
        </Route>
      </Switch>
    </Cuerpo>

      
      <NavClan/>
      <Main/>
    </div>
  );
}

export default App;
