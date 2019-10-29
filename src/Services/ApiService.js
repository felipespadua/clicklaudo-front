import axios from 'axios';

class ApiService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://clicklaudo.herokuapp.com/api',
      withCredentials: true
    });
    this.service = service;
  }
  getAllExams = () => {
    return this.service.get('/allexams')
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }

}

export default ApiService;