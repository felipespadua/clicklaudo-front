import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap'
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
	const [ state, setState ] = React.useState({
		date: 0,
		clinica: '',
		medico: '',
		convenio: '',
		medicoSolicitante: '',

		dataDeNasc: 0,
		nome: '',
		idade: '',
		telefone: '',
		email: ''
	});

	const inputLabel = React.useRef(null);
	const [ labelWidth, setLabelWidth ] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

	const handleChange = (name) => (event) => {
		setState({
			...state,
			[name]: event.target.value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		//axios
		setState({
			date: 0,
			clinica: '',
			medico: '',
			convenio: '',
			medicoSolicitante: '',

			dataDeNasc: 0,
			nome: '',
			idade: '',
			telefone: '',
			email: ''
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Exame</h2>
			<table>
				<thead />
				<tbody>
					<tr>
						<td>
							<label htmlFor="">Data</label>
						</td>
						<td>
							<input type="date" name="date" value={state.date} onChange={handleChange} />
						</td>
						<td>
							<label htmlFor="">Clinica</label>
						</td>

						<td>
							<FormControl variant="outlined" className={classes.formControl}>
								<InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
									Clinica
								</InputLabel>
								<Select
									native
									margin="dense"
									value={state.clinica}
									onChange={handleChange('clinica')}
									labelWidth={labelWidth}
									inputProps={{
										name: 'clinica',
										id: 'outlined-age-simple'
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
							<label htmlFor="">Medico</label>
						</td>
						<td>
							<select value={state.medico} onChange={handleChange} name="medico">
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
							<select value={state.convenio} onChange={handleChange} name="convenio">
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
							<select name="medicoSolicitante" value={state.medicoSolicitante} onChange={handleChange}>
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
						</td>
					</tr>

					<tr>
						<td>
							<label htmlFor="">Data de Nasc:</label>
						</td>
						<td>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="dd/MM/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date'
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
								variant="outlined"
								name="nome"
								value={state.nome}
								onChange={handleChange}
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
								onChange={handleChange}
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
								value={state.telefone}
								onChange={handleChange}
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
								onChange={handleChange}
								value={state.email}
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
