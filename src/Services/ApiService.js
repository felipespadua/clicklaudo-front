import axios from 'axios';

class ApiService {
  constructor() {
    let service = axios.create({
      // baseURL: 'https://clicklaudo.herokuapp.com/api',
      baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }
  getAllExams = () => {
    return this.service.get('/allexams')
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  newLiver = (clinica,medico,medicoSolicitante,data) => {
    console.log(data)
    return this.service.post('/newliver', {clinica,medico,medicoSolicitante,data})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  newProstate = (clinica,medico,medicoSolicitante,data) => {
    console.log(data)
    return this.service.post('/newprostate', {clinica,medico,medicoSolicitante,data})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }


  newPacient = (dataDeNasc,nome,idade,telefone,email,convenio) => {

    return this.service.post('/newpacient',{dataDeNasc,nome,idade,telefone,email,convenio})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
 

}

export default ApiService;