import React, { Component } from "react";
// import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import VoiceRecognition from "./Components/VoiceRecognition";

class FigadoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensao: "",
      homogeneo: false,
      esteatotico: false,
      hepatopiaCronica: false,
      ciscoSimples: false,
      cistoSimplesMM: 0,
      ciscoSimplesSit: "",
      variosCiscos: false,
      variosCiscosMM: 0,
      variosCiscosSit: "",
      noduloSolido: false,
      noduloSolidoTipo: "",
      noduloSolidoContorno: "",
      noduloSolidoHMM: 0,
      noduloSolidoVMM: 0,
      noduloSolidoSit: "",
      calcificacaoGrosseira: false,
      calcificacaoGrosseiraMM: 0,
      calcificacaoGrosseiraSit: "",
      age: ""
    };
    this.typeControl = {
      checkBox: [
        "homogeneo",
        "esteatotico",
        "hepatopiaCronica",
        "ciscoSimples",
        "variosCiscos",
        "noduloSolido",
        "calcificacaoGrosseira"
      ],
      text: [
        "dimensao",
        "ciscoSimplesSit",
        "variosCiscosSit",
        "noduloSolidoContorno",
        "noduloSolidoTipo",
        "noduloSolidoSit",
        "calcificacaoGrosseiraSit",
        "age"
      ],
      select: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeCheck = name => event => {
    console.log(event.target);
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  handleChange = name => event => {
    console.log(event.target);
    if (event.target.type === "checkbox") {
      this.setState({ ...this.state, [name]: event.target.checked });
    } else {
      this.setState({ ...this.state, [name]: event.target.value });
    }
  };

  handleChangeSelect = event => {
    console.log(event.target);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    this.setState({
      dimensao: "",
      homogeneo: false,

      esteatotico: false,
      hepatopiaCronica: false,

      ciscoSimples: false,
      cistoSimplesMM: 0,
      ciscoSimplesSit: "",

      variosCiscos: false,
      variosCiscosMM: 0,
      variosCiscosSit: "",

      noduloSolido: false,
      noduloSolidoTipo: "",
      noduloSolidoContorno: "",
      noduloSolidoHMM: 0,
      noduloSolidoVMM: 0,
      noduloSolidoSit: "",

      calcificacaoGrosseira: false,
      calcificacaoGrosseiraMM: 0,
      calcificacaoGrosseiraSit: "",

      age: ""
    });
  }

  render() {
    return (
      <div className="mainDivGF">
        <form onSubmit={this.handleSubmit}>
          <table>
            <thead>
              <tr>
                <td>
                  <h2>Laudo de Figado</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {/* ---------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.homogeneo}
                        onChange={this.handleChangeCheck("homogeneo")}
                        value="homogeneo"
                      />
                    }
                    label="Homogeneo"
                  />
                </td>
                <td>
                  <TextField
                    // id="outlined-with-placeholder"
                    label="Tipo de Dimensao?"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("dimensao")}
                    value={this.state.dimensao}
                  />
                </td>
              </tr>
              {/* -------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.esteatotico}
                        onChange={this.handleChangeCheck("esteatotico")}
                        value="esteatotico"
                      />
                    }
                    label="Esteatotico"
                  />
                </td>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.hepatopiaCronica}
                        onChange={this.handleChangeCheck("hepatopiaCronica")}
                        value="hepatopiaCronica"
                      />
                    }
                    label="Hepatopia Cronica"
                  />
                </td>
              </tr>
              {/* --------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.ciscoSimples}
                        onChange={this.handleChangeCheck("ciscoSimples")}
                        value="ciscoSimples"
                      />
                    }
                    label="Cisco Simples"
                  />
                </td>
                <td>
                  {" "}
                  <TextField
                    id="outlined-number"
                    label="Tamanho em MM"
                    value={this.state.cistoSimplesMM}
                    onChange={this.handleChange("cistoSimplesMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-with-placeholder"
                    label="Situado ?"
                    margin="dense"
                    variant="outlined"
                    // value="ciscoSimplesSit"
                    onChange={this.handleChange("ciscoSimplesSit")}
                    value={this.state.ciscoSimplesSit}
                  />
                </td>
              </tr>
              {/* --------------------------------------- */}
              <tr>
                <td>
                  {" "}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.variosCiscos}
                        onChange={this.handleChangeCheck("variosCiscos")}
                        value="variosCiscos"
                      />
                    }
                    label="Varios Ciscos"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-number"
                    label="Tamanho do maior (mm)"
                    value={this.state.variosCiscosMM}
                    onChange={this.handleChange("variosCiscosMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-with-placeholder"
                    label="Situado ?"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("variosCiscosSit")}
                    value={this.state.variosCiscosSit}
                  />
                </td>
              </tr>
              {/* --------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.noduloSolido}
                        onChange={this.handleChangeCheck("noduloSolido")}
                        value="noduloSolido"
                      />
                    }
                    label="Nodulo Solido"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-with-placeholder"
                    label="Tipo ?"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("noduloSolidoTipo")}
                    value={this.state.noduloSolidoTipo}
                  />
                </td>
                <td>
                  {" "}
                  <TextField
                    // id="outlined-with-placeholder"
                    label="Contorno"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("noduloSolidoContorno")}
                    value={this.state.noduloSolidoContorno}
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-number"
                    label="Tamanho Horizontal (mm))"
                    value={this.state.noduloSolidoHMM}
                    onChange={this.handleChange("noduloSolidoHMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </td>
                <td>x</td>
                <td>
                  {" "}
                  <TextField
                    id="outlined-number"
                    label="Tamanho Vertical (mm)"
                    value={this.state.noduloSolidoVMM}
                    onChange={this.handleChange("noduloSolidoVMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-with-placeholder"
                    label="Situado ?"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("noduloSolidoSit")}
                    value={this.state.noduloSolidoSit}
                  />
                </td>
              </tr>
              {/* ---------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.calcificacaoGrosseira}
                        onChange={this.handleChangeCheck(
                          "calcificacaoGrosseira"
                        )}
                        value="calcificacaoGrosseira"
                      />
                    }
                    label="Calcificacao Grosseira"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-number"
                    label="Tamanho em MM"
                    value={this.state.calcificacaoGrosseiraMM}
                    onChange={this.handleChange("calcificacaoGrosseiraMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </td>
                <td>
                  <TextField
                    id="outlined-with-placeholder"
                    label="Situado ?"
                    margin="dense"
                    variant="outlined"
                    onChange={this.handleChange("calcificacaoGrosseiraSit")}
                    value={this.state.calcificacaoGrosseiraSit}
                  />
                </td>
              </tr>
              {/* ----------------------------------------- */}
              <tr>
                <td>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
                  </Button>
                </td>
              </tr>
              {/* ------------------------------------------ */}
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default FigadoForm;
