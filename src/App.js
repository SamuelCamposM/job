//dependencias
import React from 'react';
import {
  BrowserRouter as Router,
  Route , Switch
} from 'react-router-dom'
//Componentes / vistas

import Registrarse from './views/Registrarse';
import Dashboard from './views/Dashboard';
import Empresas from './views/Empresas';
import Reportes from './views/Reportes';
import Usuarios from './views/Usuarios';

import './App.css';
//material-ui
import {ThemeProvider} from "@material-ui/core"
import theme from './themeConfig';
import RecuperarContraseña from './views/RecuperarContraseña';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
<Router>
<Switch>
<Route exact path='/' component={Registrarse}/>
<Route exact path='/Dashboard' component={Dashboard}/>
<Route exact path="/Empresas" component={Empresas} />
<Route exact path="/Reportes" component={Reportes} />
<Route exact path="/Usuarios" component={Usuarios} />
<Route exact path="/RecuperarContraseña" component={RecuperarContraseña} />
</Switch>
</Router>
</ThemeProvider>

    </div>
  );
}

export default App;

