import React, {Component} from 'react';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Fab from '@material-ui/core/Fab';
// import TextField from '@material-ui/core/TextField';
import SignInSide from './SignInSide'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  // handleChange = name => event => {
  //   this.setState({ [name]: event.target.value });
  // };

  
  render(){ 
    // const bgcolor = {
    //   backgroundImage: 'url(/img/fundo.jpg)',
    //   backgroundRepeat: 'no-repeat',
    //   height: '100vh'
    // }
    return (
      <div>
        <SignInSide/>
      </div>
      // <div className="container-fluid" style={bgcolor}>
      //   <div className="row">
      //   <div className="col-2"></div>
      //   <div className="col-8">
      //     <div className="box-shadow border-box mt-5 border-primary bg-light rounded">
      //     <a href="/"><img className="mt-4 mb-4 logo" src="/img/Logo.svg"/></a>
      //     <h5 className="p-2 text-secondary">Seja bem vindo.</h5>
      //       <form method="POST" className="d-flex flex-column pt classes.container" noValidate autoComplete="off">
      //         <TextField className="mb-2 mt-4"
      //           id="standard-name"
      //           label="Username"
      //           value={this.state.username}
      //           onChange={this.handleChange('username')}
      //           margin="normal"

      //         />
      //         <TextField className="mb-5 mt-2"
      //           id="standard-name"
      //           label="Password"
      //           value={this.state.password}
      //           onChange={this.handleChange('password')}
      //           type="password"
      //           margin="normal"
      //         />
      //         <Fab variant="extended" size="medium" href="/Laudos" color="primary" aria-label="add" className="botao mb-3">Entrar</Fab>
      //         <div className="mb-5"></div>

      //       </form>
      //       <Grid item xs={12} md={12}>
      //         <ButtonGroup fullWidth aria-label="full width outlined button group" color="primary" variant="text">
      //           <Button href="/">Login</Button>
      //           <Button href="/Cadastro">Cadastra-se</Button>
      //         </ButtonGroup>
      //       </Grid>
      //     </div>
      //   </div>
      //   <div className="col-2"></div>
      //   </div>
      // </div>
    )
  }
}

export default Login