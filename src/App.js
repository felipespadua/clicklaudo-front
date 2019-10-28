import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import logo from './Logo.svg';
import VoiceRecognition from './Components/VoiceRecognition';
import './App.css';
import Login from './Login'
import Cadastro from './Cadastro'
import Laudos from './Laudos'
// import MainTable from './MainTable'
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
              {/* <Route path="/maintable" component={MainTable} /> */}
              <Route path="/simpleExpansion" component={SimpleExpansionPanel} />

          </Switch>
        </div>
    )
  }
}

export default App;
