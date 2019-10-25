import React, {Component} from 'react'
// import Button from '@material-ui/core/Button';

import Fab from '@material-ui/core/Fab';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import TextField from '@material-ui/core/TextField';

class Cadastro extends Component {
  constructor(props){
    super(props)
    this.state = {
      nome: '',
      email: '',
      senha: ''
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render(){ 
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <div className="box-shadow border-box border-primary mt-5 bg-light rounded">
        <a href="/"><img className="mt-4 logo" src="/img/Logo.svg"/></a>
          <h4 className="p-2 text-secondary">Cadastro</h4>
            <form method="POST" className="d-flex flex-column pt classes.container" noValidate autoComplete="off">
              <TextField className="mb-2 mt-4"
                id="standard-name"
                label="Nome"
                value={this.state.nome}
                onChange={this.handleChange('nome')}
                margin="normal"
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
                value={this.state.senha}
                onChange={this.handleChange('senha')}
                type="password"
                margin="normal"
              />
              <Fab variant="extended" size="medium" color="primary" aria-label="add" className="botao mb-3" >Enviar</Fab>
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
     
      
    )
  }
}

export default Cadastro