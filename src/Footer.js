import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
    // backgroundImage: 'url(/img/fundoFooter.jpeg  )',
    // backgroundColor:  "#e4d6eb", 
    color: "white",
    textAlign: 'center',  
  },

  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },  

}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} maxWidth="sm">
      </Container>  
      <footer className={classes.footer}>
        <Container maxWidth="sm">
    
        {/* <Tooltip className="mt-4" disableFocusListener title="Voltar ao topo">
        <img src="/img/fundoFooter.jpeg" alt=""/>
            <Button href="#main">Voltar ao topo</Button>
          </Tooltip> */}
        </Container>
      </footer>
    </div>
  );
}




