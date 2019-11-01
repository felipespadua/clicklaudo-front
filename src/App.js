import React from "react";
import { Switch, Route } from "react-router-dom";
import VoiceRecognition from "./Components/VoiceRecognition";
import "./App.css";
import Login from "./Components/auth/Login";
import SignUp from "./Components/auth/SignUp";
import Laudos from "./Laudos";
import MainTable from "./MainTable";
import Medicos from "./Medicos";
import MedicosSolicitante from "./MedicosSolicitante";
import Clinicas from "./Clinicas";
import NewLaudoView from "./NewLaudoView";
import NewProstataView from "./NewProstataView";
import Convenios from "./Convenios";
import NewFigadoView from "./NewFigadoView";
import SimpleExpansionPanel from "./Expansion";
import AuthService from "./Components/auth/auth-service";
import ProtectedRoute from "./Components/auth/protected-route";
import Preview from "./Components/Preview";

// import { Switch } from? '@material-ui/core';
import LandingPage from "./LandingPage";
import LandingPageCover from "./LandingPageCover";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUser: null
    };
    this.service = new AuthService();
  }
  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({ loggedInUser: response });
        })
        .catch(err => {
          this.setState({ loggedInUser: false });
        });
    }
  }

  getTheUser = userObj => {
    this.setState({ loggedInUser: userObj });
  };
  render() {
    if (this.state.loggedInUser) {
      console.log("logado");
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPageCover} />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} getUser={this.getTheUser} />}
            />
            <Route path="/signup" component={SignUp} />
            <ProtectedRoute
              path="/laudos"
              user={this.state.loggedInUser}
              component={Laudos}
            />
            <Route path="/maintable" component={MainTable} />
            <Route path="/medicos" component={Medicos} />
            <Route path="/medicossolicitante" component={MedicosSolicitante} />
            <Route path="/convenios" component={Convenios} />
            <Route path="/clinicas" component={Clinicas} />
            <Route path="/landingPage" component={LandingPageCover} />
            <Route
              exact
              path="/newfigadoview/:id"
              render={props => <NewFigadoView {...props} />}
            />
            <Route
              exact
              path="/newprostataview/:id"
              render={props => <NewProstataView {...props} />}
            />
            <Route
              path="/newlaudoview"
              render={props => <NewLaudoView {...props} />}
            />
            <Route path="/simpleexpansion" component={SimpleExpansionPanel} />
          </Switch>
        </div>
      );
    } else {
      console.log("n logado");
      return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPageCover} />
            <Route
              exact
              path="/login"
              render={props => <Login {...props} getUser={this.getTheUser} />}
            />
            <Route path="/signup" component={SignUp} />
            <ProtectedRoute
              user={this.state.loggedInUser}
              path="/laudos"
              component={Laudos}
            />
            <Route path="/laudos" component={Laudos} />
            <Route path="/simpleexpansion" component={SimpleExpansionPanel} />
            <Route exact path="/newfigadoview/:id" component={NewFigadoView} />
            <Route path="/medicos" component={Medicos} />
            <Route path="/convenios" component={Convenios} />
            <Route path="/clinicas" component={Clinicas} />
            <Route path="/medicossolicitante" component={MedicosSolicitante} />
            <Route path="/landingPage" component={LandingPageCover} />
            <Route
              path="/newlaudoview"
              render={props => <NewLaudoView {...props} />}
            />
            <Route
              exact
              path="/newprostataview/:id"
              render={props => <NewProstataView {...props} />}
            />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
