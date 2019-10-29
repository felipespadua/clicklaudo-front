import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Link href="/" className={classes.logo}></Link>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
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
          <Grid container justify="flex-end">
            <Grid item xs>
              <Link href="/" variant="body2">
                Já possui uma conta? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}