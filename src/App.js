import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Login from './Login'
import Cadastro from './Cadastro'
import Laudos from './Laudos'
import MainTable from './MainTable'
import SimpleExpansionPanel from "./Expansion";

// import { Switch } from? '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="App">
          {SimpleExpansionPanel()}
          <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/laudos" component={Laudos} />
              <Route path="/maintable" component={MainTable} />

          </Switch>
        </div>
    )


  }
}

export default App;
