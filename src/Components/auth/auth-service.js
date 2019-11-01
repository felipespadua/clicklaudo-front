import axios from 'axios';

class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      //baseURL: 'http://localhost:5000/api',
      withCredentials: true
    });
    this.service = service;
  }
  signup = (username, password,name) => {
    return this.service.post('/api/signup', {username, password,name})
    .then(response => response.data)
  }
  login = (username, password) => {
    return this.service.post('/api/login', {username, password})
    .then(response => response.data)
  }
  loggedin = () => {
    return this.service.get('/api/loggedin')
    .then(response => response.data)
  }
  
  logout = () => {
    return this.service.post('/api/logout', {})
    .then(response => response.data)
  }

}

export default AuthService;