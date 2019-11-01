import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './FinalForm.css';
// import Button from "@material-ui/core/Button";
import ApiService from './Services/ApiService';
import Button from 'react-bootstrap-button-loader';

class FinalForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			observacoes: '',
			conclusoes: '',
			concluir: false,
			email: false,
			pdf: false,
			phrases: {}
		};
		this.typeControl = {
			text: [ 'observacoes', 'conclusoes' ]
		};
		this.apiHandler = new ApiService();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeBySpeech = this.handleChangeBySpeech.bind(this);
	}

	handleChange = (name) => (event) => {
		console.log(event.target);
		if (event.target.type === 'checkbox') {
			this.setState({
				...this.state,
				[name]: event.target.checked
			});
		} else {
			this.setState({
				...this.state,
				[name]: event.target.value
			});
		}
	};

	handleChangeBySpeech = (name) => {
		let checkBoxes = this.typeControl.checkBox;
		let texts = this.typeControl.text;
		let selects = this.typeControl.selects;
		if (checkBoxes.includes(name)) {
			this.setState({
				...this.state,
				[name]: !this.state.name
			});
		}
	};

	handleChangeSelect = (name) => (event) => {
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
			observacoes: '',
			conclusoes: ''
		});
	}

	populateFields(data, phrases) {
		const {
			homogeneo,
			esteatotico,
			dimensao,
			hepatopiaCronica,
			ciscoSimples,
			cistoSimplesMM,
			ciscoSimplesSit,
			variosCiscos,
			variosCiscosMM,
			variosCiscosSit,
			noduloSolido,
			noduloSolidoContorno,
			noduloSolidoHMM,
			noduloSolidoVMM,
			noduloSolidoTipo,
			calcificacaoGrosseira,
			calcificacaoGrosseiraMM,
			calcificacaoGrosseiraSit
		} = data;
		console.log(data, 'data');
		console.log(phrases, 'phrases');
		let campoObservasoes = '';
		let campoConclusoes = '';
		let { observations, conclusions } = phrases;
		let auxString = '';
		if (homogeneo) {
			if (dimensao != null && dimensao != '') {
				campoObservasoes += observations.homogeneo.text.replace(/especificad@/g, dimensao.toLowerCase());
			}
			campoConclusoes += conclusions.homogeneo.text;
		}
		if (esteatotico) {
			if (dimensao != null && dimensao != '') {
				campoObservasoes += observations.esteatotico.text.replace(/especificad@/g, dimensao.toLowerCase());
				campoConclusoes += conclusions.esteatotico.text.replace(/especificad@/g, dimensao.toLowerCase());
			}
		}
		if (hepatopiaCronica) {
			campoObservasoes += observations.hepatopatiaCronica.text;
			campoConclusoes += conclusions.hepatopariaCronica.text;
		}
		if (ciscoSimples) {
			auxString = observations.cistoSimples.text.replace(/especificad@/, cistoSimplesMM);
			campoObservasoes += auxString.replace(/especificad@/, ciscoSimplesSit.toLowerCase());
			campoConclusoes += conclusions.cistoSimples.text.replace(/especificad@/, ciscoSimplesSit.toLowerCase());
		}
		if (noduloSolido) {
			auxString = observations.noduloSolido.text.replace(
				/especificad@/,
				`${noduloSolidoHMM} x ${noduloSolidoVMM}`
			);
			campoObservasoes += auxString.replace(/especificad@/, noduloSolidoTipo);
			campoConclusoes += conclusions.noduloSolido.text;
		}
		if (calcificacaoGrosseira) {
			auxString = observations.calcificacaoGrosseira.text.replace(/especificad@/, calcificacaoGrosseiraMM);
			campoObservasoes += auxString.replace(/especificad@/, calcificacaoGrosseiraSit.toLowerCase());
			campoConclusoes += conclusions.calcificacaoGrosseira.text.replace(
				/especificad@/,
				calcificacaoGrosseiraSit.toLowerCase()
			);
		}
		this.setState({
			observacoes: campoObservasoes,
			conclusoes: campoConclusoes
		});
	}
	handleClick(e) {
		const { name } = e.target;
		this.setState({
			[name]: true
		});
		switch (name) {
			case 'pdf':
				this.apiHandler
					.downloadPdf()
					.then((response) => {
						this.setState({
							[name]: false
						});
					})
					.catch((err) => {
						this.setState({
							[name]: false
						});
						console.log(err);
					});
				break;
			case 'email':
				this.apiHandler
					.sendEmail()
					.then((response) => {
						this.setState({
							[name]: false
						});
					})
					.catch((err) => {
						this.setState({
							[name]: false
						});
						console.log(err);
					});
				break;
			case 'concluir':
				this.apiHandler
					.saveFinalForm()
					.then((response) => {
						this.setState({
							[name]: false
						});
					})
					.catch((err) => {
						this.setState({
							[name]: false
						});
						console.log(err);
					});
		}
	}
	componentDidMount() {
		const apiHandler = new ApiService();
		const id = this.props.match.params.id;
		apiHandler
			.getOneLiver(id)
			.then((data) => {
				apiHandler
					.getPhrases('liver')
					.then((phrases) => {
						this.populateFields(data, phrases);
					})
					.catch((err) => console.log(err));
			})
			.catch((err) => console.log(err));
	}

	render() {
		console.log(this.props);
		return (
			<div className="mainDivGF">
				<form onSubmit={this.handleSubmit}>
					<table className="tableSize">
						<thead>
							<tr>
								<td>
									<h2> Resultado do exame </h2>{' '}
								</td>{' '}
							</tr>{' '}
						</thead>{' '}
						<tbody>
							<tr>
								<td>
									<label htmlFor=""> Observações: </label>{' '}
								</td>{' '}
							</tr>{' '}
							<tr>
								<td>
									{' '}
									 {' '}
									<TextField
										id="outlined-full-width"
										style={{
											margin: 8
										}}
										fullWidth
										multiline
										margin="dense"
										variant="outlined"
										value={this.state.observacoes}
										onChange={this.handleChange('observacoes')}
										InputLabelProps={{
											shrink: true
										}}
									/>{' '}
								</td>{' '}
							</tr>{' '}
							<tr>
								<td>
									<label htmlFor=""> Conclusões: </label>{' '}
								</td>{' '}
							</tr>{' '}
							<tr>
								<td>
									{' '}
									 {' '}
									<TextField
										id="outlined-full-width"
										style={{
											margin: 8
										}}
										fullWidth
										multiline
										margin="dense"
										variant="outlined"
										value={this.state.conclusoes}
										onChange={this.handleChange('conclusoes')}
										InputLabelProps={{
											shrink: true
										}}
									/>{' '}
								</td>{' '}
							</tr>{' '}
						</tbody>{' '}
					</table>{' '}
					<div className="container container-buttons">
						<Button
							loading={this.state.concluir}
							spinColor="black"
							name="concluir"
							variant="contained"
							style={{
								color: 'rgb(121,86,249)',
								backgroundColor: 'rgb(240,240,240)',
								margin: '10px'
							}}
							onClick={(e) => this.handleClick(e)}
						>
							Concluir{' '}
						</Button>{' '}
						<Button
							loading={this.state.pdf}
							spinColor="black"
							name="pdf"
							variant="contained"
							style={{
								color: 'rgb(121,86,249)',
								backgroundColor: 'rgb(240,240,240)',
								margin: '10px'
							}}
							onClick={(e) => this.handleClick(e)}
						>
							Baixar em PDF{' '}
						</Button>
						<Button
							loading={this.state.email}
							spinColor="black"
							name="email"
							variant="contained"
							style={{
								color: 'rgb(121,86,249)',
								backgroundColor: 'rgb(240,240,240)',
								margin: '10px'
							}}
							onClick={(e) => this.handleClick(e)}
						>
							Enviar laudo por email{' '}
						</Button>{' '}
					</div>{' '}
				</form>{' '}
			</div>
		);
	}
}

export default FinalForm;
