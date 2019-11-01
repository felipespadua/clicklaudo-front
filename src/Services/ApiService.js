import axios from 'axios';

class ApiService {
  constructor() {
    let service = axios.create({
      // baseURL: 'https://clicklaudo.herokuapp.com',
      baseURL: 'http://localhost:5000',
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    this.service = service;
  }
  getAllExams = () => {
    return this.service.get('/api/allexams')
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }

  getOneLiver = (id) =>{
    return this.service.get(`/api/getoneliver/${id}`)
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
    newLiver = (clinica,medico,medicoSolicitante,data,pacient) => {
    
    return this.service.post('/api/newliver', {clinica,medico,medicoSolicitante,data,pacient})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  newProstate = (clinica,medico,medicoSolicitante,data,pacient) => {
   
    return this.service.post('/api/newprostate', {clinica,medico,medicoSolicitante,data,pacient})
    .then(response =>
      
      response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }


  newPacient = (nome,idade,telefone,email,convenio) => {
    
    return this.service.post('/api/newpacient',{nome,idade,telefone,email,convenio})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  updateLiver = (dimensao,homogeneo,esteatotico,hepatopiaCronica,ciscoSimples,cistoSimplesMM,ciscoSimplesSit,variosCiscos,variosCiscosMM,variosCiscosSit,noduloSolido,noduloSolidoTipo,noduloSolidoContorno,noduloSolidoHMM,noduloSolidoVMM,noduloSolidoSi,calcificacaoGrosseira,calcificacaoGrosseiraMM,calcificacaoGrosseiraSit,id)=>{
    return this.service.put(`/api/newfigadoview/${id}`,{dimensao,homogeneo,esteatotico,hepatopiaCronica,ciscoSimples,cistoSimplesMM,ciscoSimplesSit,variosCiscos,variosCiscosMM,variosCiscosSit,noduloSolido,noduloSolidoTipo,noduloSolidoContorno,noduloSolidoHMM,noduloSolidoVMM,noduloSolidoSi,calcificacaoGrosseira,calcificacaoGrosseiraMM,calcificacaoGrosseiraSit} )
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  updateProstate = (homogenio,size1,size2,size3,contornos,residuo,residuoML,exameViaTransretal,noduloPeriferica,noduloPerifericaTipo,noduloSize1,noduloSize2,noduloSize3,noduloLocal,biopsia,fragmentos,id)=>{
    return this.service.put(`/api/newprostataview/${id}`,{homogenio,size1,size2,size3,contornos,residuo,residuoML,exameViaTransretal,noduloPeriferica,noduloPerifericaTipo,noduloSize1,noduloSize2,noduloSize3,noduloLocal,biopsia,fragmentos} )
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
 
  deleteExam = id => {
    return this.service.delete(`/api/exam/${id}`)
    .then(response => response.data)
    .catch(err => console.log(err))
  }
  getPhrases = examType => {
    return this.service.post(`/api/getphrases/${examType}`)
    .then(response => response.data)
    .catch(err => console.log(err))
  }
  downloadPdf = (data) => {
    return this.service.post("/api/generateReport", {data})
    .then(response => {
      let {filename} = response.data
      // return filename
      return this.service.get(`/reports/${filename}.pdf`,{ crossdomain: true })
        .then(response => console.log(response, "response"))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
  }
  sendEmail = (data) => {
    return this.service.post("/api/generateReport", {data})
    .then(response => {
      
      let {filename} = response.data
      // return filename
      return this.service.post("/api/send-email", { data , filename })
        .then(response => console.log(response, "response"))
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err, "ERROOO"))
  }
}

export default ApiService;