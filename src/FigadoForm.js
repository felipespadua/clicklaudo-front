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
import Preview from "./Components/Preview";
import NewWindow from "react-new-window";
import ApiService from './Services/ApiService'


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
    this.handleChangeBySpeech = this.handleChangeBySpeech.bind(this);
  }

  handleChange = name => event => {
   
    if (event.target.type === "checkbox") {
      this.setState({ ...this.state, [name]: event.target.checked });
    } else {
      this.setState({ ...this.state, [name]: event.target.value });
    }
  };

  handleChangeBySpeech = name => {
    console.log(name);
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

     updateUser = async (onclick) =>  {
      try{
      const apiHandler = new ApiService()
      const id = this.props.rest.match.params.id;
       const {dimensao,homogeneo,esteatotico,hepatopiaCronica,ciscoSimples,cistoSimplesMM,ciscoSimplesSit,variosCiscos,variosCiscosMM,variosCiscosSit,noduloSolido,noduloSolidoTipo,noduloSolidoContorno,noduloSolidoHMM,noduloSolidoVMM,noduloSolidoSi,calcificacaoGrosseira,calcificacaoGrosseiraMM,calcificacaoGrosseiraSit} = this.state;
     const response = await apiHandler.updateLiver(dimensao,homogeneo,esteatotico,hepatopiaCronica,ciscoSimples,cistoSimplesMM,ciscoSimplesSit,variosCiscos,variosCiscosMM,variosCiscosSit,noduloSolido,noduloSolidoTipo,noduloSolidoContorno,noduloSolidoHMM,noduloSolidoVMM,noduloSolidoSi,calcificacaoGrosseira,calcificacaoGrosseiraMM,calcificacaoGrosseiraSit,id)
     console.log(response)
     this.props.rest.history.push(`/finalLiver/${response.response._id}`)
    }catch(err){
      console.log(err)
    }
  }

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

      
    });
  }

  render() {

  
    return (
      <div className="mainDivGF p-5 mt-5">
        <form onSubmit={this.handleSubmit}>
          <table className="marginBottom">
            <thead>
              <tr>
                <td>
                  <h2>Laudo de Figado</h2>
                </td>
              </tr>
            </thead>
            <br />
            <tbody>
              {/* ---------------------------------------- */}
              <tr>
                <td>
                  <VoiceRecognition
                    prevState={this.state}
                    handleChangeVR={this.handleChangeBySpeech}
                  />
                </td>
              </tr>
              <br />
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.homogeneo}
                        onChange={this.handleChange("homogeneo")}
                        value={this.state.homogeneo}
                      />
                    }
                    label="Homogêneo"
                  />
                </td>
                <td>Quais são as dimensões apresentadas ?</td>
                <td>
                  <FormControl variant="">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      required  
                      value={this.state.dimensao}
                      onChange={this.handleChangeSelect("dimensao")}
                      // labelWidth={this.labelWidth}
                      name="dimensao"
                      inputProps={{
                        name: "dimensao",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Normais"}>Normais </MenuItem>
                      <MenuItem value={"Reduzidas"}>Reduzidas </MenuItem>
                      <MenuItem value={"Aumentadas"}>Aumentadas </MenuItem>
                    </Select>
                  </FormControl>
                </td>
                {/* <td>
                  <VoiceRecognition
                    prevState={this.state}
                    handleChangeVR={this.handleChangeBySpeech}
                  />
                </td> */}
              </tr>
              {/* -------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.esteatotico}
                        onChange={this.handleChange("esteatotico")}
                        value={this.state.esteatotico}
                      />
                    }
                    label="Esteatótico"
                  />
                </td>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.hepatopiaCronica}
                        onChange={this.handleChange("hepatopiaCronica")}
                        value={this.state.hepatopiaCronica}
                      />
                    }
                    label="Hepatopatia Crônica"
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
                        onChange={this.handleChange("ciscoSimples")}
                        value={this.state.ciscoSimples}
                      />
                    }
                    label="Cisco Simples"
                  />
                </td>
                <td>
                  {" "}
                  <TextField
                    required
                    id="outlined-number"
                    label="Tamanho(mm)"
                    value={this.state.cistoSimplesMM}
                    onChange={this.handleChange("cistoSimplesMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>Qual o segmento hepático do cisto ?</td>
                <td>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      value={this.state.ciscoSimplesSit}
                      onChange={this.handleChangeSelect("ciscoSimplesSit")}
                      // labelWidth={this.labelWidth}
                      name="ciscoSimplesSit"
                      inputProps={{
                        name: "ciscoSimplesSit",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Segmento hepático I"}>I </MenuItem>
                      <MenuItem value={"Segmento hepático II"}>II </MenuItem>
                      <MenuItem value={"Segmento hepático III"}>III </MenuItem>
                      <MenuItem value={"Segmento hepático IV"}>IV </MenuItem>
                      <MenuItem value={"Segmento hepático V"}>V </MenuItem>
                      <MenuItem value={"Segmento hepático VI"}>VI </MenuItem>
                      <MenuItem value={"Segmento hepático VII"}>VII </MenuItem>
                      <MenuItem value={"Segmento hepático VIII"}>
                        VIII{" "}
                      </MenuItem>
                    </Select>
                  </FormControl>
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
                        onChange={this.handleChange("variosCiscos")}
                        value={this.state.variosCiscos}
                      />
                    }
                    label="Varios Ciscos"
                  />
                </td>
                <td>
                  <TextField
                    required
                    id="outlined-number"
                    label="Tamanho do maior(mm)"
                    value={this.state.variosCiscosMM}
                    onChange={this.handleChange("variosCiscosMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>Qual o segmento hepático do cisto ?</td>
                <td>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      value={this.state.variosCiscosSit}
                      onChange={this.handleChangeSelect("variosCiscosSit")}
                      // labelWidth={this.labelWidth}
                      name="variosCiscosSit"
                      inputProps={{
                        name: "variosCiscosSit",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Segmento hepático I"}>I </MenuItem>
                      <MenuItem value={"Segmento hepático II"}>II </MenuItem>
                      <MenuItem value={"Segmento hepático III"}>III </MenuItem>
                      <MenuItem value={"Segmento hepático IV"}>IV </MenuItem>
                      <MenuItem value={"Segmento hepático V"}>V </MenuItem>
                      <MenuItem value={"Segmento hepático VI"}>VI </MenuItem>
                      <MenuItem value={"Segmento hepático VII"}>VII </MenuItem>
                      <MenuItem value={"Segmento hepático VIII"}>
                        VIII{" "}
                      </MenuItem>
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
                        checked={this.state.noduloSolido}
                        onChange={this.handleChange("noduloSolido")}
                        value={this.state.noduloSolido}
                      />
                    }
                    label="Nódulo Sólido"
                  />
                </td>
                <td>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      value={this.state.noduloSolidoTipo}
                      onChange={this.handleChangeSelect("noduloSolidoTipo")}
                      // labelWidth={this.labelWidth}
                      name="noduloSolidoTipo"
                      inputProps={{
                        name: "noduloSolidoTipo",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Hiperecogênico "}>
                        Hiperecogênico{" "}
                      </MenuItem>
                      <MenuItem value={"Hipoecogênico"}>
                        Hipoecogênico{" "}
                      </MenuItem>
                      <MenuItem value={"Isoecogênico"}>Isoecogênico </MenuItem>
                    </Select>
                  </FormControl>
                </td>
                <td>
                  {" "}
                  <TextField
                    required
                    // id="outlined-with-placeholder"
                    label="Contorno"
                    margin="dense"
                    // variant="outlined"
                    onChange={this.handleChange("noduloSolidoContorno")}
                    value={this.state.noduloSolidoContorno}
                  />
                </td>
                <td>
                  <TextField
                    required
                    id="outlined-number"
                    label="Tamanho Horizontal(mm)"
                    value={this.state.noduloSolidoHMM}
                    onChange={this.handleChange("noduloSolidoHMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>X</td>
                <td>
                  {" "}
                  <TextField
                    required
                    id="outlined-number"
                    label="Tamanho Vertical(mm)"
                    value={this.state.noduloSolidoVMM}
                    onChange={this.handleChange("noduloSolidoVMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>Qual o segmento hepático do Nódulo ?</td>
                <td>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      value={this.state.noduloSolidoSit}
                      onChange={this.handleChangeSelect("noduloSolidoSit")}
                      // labelWidth={this.labelWidth}
                      name="noduloSolidoSit"
                      inputProps={{
                        name: "noduloSolidoSit",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Segmento hepático I"}>I </MenuItem>
                      <MenuItem value={"Segmento hepático II"}>II </MenuItem>
                      <MenuItem value={"Segmento hepático III"}>III </MenuItem>
                      <MenuItem value={"Segmento hepático IV"}>IV </MenuItem>
                      <MenuItem value={"Segmento hepático V"}>V </MenuItem>
                      <MenuItem value={"Segmento hepático VI"}>VI </MenuItem>
                      <MenuItem value={"Segmento hepático VII"}>VII </MenuItem>
                      <MenuItem value={"Segmento hepático VIII"}>
                        VIII{" "}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
              {/* ---------------------------------------- */}
              <tr>
                <td>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={this.state.calcificacaoGrosseira}
                        onChange={this.handleChange("calcificacaoGrosseira")}
                        value="calcificacaoGrosseira"
                      />
                    }
                    label="Calcificação Grosseira"
                  />
                </td>
                <td>
                  <TextField
                    required
                    id="outlined-number"
                    label="Tamanho(mm)"
                    value={this.state.calcificacaoGrosseiraMM}
                    onChange={this.handleChange("calcificacaoGrosseiraMM")}
                    type="number"
                    InputLabelProps={{
                      shrink: true
                    }}
                    margin="dense"
                    // variant="outlined"
                  />
                </td>
                <td>Qual o segmento hepático da Calcificação ?</td>
                <td>
                  <FormControl variant="outlined">
                    <InputLabel htmlFor="outlined-age-simple"></InputLabel>
                    <Select
                      value={this.state.calcificacaoGrosseiraSit}
                      onChange={this.handleChangeSelect(
                        "calcificacaoGrosseiraSit"
                      )}
                      // labelWidth={this.labelWidth}
                      name="calcificacaoGrosseiraSit"
                      inputProps={{
                        name: "calcificacaoGrosseiraSit",
                        id: "outlined-age-simple"
                      }}
                      margin="dense"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Segmento hepático I"}>I </MenuItem>
                      <MenuItem value={"Segmento hepático II"}>II </MenuItem>
                      <MenuItem value={"Segmento hepático III"}>III </MenuItem>
                      <MenuItem value={"Segmento hepático IV"}>IV </MenuItem>
                      <MenuItem value={"Segmento hepático V"}>V </MenuItem>
                      <MenuItem value={"Segmento hepático VI"}>VI </MenuItem>
                      <MenuItem value={"Segmento hepático VII"}>VII </MenuItem>
                      <MenuItem value={"Segmento hepático VIII"}>
                        VIII{" "}
                      </MenuItem>
                    </Select>
                  </FormControl>
                </td>
              </tr>
              <br />
              {/* ----------------------------------------- */}
              <tr>
                <td>
                  <Button onClick={()=> this.updateUser()} variant="contained" color="primary" type="submit">
                    Enviar
                  </Button>
                </td>
              </tr>
              <tr>
                <td>
                  {/* <Button
                    variant="contained"
                    href="/preview"
                    color="primary"
                    type="submit"
                  >
                    Preview
                  </Button> */}
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
