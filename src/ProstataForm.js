import React, { Component } from "react";
// import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import VoiceRecognition from "./Components/VoiceRecognition";
import "./App.css";

class ProstataForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      size1: 0,
      size2: 0,
      size3: 0,
      contornos: "",
      residuo: false,
      residuoML: 0,
      exameViaTransretal: false,
      noduloPeriferica: false,
      noduloPerifericaTipo: "",
      noduloSize1: 0,
      noduloSize2: 0,
      noduloSize3: 0,
      noduloLocal: "",
      biopsia: false,
      fragmentos: 0
    };
    this.typeControl = {
      checkBox: ["exameViaTransretal"],
      text: ["size1", "size2", "size3"],
      select: ["contornos"]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeBySpeech = this.handleChangeBySpeech.bind(this);
  }

  handleChange = name => event => {
    console.log(event.target);
    if (event.target.type === "checkbox") {
      this.setState({ ...this.state, [name]: event.target.checked });
    } else {
      this.setState({ ...this.state, [name]: event.target.value });
    }
  };

  handleChangeBySpeech = name => {
    let checkBoxes = this.typeControl.checkBox;
    let texts = this.typeControl.text;
    let selects = this.typeControl.selects;
    if (checkBoxes.includes(name)) {
      this.setState({ ...this.state, [name]: !this.state.name });
    }
  };

  handleChangeSelect = name => event => {
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
      show: false,
      size1: 0,
      size2: 0,
      size3: 0,
      contornos: "",
      residuo: false,
      residuoML: 0,
      exameViaTransretal: false,
      noduloPeriferica: false,
      noduloPerifericaTipo: "",
      noduloSize1: 0,
      noduloSize2: 0,
      noduloSize3: 0,
      noduloLocal: "",
      biopsia: false,
      fragmentos: 0
    });
  }

  //   showExameTransversal() {
  //     const { show } = this.state;
  //     this.setState({
  //       show: !show
  //     });
  //   }

  render() {
    return (
      <div className="mainDivGF">
        <form onSubmit={this.handleSubmit}>
          <table>
            <thead>
              <tr>
                <td colspan="2">
                  <h2>Laudo da Prostata</h2>
                </td>
              </tr>
            </thead>
            <tbody>
              {/* ---------------------------------------- */}
              <tr>
                <td>Quais suas Dimensoes ?</td>
                <td>
                  <TextField
                    id="outlined-number"
                    label="Largura Prostata"
                    value={this.state.size1}
                    onChange={this.handleChange("size1")}
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
                    id="outlined-number"
                    label="Altura Prostata"
                    value={this.state.size2}
                    onChange={this.handleChange("size2")}
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
                    id="outlined-number"
                    label="Espessura Prostata"
                    value={this.state.size3}
                    onChange={this.handleChange("size3")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
                  />
                </td>
              </tr>
              {/* -------------------------------------- */}
              <tr>
                <td>Qual o tipo do Contorno ?</td>
                <td>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      value={this.state.contornos}
                      onChange={this.handleChangeSelect("contornos")}
                      // labelWidth={this.labelWidth}
                      name="contornos"
                      inputProps={{
                        name: "contornos",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Normais"}>Normais</MenuItem>
                      <MenuItem value={"Regulares"}>Regulares</MenuItem>
                      <MenuItem value={"Irregulares"}>Irregulares</MenuItem>
                      <MenuItem value={"Lobulados"}>Lobulados</MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
              {/* --------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.residuo}
                        onChange={this.handleChange("residuo")}
                        value={this.state.residuo}
                      />
                    }
                    label="Possui Residuo ?"
                  />
                </td>
                <td>
                  {" "}
                  <TextField
                    id="outlined-number"
                    label="Quantidade(ml)"
                    value={this.state.residuoML}
                    onChange={this.handleChange("residuoML")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    variant="outlined"
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
                        checked={this.state.exameViaTransretal}
                        onChange={this.handleChange("exameViaTransretal")}
                        value={this.state.exameViaTransretal}
                      />
                    }
                    label="Exame Via Transretal ?"
                  />
                </td>
              </tr>
              {/* ------------------------------------------ */}
            </tbody>
          </table>
          {this.state.exameViaTransretal && (
            <ExameTransversal
              {...this.state}
              handleChangeByToggle={this.handleChange}
              handleChangeSelectByToggle={this.handleChangeSelect}
            />
          )}
          <br />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

class ExameTransversal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="exameTransDiv">
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td colSpan="3">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.noduloPeriferica}
                      onChange={this.props.handleChangeByToggle(
                        "noduloPeriferica"
                      )}
                      value={this.props.noduloPeriferica}
                    />
                  }
                  label="Possui nodulo na zona periferica?                 Qual o seu tipo ?"
                />

                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                  <Select
                    value={this.props.noduloPerifericaTipo}
                    onChange={this.props.handleChangeSelectByToggle(
                      "noduloPerifericaTipo"
                    )}
                    // labelWidth={this.labelWidth}
                    name="noduloPerifericaTipo"
                    inputProps={{
                      name: "noduloPerifericaTipo",
                      id: "outlined-age-simple"
                    }}
                    margin="dense"
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
                <TextField
                  id="outlined-number"
                  label="Largura Prostata"
                  value={this.props.noduloSize1}
                  onChange={this.props.handleChangeByToggle("noduloSize1")}
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
                  id="outlined-number"
                  label="Altura Prostata"
                  value={this.props.noduloSize2}
                  onChange={this.props.handleChangeByToggle("noduloSize2")}
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
                  id="outlined-number"
                  label="Espessura Prostata(mm)"
                  value={this.props.noduloSize3}
                  onChange={this.props.handleChangeByToggle("noduloSize3")}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="dense"
                  variant="outlined"
                />
              </td>
            </tr>
            <tr>
              <td>Aonde esta situado o nodulo?</td>
              <td>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                  <Select
                    value={this.props.noduloLocal}
                    onChange={this.props.handleChangeSelectByToggle(
                      "noduloLocal"
                    )}
                    // labelWidth={this.labelWidth}
                    name="noduloLocal"
                    inputProps={{
                      name: "noduloLocal",
                      id: "outlined-age-simple"
                    }}
                    margin="dense"
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
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.props.biopsia}
                      onChange={this.props.handleChangeByToggle("biopsia")}
                      value={this.props.biopsia}
                    />
                  }
                  label="Realizada a Biopsia?"
                />
              </td>
              <td>
                <TextField
                  id="outlined-number"
                  label="Fragmentos"
                  value={this.props.fragmentos}
                  onChange={this.props.handleChangeByToggle("fragmentos")}
                  type="number"
                  InputLabelProps={{
                    shrink: true
                  }}
                  margin="dense"
                  variant="outlined"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProstataForm;
