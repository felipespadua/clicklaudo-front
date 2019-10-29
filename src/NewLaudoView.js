import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import GeneralForm from "./GeneralForm";
import FigadoForm from "./FigadoForm";

class NewLaudoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: ""
    };
    this.showGeneral = this.showGeneral.bind(this);
    this.showFigado = this.showFigado.bind(this);
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
      <div className="App">
        <button onClick={this.showGeneral} className="btn-change">
          General
        </button>
        <button onClick={this.showFigado} className="btn-change">
          Figado
        </button>
        <button onClick={this.showFigado} className="btn-change">
          Prostata
        </button>
        {this.state.show === "General" && <GeneralForm />}
        {this.state.show === "Figado" && <FigadoForm />}
        {this.state.show === "Prostata" && <FigadoForm />}
      </div>
    );
  }
}

export default NewLaudoView;
