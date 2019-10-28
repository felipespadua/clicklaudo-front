import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    // minHeight: '100vh',
    // backgroundColor:  "#e4d6eb"
    backgroundImage: "url(/img/medical3.jpeg)", 
    color: "white"

  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },

}));



export default function Footer() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Clicklaudo
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'more efficiency '}
          {'a faster and more accurate report.'}
        </Typography>
        <Typography variant="body1">Enjoy.</Typography>
        <br></br>
        {/* <a href="#main">Voltar ao topo</a> */}
        <Tooltip disableFocusListener title="Voltar ao topo">
            <Button href="#main">Voltar ao topo</Button>
          </Tooltip>
      </Container>

    </div>
  );
}