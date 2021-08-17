import logo from './logo.svg';
 import { BrowserRouter,Route,Switch } from 'react-router-dom'
import './App.css';
import Home from './component/Home.js'
import Nav from './Nav.js'
import ChangeShirt from './component/ChangeShirt'
import Erro from './component/Erro'

function App() {
  return (
     <>
       <BrowserRouter>
     <Nav>
     <Switch>
       <Route exact path="/" component={Home}/>
        <Route exact path="/ChangeShirt" component={ChangeShirt}/>
        <Route component={Erro}/>
        </Switch>
        </Nav>
        </BrowserRouter>
     </>
  );
}

export default App;
