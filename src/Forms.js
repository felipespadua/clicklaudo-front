import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      clinica: "",
      medico: "",
      convenio: "",
      medicoSolicitante: "",

      dataDeNasc: 0,
      nome: "",
      idade: "",
      telefone: "",
      email: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    //axios
    this.setState({
      date: 0,
      clinica: "",
      medico: "",
      convenio: "",
      medicoSolicitante: "",

      dataDeNasc: 0,
      nome: "",
      idade: "",
      telefone: "",
      email: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Exame</h2>
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <label htmlFor="">Data</label>
              </td>
              <td>
                <TextField
                  id="date"
                  name="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                  type="date"
                  //   defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </td>
              <td>
                <label htmlFor="">Clinica</label>
              </td>

              <td>
                <FormControl variant="outlined">
                  <InputLabel
                    ref={this.inputLabel}
                    htmlFor="outlined-age-simple"
                  >
                    Clinica
                  </InputLabel>
                  <Select
                    value={this.state.clinica}
                    onChange={this.handleChange}
                    labelWidth={this.labelWidth}
                    inputProps={{
                      name: "clinica",
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
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Medico</label>
              </td>
              <td>
                <select
                  value={this.state.medico}
                  onChange={this.handleChange}
                  name="medico"
                >
                  <option value="laranja">Laranja</option>
                  <option value="limao">Limão</option>
                  <option defaultValue="coco">Coco</option>
                  <option value="manga">Manga</option>
                </select>
              </td>
              <td>
                <label htmlFor="">Convenio</label>
              </td>
              <td>
                <select
                  value={this.state.convenio}
                  onChange={this.handleChange}
                  name="convenio"
                >
                  <option value="laranja">Laranja</option>
                  <option value="limao">Limão</option>
                  <option defaultValue="coco">Coco</option>
                  <option value="manga">Manga</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="">Medico Solicitante</label>
              </td>
              <td>
                <select
                  name="medicoSolicitante"
                  value={this.state.medicoSolicitante}
                  onChange={this.handleChange}
                >
                  <option value="laranja">Laranja</option>
                  <option value="limao">Limão</option>
                  <option defaultValue="coco">Coco</option>
                  <option value="manga">Manga</option>
                </select>
              </td>
            </tr>

            <tr>
              <td>
                <h2>Paciente</h2>
                {/* ------------------------------------------------------------------------------------------ */}
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Data de Nasc:</label>
              </td>
              <td>
                <TextField
                  id="date"
                  name="dataDeNasc"
                  value={this.state.dataDeNasc}
                  onChange={this.handleChange}
                  type="date"
                  //   defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Nome:</label>
              </td>
              <td>
                <TextField
                  id="outlined-dense"
                  margin="dense"
                  variant="outlined"
                  name="nome"
                  value={this.state.nome}
                  onChange={this.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Idade:</label>
              </td>
              <td>
                <TextField
                  id="outlined-number"
                  name="idade"
                  margin="dense"
                  value={this.state.idade}
                  onChange={this.handleChange}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="outlined"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">Telefone:</label>
              </td>
              <td>
                <TextField
                  id="outlined-dense"
                  margin="dense"
                  label="Telefone"
                  variant="outlined"
                  name="telefone"
                  value={this.state.telefone}
                  onChange={this.handleChange}
                />
              </td>
            </tr>

            <tr>
              <td>
                <label htmlFor="">E-mail:</label>
              </td>
              <td>
                <TextField
                  id="outlined-email-input"
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="dense"
                  variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <Button type="submit" variant="contained" color="primary">
          Primary
        </Button>
      </form>
    );
  }
}

export default General;

// Erro ao mandar a data junto com algo a mais
