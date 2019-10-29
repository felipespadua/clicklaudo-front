import React from "react";
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

export default function SignInSide(props) {
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
    setState({[name]: value});
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
            Sign Up
          </Typography>
          <form onSubmit={handleFormSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}  >
            <TextField
              id="Nome"
              label="Nome"
              className={classes.textField}
              required
              fullWidth
              type="text"
              name="nome"
              autoComplete="nome"
              margin="normal"
              // variant="filled"
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
              id="email"
              label="E-mail"
              className={classes.textField}
              required
              fullWidth
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              // variant="filled"
            />
            </Grid>
            <Grid item xs={12}>
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
              // variant="filled"
            />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/Laudos"
          >
            Sign Up
          </Button>
      
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Não possui uma conta? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
