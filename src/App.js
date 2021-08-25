import React, { Component } from 'react'

 import { Route , BrowserRouter as Router, Switch ,withRouter} from "react-router-dom";
import Home from './component/Home'
import Design from '../src/design/page1'
import Profile from './component/Profile'

import './App.css';
function App() {
  return (
    <div className="App">
           
        
           
          
      <Router>
           <Switch>
                 <Route exact path="/home" component={withRouter(Home)} />
                 <Route exact path="/Design" component={withRouter (Design)} />
                 <Route exact path="/Profile" component={withRouter(Profile)} />
                   
                      </Switch>
         </Router> 
      </div>
  );
}

export default App;
