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
import ApiService from './Services/ApiService'

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

  updateUser = async () =>  {
    console.log(this.props)
    try{
      const apiHandler = new ApiService()
      const id = this.props.rest.match.params.id;
      const { homogenio,size1,size2,size3,contornos,residuo,residuoML,exameViaTransretal,noduloPeriferica,noduloPerifericaTipo,noduloSize1,noduloSize2,noduloSize3,noduloLocal,biopsia,fragmentos} = this.state;
      const response = await apiHandler.updateProstate(homogenio,size1,size2,size3,contornos,residuo,residuoML,exameViaTransretal,noduloPeriferica,noduloPerifericaTipo,noduloSize1,noduloSize2,noduloSize3,noduloLocal,biopsia,fragmentos,id)
      console.log("worked")
      this.props.rest.history.push(`/laudofinal/${response.response._id}`)
      console.log(response)
    }catch(err){
      console.log(err,"=>")
    }
    //.then(function(itemResponse) {
    //  console.log(this.props)
      //this.props.history.push(`newprostataview/${itemResponse._id}`)
   
    //})
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
    
  }

  //   showExameTransversal() {
  //     const { show } = this.state;
  //     this.setState({
  //       show: !show
  //     });
  //   }

  render() {
 
    console.log('PROPS!!!!!',this.props.rest.match.params)
    return (
      <div className="mainDivGF">
        <form className="box-shadow p-4 mt-5  marginBottom"   onSubmit={this.handleSubmit}>
          <table className="">
            <thead>
              <tr>
                <td colspan="2">
                  <h2>Laudo da Prostata</h2>
                </td>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <td>
                  <VoiceRecognition
                    prevState={this.state}
                    handleChangeVR={this.handleChangeBySpeech}
                  />
                </td>
              </tr>
              <br />
              {/* ---------------------------------------- */}
              <tr>
                <td style={{fontWeight:"400"}}>Quais suas dimensões ? (C1)</td>
                <td>
                  <TextField
                    required
                    id="outlined-number"
                    label="Largura prostata"
                    value={this.state.size1}
                    onChange={this.handleChange("size1")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>
                  <TextField
                    required
                    id="outlined-number"
                    label="Altura prostata"
                    value={this.state.size2}
                    onChange={this.handleChange("size2")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>
                  <TextField
                    required  
                    id="outlined-number"
                    label="Espessura prostata"
                    value={this.state.size3}
                    onChange={this.handleChange("size3")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
              </tr>
              {/* -------------------------------------- */}
              <tr>
                <td style={{fontWeight:"400"}}>Qual o tipo do contorno ? (C2) </td>
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
                    label="Possui resíduo ? (C3) "
                  />
                </td>
                <td>
                  {" "}
                  <TextField
                    required
                    id="outlined-number"
                    label="Quantidade(ml)"
                    value={this.state.residuoML}
                    onChange={this.handleChange("residuoML")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
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
                    label="Exame via transretal ? (C4)"
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
          <Button onClick={() => this.updateUser()} variant="contained" color="primary" >
            Enviar
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
      <form className="exameTransDiv">
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
                  label="Possui nódulo na zona periférica?               Qual o seu tipo ? (C5) "
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
                    Hiperecogenico , Isoecogenico ou Hipoecogenico
                    <MenuItem value={"Hiperecogenico"}>Hiperecogenico</MenuItem>
                    <MenuItem value={"Hipoecogenico"}>Hipoecogenico</MenuItem>
                    <MenuItem value={"Isoecogenico"}>Isoecogenico</MenuItem>
                  </Select>
                </FormControl>
              </td>
            </tr>
            <tr>
              <td>
                <TextField 
                  required
                  id="outlined-number"
                  label="Largura nódulo"
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
                  required
                  id="outlined-number"
                  label="Altura nódulo"
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
                  required
                  id="outlined-number"
                  label="Espessura nódulo(mm)"
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
              <td style={{fontWeight:"400"}}> Aonde está o nódulo?  (C6)</td>
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
                    <MenuItem value={"Zona Periférica"}>
                      Zona Periférica
                    </MenuItem>
                    <MenuItem value={"Zona Central"}>Zona Central</MenuItem>
                    <MenuItem value={"Zona de Transição"}>
                      Zona de Transição
                    </MenuItem>
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
                  label="Realizada a Biopsia? (C7)"
                />
              </td>
              <td>
                <TextField
                  required
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
      </form>
    );
  }
}

export default ProstataForm;
