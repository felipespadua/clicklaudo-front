import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: 'https://clicklaudo.herokuapp.com/api',
      withCredentials: true
    });
    this.service = service;
  }
  signup = (username, password,name) => {
    return this.service.post('/signup', {username, password,name})
    .then(response => response.data)
  }
  login = (username, password) => {
    return this.service.post('/login', {username, password})
    .then(response => response.data)
  }
  loggedin = () => {
    return this.service.get('/loggedin')
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.post('/logout', {})
    .then(response => response.data)
  }

}

export default AuthService;