import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import GeneralForm from "./GeneralForm";
import FigadoForm from "./FigadoForm";
import ProstataForm from "./ProstataForm";

import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './NavBar'
import Footer from './Footer'

import Button from '@material-ui/core/Button';

class NewLaudoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ""
    };
    this.showGeneral = this.showGeneral.bind(this);
    this.showFigado = this.showFigado.bind(this);
    this.showProstata = this.showProstata.bind(this);
  }
  showGeneral() {
    this.setState({
      show: "General"
    });
  }

  showFigado() {
    this.setState({
      show: "Figado"
    });
  }

  showProstata() {
    this.setState({
      show: "Prostata"
    });
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
      <div className="App">
          <Button
            type="submit" 
            // fullWidth
            variant="contained"
            color="primary"
            onClick={this.showGeneral}
          >
            General
          </Button>
          <Button
            type="submit" 
            // fullWidth
            variant="contained"
            color="primary"
            onClick={this.showFigado}
          >
            Figado
          </Button>
          <Button
            type="submit" 
            // fullWidth
            variant="contained"
            color="primary"
            onClick={this.showProstata}
          >
            Prostata
          </Button>
        {/* <button onClick={this.showGeneral} className="btn-change">
          General
        </button>
        <button onClick={this.showFigado} className="btn-change">
          Figado
        </button> */}
        {this.state.show === "General" && <GeneralForm />}
        {this.state.show === "Figado" && <FigadoForm />}
        {this.state.show === "Prostata" && <ProstataForm />}

      </div>
          <Footer/>
        </Router>
      </div>
    );
  }
}

export default NewLaudoView;
