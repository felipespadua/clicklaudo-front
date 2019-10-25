import React, {Component} from 'react'
// import Button from '@material-ui/core/Button';

import Fab from '@material-ui/core/Fab';

import TextField from '@material-ui/core/TextField';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){ 
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <img className="mt-5 logo" src="/img/Logo.svg"/>
          <h5 className="p-2 text-secondary">Seja bem vindo.</h5>
          <div className="box-shadow border-box border-primary">
            <form method="POST" className="d-flex flex-column pt classes.container" noValidate autoComplete="off">
              <TextField className="mb-2 mt-4"
                id="standard-name"
                label="Username"
                value={this.state.username}
                onChange={this.handleChange('username')}
                margin="normal"
              />
              <TextField className="mb-5 mt-2"
                id="standard-name"
                label="Password"
                value={this.state.password}
                onChange={this.handleChange('password')}
                type="password"
                margin="normal"
              />
              <Fab variant="extended" color="primary" aria-label="add" className="">Entrar</Fab>
        <div className="row d-flex justify-content-between nav-login mb-2">
        <a href="/Login"><li>Login</li></a>
        <a href="#"><li>Cadastre-se</li></a>
        </div>
            
            </form>
          </div>
        </div>
        <div className="col-1"></div>
        </div>
      </div>
    )
  }
}

export default Login