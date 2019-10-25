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

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeCheck = this.handleChangeCheck.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeCheck = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
    console.log(this.state);
  };

  handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.value });
  };

  handleChangeSelect = event => {
    console.log(event);
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
                  id="outlined-with-placeholder"
                  label="Tipo de Dimensao?"
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleChange("dimensao")}
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
                />
              </td>
              <td>
                {" "}
                <TextField
                  id="outlined-with-placeholder"
                  label="Contorno"
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleChange("noduloSolidoContorno")}
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
                      onChange={this.handleChangeCheck("calcificacaoGrosseira")}
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
    );
  }
}

export default FigadoForm;
