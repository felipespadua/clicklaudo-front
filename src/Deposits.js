import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Deposito Recente</Title>
      <Typography component="p" variant="h4">
        R$3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        em 01 Nov, 2019
      </Typography>
      <div>
        <Link color="primary" href="javascript:;">
          Ver balanço
        </Link>
      </div>
    </React.Fragment>
  );
}