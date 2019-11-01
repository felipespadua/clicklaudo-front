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

  getOneLiver = (id) =>{
    return this.service.get(`/getoneliver/${id}`)
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
    newLiver = (clinica,medico,medicoSolicitante,data,pacient) => {
    
    return this.service.post('/newliver', {clinica,medico,medicoSolicitante,data,pacient})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  newProstate = (clinica,medico,medicoSolicitante,data,pacient) => {
   
    return this.service.post('/newprostate', {clinica,medico,medicoSolicitante,data,pacient})
    .then(response =>
      
      response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }


  newPacient = (nome,idade,telefone,email,convenio) => {
    
    return this.service.post('/newpacient',{nome,idade,telefone,email,convenio})
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  updateLiver = (dimensao,homogeneo,esteatotico,hepatopiaCronica,ciscoSimples,cistoSimplesMM,ciscoSimplesSit,variosCiscos,variosCiscosMM,variosCiscosSit,noduloSolido,noduloSolidoTipo,noduloSolidoContorno,noduloSolidoHMM,noduloSolidoVMM,noduloSolidoSi,calcificacaoGrosseira,calcificacaoGrosseiraMM,calcificacaoGrosseiraSit,id)=>{
    return this.service.put(`/newfigadoview/${id}`,{dimensao,homogeneo,esteatotico,hepatopiaCronica,ciscoSimples,cistoSimplesMM,ciscoSimplesSit,variosCiscos,variosCiscosMM,variosCiscosSit,noduloSolido,noduloSolidoTipo,noduloSolidoContorno,noduloSolidoHMM,noduloSolidoVMM,noduloSolidoSi,calcificacaoGrosseira,calcificacaoGrosseiraMM,calcificacaoGrosseiraSit} )
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
  updateProstate = (homogenio,size1,size2,size3,contornos,residuo,residuoML,exameViaTransretal,noduloPeriferica,noduloPerifericaTipo,noduloSize1,noduloSize2,noduloSize3,noduloLocal,biopsia,fragmentos,id)=>{
    return this.service.put(`/newprostataview/${id}`,{homogenio,size1,size2,size3,contornos,residuo,residuoML,exameViaTransretal,noduloPeriferica,noduloPerifericaTipo,noduloSize1,noduloSize2,noduloSize3,noduloLocal,biopsia,fragmentos} )
    .then(response => response.data)
    .catch(err => console.log("Ocorreu um erro ao consultar todos os exames", err))
  }
}

export default ApiService;