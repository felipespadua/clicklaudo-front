import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import logo from './Logo.svg';
import VoiceRecognition from './Components/VoiceRecognition';
import './App.css';
import Login from './Login'
import Cadastro from './Cadastro'
import Laudos from './Laudos'
import Medicos from './Medicos'
import MedicosSolicitante from './MedicosSolicitante'
import Clinicas from './Clinicas'
import Convenios from './Convenios'
import { Fragment } from 'react'
import SimpleExpansionPanel from "./Expansion";

class App extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
        <div className="App">
          <Fragment>
            {/* {SimpleExpansionPanel()} */}
          </Fragment>
         
          <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/cadastro" component={Cadastro} />
              <Route path="/laudos" component={Laudos} />
              <Route path="/medicos" component={Medicos} />
              <Route path="/medicosSolicitante" component={MedicosSolicitante} />
              <Route path="/Convenios" component={Convenios} />
              <Route path="/Clinicas" component={Clinicas} />
              <Route path="/simpleExpansion" component={SimpleExpansionPanel} />

          </Switch>
        </div>
    )
  }
}

export default App;
