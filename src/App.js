import React from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import VoiceRecognition from './Components/VoiceRecognition';
import './App.css';
import Login from './Components/auth/Login'
import Cadastro from './Components/auth/Cadastro'
import Laudos from './Laudos'
import MainTable from './MainTable'
import { Fragment } from 'react'
import SimpleExpansionPanel from "./Expansion";
import AuthService from "./Components/auth/auth-service";
import ProtectedRoute from './Components/auth/protected-route';
// import { Switch } from? '@material-ui/core';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null };
    this.service = new AuthService();

  }
  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }
 

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }
  render(){
    if(this.state.loggedInUser){
 console.log("logado")
    return (
      
        <div className="App">
          <Fragment>
            {/* {SimpleExpansionPanel()} */}
          </Fragment>
         
          <Switch>
          <Route exact path="/" render={(props) => <Login {...props} getUser={this.getTheUser}/>}/>
              <Route path="/cadastro" component={Cadastro} />
              <ProtectedRoute path="/laudos" user={this.state.loggedInUser} component={Laudos} />
              <Route path="/maintable" component={MainTable} />
              <Route path="/simpleExpansion" component={SimpleExpansionPanel} />

          </Switch>
        </div>
    )

    } else {
      console.log("n logado")
      return(
        <div className="App">
          <Fragment>
            {/* {SimpleExpansionPanel()} */}
          </Fragment>
         
          <Switch>
          <Route exact path="/" render={(props) => <Login {...props} getUser={this.getTheUser}/>}/>
              <Route path="/cadastro" component={Cadastro} />
              <ProtectedRoute user={this.state.loggedInUser} path="/laudos" component={Laudos} />
              <Route path="/maintable" component={MainTable} />
              <Route path="/simpleExpansion" component={SimpleExpansionPanel} />

          </Switch>
        </div> 
      )
    }
  }
} 

export default App;
