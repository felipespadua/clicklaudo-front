import React from "react";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "./App.css";

import Autocomplete from '@material-ui/lab/Autocomplete';


const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function GeneralForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    data: new Date(),
    clinica: "",
    medico: "",
    convenio: "",
    medicoSolicitante: "",

    dataDeNasc: new Date(),
    nome: "",
    idade: "",
    telefone: "",
    email: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  //   const [selectedDate, setSelectedDate] = React.useState(
  //     new Date("2014-08-18T21:11:54")
  //   );

  const handleDateChange = dateName => date => {
    setState({
      ...state,
      [dateName]: date
    });
  };

  const handleChange = name => event => {
    // console.log(event);
    setState({
      ...state,
      [name]: event.target.value
    });
  };
  

  const handleSubmit = event => {
    console.log(state);
    event.preventDefault();
    //axios
    setState({
      data: undefined,
      clinica: "",
      medico: "",
      convenio: "",
      medicoSolicitante: "",

      dataDeNasc: undefined,
      nome: "",
      idade: "",
      telefone: "",
      email: ""
    });
  };

  return (

    <div className="mainDivGF">
      <form className="box-shadow p-4 "  onSubmit={handleSubmit}>
        <h3>Novo Laudo</h3>
        <table>
          <thead>
            <tr>
              <td>
                <h3>Exame</h3>
              </td>
              <td className="pacienteTd">
                <h3>Paciente</h3>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <tr>
                  <td>
                    <label htmlFor="">Data:</label>
                  </td>
                  <td>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          format="dd/MM/yyyy"
                          value={state.data}
                          onChange={handleDateChange("data")}
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Clinica:</label>
                  </td>

                  <td>
                    <FormControl
                      // variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel
                        ref={inputLabel}
                        htmlFor="outlined-age-simple"
                      ></InputLabel>
                      <Select
                        native
                        margin="dense"
                        value={state.clinica}
                        onChange={handleChange("clinica")}
                        labelWidth={labelWidth}
                        inputProps={{
                          name: "clinica",
                          id: "outlined-clinica"
                        }}
                      >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Medico:</label>
                  </td>
                  <td>
                    <FormControl
                      // variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Medico
                </InputLabel> */}
                      <Select
                        native
                        value={state.medico}
                        onChange={handleChange("medico")}
                        name="medico"
                        margin="dense"
                        labelWidth={labelWidth}
                        inputProps={{
                          name: "medico",
                          id: "outlined-medico"
                        }}
                      >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Convenio:</label>
                  </td>
                  <td>
                    <FormControl
                      // variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Convenio
                </InputLabel> */}
                      <Select
                        native
                        value={state.convenio}
                        onChange={handleChange("convenio")}
                        name="convenio"
                        margin="dense"
                        labelWidth={labelWidth}
                        inputProps={{
                          name: "convenio",
                          id: "outlined-convenio"
                        }}
                      >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Medico Solicitante:</label>
                  </td>
                  <td>
                    <FormControl
                      // variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
                  Convenio
                </InputLabel> */}
                      <Select
                        native
                        name="medicoSolicitante"
                        value={state.medicoSolicitante}
                        onChange={handleChange("medicoSolicitante")}
                        margin="dense"
                        labelWidth={labelWidth}
                        inputProps={{
                          name: "medicoSolicitante",
                          id: "outlined-medicoSolicitante"
                        }}
                      >
                        <option value="" />
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
              </td>
              {/* --------------------------------------------------------------------------------------------- */}
              <td className="mainTd">
                <tr>
                  <td>
                    <label htmlFor="">Data de Nasc: </label>
                  </td>
                  <td>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">
                        <KeyboardDatePicker
                          margin="normal"
                          id="date-picker-dialog"
                          format="dd/MM/yyyy"
                          value={state.dataDeNasc}
                          onChange={handleDateChange("dataDeNasc")}
                          KeyboardButtonProps={{
                            "aria-label": "change date"
                          }}
                        />
                      </Grid>
                    </MuiPickersUtilsProvider>
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
                      // variant="outlined"
                      name="nome"
                      type="text"
                      value={state.nome}
                      onChange={handleChange("nome")}
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
                      value={state.idade}
                      onChange={handleChange("idade")}
                      type="number"
                      InputLabelProps={{
                        shrink: true
                      }}
                      // variant="outlined"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label htmlFor="">Telefone:</label>
                  </td>
                  <td>
                    <TextField
                      id="outlined-tel"
                      margin="dense"
                      // label="Telefone"
                      // variant="outlined"
                      name="telefone"
                      type="tel"
                      value={state.telefone}
                      onChange={handleChange("telefone")}
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
                      // variant="outlin  ed"
                      onChange={handleChange("email")}
                      value={state.email}
                    />
                  </td>
                </tr>
              </td>
              
              
            </tr>
          </tbody>
        </table>
        <br />
       <p>Tipo de exame</p>
    <Autocomplete
    options={exam}
    getOptionLabel= {option => option.title}

    style={{ width: 300 }}
    renderInput={params => (
    <TextField {...params} placeholder="Selecione o exame"  fullWidth />
    )}
  />
  <br/>
  <Button 
  type="submit"
  href={exam[0].href}
  // fullWidth
  variant="contained"
  color="primary"
  className={classes.submit}
  >
  Enviar 
  </Button>

      </form>
    </div>  
  );
}



const exam = [
  { title: 'Figado', href: '/NewFigadoView'},
  { title: 'Prostata'},
];
console.log(exam[0].href, '<====')

