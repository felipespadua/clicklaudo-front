import React, { Component } from "react";
// import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

class FigadoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dimensao: "",
      Homogeneo: false,

      Esteatotico: false,
      HepatopiaCronica: false,

      CiscoSimples: false,
      cistoSimplesMM: 0,
      CiscoSimplesSit: "",

      VariosCiscos: false,
      VariosCiscosMM: 0,
      VariosCiscosSit: "",

      NoduloSolido: false,
      NoduloSolidoTipo: "",
      NoduloSolidoContorno: "",
      NoduloSolidoHMM: 0,
      NoduloSolidoVMM: 0,
      NoduloSolidoSit: "",

      CalcificacaoGrosseira: false,
      CalcificacaoGrosseiraMM: 0,
      CalcificacaoGrosseiraSit: "",

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
    alert("submit");
    console.log(this.state);
    event.preventDefault();
    this.setState = {
      dimensao: "",
      Homogeneo: false,

      Esteatotico: false,
      HepatopiaCronica: false,

      CiscoSimples: false,
      cistoSimplesMM: 0,
      CiscoSimplesSit: "",

      VariosCiscos: false,
      VariosCiscosMM: 0,
      VariosCiscosSit: "",

      NoduloSolido: false,
      NoduloSolidoTipo: "",
      NoduloSolidoContorno: "",
      NoduloSolidoHMM: 0,
      NoduloSolidoVMM: 0,
      NoduloSolidoSit: "",

      CalcificacaoGrosseira: false,
      CalcificacaoGrosseiraMM: 0,
      CalcificacaoGrosseiraSit: "",

      age: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.Homogeneo}
              onChange={this.handleChangeCheck("Homogeneo")}
              value="Homogeneo"
            />
          }
          label="Homogeneo"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Tipo de Dimensao?"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("dimensao")}
        />
        <br />
        {/* -------------------------------------------------- */}
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.Esteatotico}
              onChange={this.handleChangeCheck("Esteatotico")}
              value="Esteatotico"
            />
          }
          label="Esteatotico"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.HepatopiaCronica}
              onChange={this.handleChangeCheck("HepatopiaCronica")}
              value="HepatopiaCronica"
            />
          }
          label="Hepatopia Cronica"
        />
        <br />
        {/* -------------------------------------------------- */}
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.CiscoSimples}
              onChange={this.handleChangeCheck("CiscoSimples")}
              value="CiscoSimples"
            />
          }
          label="Cisco Simples"
        />
        <TextField
          id="outlined-number"
          label="Tamanho em MM"
          value={this.state.cistoSimplesMM}
          onChange={this.handleChange("cistoSimplesMM")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Situado ?"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("CiscoSimplesSit")}
        />
        <br />
        {/* -------------------------------------------------- */}
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.VariosCiscos}
              onChange={this.handleChangeCheck("VariosCiscos")}
              value="VariosCiscos"
            />
          }
          label="Varios Ciscos"
        />
        <TextField
          id="outlined-number"
          label="Tamanho do maior em MM"
          value={this.state.VariosCiscosMM}
          onChange={this.handleChange("VariosCiscosMM")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Situado ?"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("VariosCiscosSit")}
        />
        <br />
        {/* -------------------------------------------------- */}
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.NoduloSolido}
              onChange={this.handleChangeCheck("NoduloSolido")}
              value="NoduloSolido"
            />
          }
          label="Nodulo Solido"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Tipo ?"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("NoduloSolidoTipo")}
        />
        <TextField
          id="outlined-with-placeholder"
          label="Contorno"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("NoduloSolidoContorno")}
        />
        <TextField
          id="outlined-number"
          label="Tamanho Horizontal em MM"
          value={this.state.NoduloSolidoHMM}
          onChange={this.handleChange("NoduloSolidoHMM")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        x
        <TextField
          id="outlined-number"
          label="Tamanho  Vertical em MM"
          value={this.state.NoduloSolidoVMM}
          onChange={this.handleChange("NoduloSolidoVMM")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Situado ?"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("NoduloSolidoSit")}
        />
        <br />
        {/* -------------------------------------------------- */}
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.CalcificacaoGrosseira}
              onChange={this.handleChangeCheck("CalcificacaoGrosseira")}
              value="CalcificacaoGrosseira"
            />
          }
          label="Calcificacao Grosseira"
        />
        <TextField
          id="outlined-number"
          label="Tamanho em MM"
          value={this.state.CalcificacaoGrosseiraMM}
          onChange={this.handleChange("CalcificacaoGrosseiraMM")}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-with-placeholder"
          label="Situado ?"
          placeholder="Placeholder"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange("CalcificacaoGrosseiraSit")}
        />
        <br />
        {/* -------------------------------------------------- */}
        <FormControl variant="outlined">
          <InputLabel ref={this.inputLabel} htmlFor="outlined-age-simple">
            Age
          </InputLabel>
          <Select
            value={this.state.age}
            onChange={this.handleChangeSelect}
            labelWidth={this.labelWidth}
            inputProps={{
              name: "age",
              id: "outlined-age-simple"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <input type="submit" />
      </form>
    );
  }
}

export default FigadoForm;
