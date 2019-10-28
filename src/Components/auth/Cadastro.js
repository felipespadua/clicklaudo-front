import React, {Component} from 'react'
<<<<<<< HEAD:src/Components/auth/Cadastro.js
// import Button from '@material-ui/core/Button';
import AuthService from './auth-service';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import TextField from '@material-ui/core/TextField';
=======
import SignUp from './SignUp.js'
>>>>>>> aa0c9f3f902ed47f737778bfafc34f6df2b3cda6:src/Cadastro.js

class Cadastro extends Component {
  constructor(props){
    super(props)
    this.state = {
<<<<<<< HEAD:src/Components/auth/Cadastro.js
      username: '',
      email: '',
      password: ''
=======
>>>>>>> aa0c9f3f902ed47f737778bfafc34f6df2b3cda6:src/Cadastro.js
    }
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
  
    this.service.signup(username, password,email)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
            email: ""
        });
         this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){ 
    return (
<<<<<<< HEAD:src/Components/auth/Cadastro.js
      <div className="container-fluid">
        <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="box-shadow border-box border-primary mt-5 bg-light rounded">
        <a href="/"><img className="mt-4 logo" src="/img/Logo.svg"/></a>
          <h4 className="p-2 text-secondary">Cadastro</h4>
            <form onSubmit={this.handleFormSubmit} className="d-flex flex-column pt classes.container" noValidate autoComplete="off">
              <TextField className="mb-2 mt-4"
                id="standard-name"
                label="Nome"
                value={this.state.username}
                onChange={this.handleChange('username')}
                margin="normal"
                type="username"
              />
              <TextField className="mt-2"
                id="standard-name"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange('email')}
                type="email"
                margin="normal"
              />
              <TextField className="mb-5 mt-2"
                id="standard-name"
                label="Senha"
                value={this.state.password}
                onChange={this.handleChange('password')}
                type="password"
                margin="normal"
              />
              <Fab variant="extended" size="medium" type="submit" color="primary" aria-label="add" className="botao mb-3" >Enviar</Fab>
              <div className="mb-5"></div>

            </form>
          <Grid item xs={12} md={12}>
        <ButtonGroup fullWidth aria-label="full width outlined button group" color="primary" variant="text">
          <Button href="/">Login</Button>
          <Button href="/Cadastro">Cadastra-se</Button>
        </ButtonGroup>
      </Grid>
          </div>
        </div>  
        <div className="col-2"></div>
        </div>
        </div>
     
      
=======
      <div>
        <SignUp/>
      </div>
>>>>>>> aa0c9f3f902ed47f737778bfafc34f6df2b3cda6:src/Cadastro.js
    )
  }
}

export default Cadastro