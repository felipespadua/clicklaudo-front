import React, { useState, useEffect } from "react";
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
import ApiService from "./Services/ApiService";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Link from "@material-ui/core/Link";
import { Redirect } from 'react-router-dom'
import Paper from "@material-ui/core/Paper";
import CssBaseline from '@material-ui/core/CssBaseline';

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

export default function GeneralForm(props) {
  useEffect(() => function addUser(onclick) {});

  useEffect(onClick => function handleSubmit(onClick) {});

  
  // const useStyles = makeStyles(theme => ({
  //   root: {
  //     height: "100vh"
  //   },
  //   image: {
  //     backgroundImage: "url(/img/medical5.jpeg)",
  //     backgroundRepeat: "no-repeat",
  //     backgroundSize: "cover",
  //     backgroundPosition: "center"
  //   },
  // }));

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
    email: "",
    selecionarExame: "",
    hrefExam: "/abc"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);
  const completePacient = objPacient => {
    console.log(objPacient);
  };
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
    console.log(props);
    if (name === "selecionarExame") {
      console.log(event.target);
      setState({
        ...state,
        [name]: event.target.value
      });
    } else {
      setState({
        ...state,
        [name]: event.target.value
      });
    }
  };

  const handleSubmit = event => {
  
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
  const addUser = event => {
    const apiHandler = new ApiService();

    const {
      nome,
      idade,
      telefone,
      email,
      convenio,
      clinica,
      medico,
      medicoSolicitante,
      data,
      selecionarExame
    } = state;

    apiHandler
      .newPacient(nome, idade, telefone, email, convenio)
      .then(function(itemResponse) {
        const pacient = itemResponse._id;
        console.log(pacient);
        if (selecionarExame === "/newprostataview") {
          console.log("i");
          apiHandler
            .newProstate(clinica, medico, medicoSolicitante, data, pacient)
            .then(function(response) {
              console.log("PROSTATA!!!!!!!!!!!!!", props.rest);
              props.rest.history.push(`${selecionarExame}/${response._id}`);
              //return <Redirect to={`${selecionarExame}/${response._id}`}/>
            });
        }
        if (selecionarExame === "/newfigadoview") {
          console.log(pacient);
          apiHandler
            .newLiver(clinica, medico, medicoSolicitante, data, pacient)
            .then(function(response) {
              console.log("figado!!!!!!!!!!!!", response, pacient);
              props.rest.history.push(`${selecionarExame}/${response._id}`);
            });
        }
      });
  }

  return (
    // <Grid container component="main" className={classes.root}>
    //   <CssBaseline />
      
    //   <Grid item xs={false} sm={3} md={6} className={classes.image} />
    //   <Grid item xs={12} sm={9} md={6} component={Paper} elevation={6} square>
    //     <div className={classes.paper}></div>

    <div className="mainDivGF">
      <form className="box-shadow rounded p-4 marginBottom mt-5 "  onSubmit={handleSubmit}>
        <h3>Novo Laudo</h3>
        <table>
          <thead>
            <tr>
              <td>
                <h3>Exame</h3>
              </td>
              <td className="pacienteTd">
                <h3 className="mt=5" >Paciente</h3>
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
                        required
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
                    <label  htmlFor="">Clinica:</label>
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
                      required
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
                        <option value={"Femme - Laboratório da Mulher"}>
                          Femme - Laboratório da Mulher
                        </option>
                        <option value={"Clínica Popular Cuidar Mais"}>
                          Clínica Popular Cuidar Mais
                        </option>
                        <option value={"Centro Diagnostico"}>
                          Centro Diagnóstico
                        </option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Médico:</label>
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
                      required
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
                        <option value={"Roberto Sangalo"}>
                          Roberto Sangalo
                        </option>
                        <option value={"Pablo Vasconcellos"}>
                          Pablo Vasconcellos
                        </option>
                        <option value={"Aretuza Grande"}>Aretuza Grande</option>
                        <option value={"Katrina Swift"}>Katrina Swift</option>
                        <option value={"Gloria Maria"}>Gloria Maria</option>
                        <option value={"Vitor Carlos"}>Vitor Carlos</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Convênio:</label>
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
                        required
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
                        <option value={"Unimed"}>Unimed</option>
                        <option value={"Bradesco"}>Bradesco</option>
                        <option value={"Sul Americano"}>Sul Americano</option>
                        <option value={"Notre Dame"}>Notre Dame</option>
                        <option value={"Amil"}>Amil</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Médico Solicitante:</label>
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
                        required
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
                        <option value={"Albert Scharle"}>Albert Scharle</option>
                        <option value={"Stuart David"}>Stuart David</option>
                        <option value={"Lucas Viena"}>Lucas Viena</option>
                        <option value={"Maria Antonieta"}>
                          Maria Antonieta
                        </option>
                        <option value={"David Junior"}>David Junior</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
              </td>
              {/* --------------------------------------------------------------------------------------------- */}
              <td className="mainTd">
                <tr>
                  <td>
                    <label className="mt-4" htmlFor="">Data de Nasc: </label>
                  </td>
                  <td>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <Grid container justify="space-around">
                        <KeyboardDatePicker
                          required
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
                    <label className="mt-2" htmlFor="">Nome:</label>
                  </td>
                  <td>
                    <TextField
                      required
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
                      required
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
                      required
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
                      required
                      id="outlined-email-input"
                      name="email"
                      autoComplete="email"
                      margin="dense"
                      // variant="outlin  ed"
                      onChange={handleChange("email")}
                      value={state.email}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label htmlFor="">Exame: </label>
                  </td>
                  <td>
                    <FormControl
                      // variant="outlined"
                      className={classes.formControl}
                    >
                      <Select
                        required
                        native
                        value={state.selecionarExame}
                        onChange={handleChange("selecionarExame")}
                        name="selecionarExame"
                        margin="dense"
                        labelWidth={labelWidth}
                        inputProps={{
                          name: "convenio",
                          id: "outlined-convenio"
                        }}
                      >
                        <option value="" />
                        <option value={"/newfigadoview"}>Figado</option>
                        <option value={"/newprostataview"}>Prostata</option>
                      </Select>
                    </FormControl>
                  </td>
                </tr>
              </td>
            </tr>
          </tbody>
        </table>
        <br />

        <br />
        <Button
          type="submit"
          onClick={() => addUser(onclick)}
          // fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          novo laudo
        </Button>
      </form>
    </div>
  );
}
