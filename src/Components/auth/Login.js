import React, {Component} from 'react';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AuthService from './auth-service';

// import MainTable from './MainTable'
const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(/img/medical5.jpeg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  logo: {
    marginBottom  : '35px',
    backgroundImage: 'url(/img/Logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '15vh',
    width: '70vh',
    backgroundSize: '350px'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function Login (props) {
 
  const classes = useStyles();

  const [state,setState]=React.useState({
     username: '', password: ''

  })
 const service = new AuthService()

  const handleFormSubmit = (event) => {
    console.log(props, "===>")
    event.preventDefault();
    const username = state.username;
    const password = state.password;
    service.login(username, password)
    .then( response => {
        setState({ username: "", password: "" });
        console.log(response)
        props.getUser(response)
        props.history.push("/laudos")
        
    })
    .catch( error => console.log(error) )
  }
  const handleChange = (event) => {  
    const {name, value} = event.target;
    setState({ ...state , [name]: value});
  }
  
  
  
    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Link href="/" className={classes.logo}></Link>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form onSubmit={handleFormSubmit} className={classes.form} noValidate>
            <TextField
              id="username"
              label="Username"
              className={classes.textField}
              required
              fullWidth
              type="text"
              name="username"
              autoComplete="username"
              margin="normal"
              value={state.username} 
              onChange={ e => handleChange(e)}
              // variant="filled"
            />
            <TextField
              id="password"
              label="Password"
              className={classes.textField}
              required
              fullWidth
              type="password"
              name="password"
              autoComplete="password"
              margin="normal"
              value={state.password} 
              onChange={ e => handleChange(e)}
              // variant="filled"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/Laudos"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/cadastro" variant="body2">
                  {"Não possui uma conta? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
    )
  
}

