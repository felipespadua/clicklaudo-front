import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from '@material-ui/core/Link';
import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HomeWorkOutlinedIcon from '@material-ui/icons/HomeWorkOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
    <Link href="/">
      <ListItemText primary="Home" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
      <AssignmentIcon />  
      </ListItemIcon>
      <Link href="/Laudos">
      <ListItemText primary="Laudos" />
      </Link>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Configurações</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AccountCircleOutlinedIcon />
      </ListItemIcon>
      <Link href="/medicos">
      <ListItemText primary="Medicos" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AccountBoxOutlinedIcon />
      </ListItemIcon>
      <Link href="/medicossolicitante"> 
      <ListItemText primary="Medico Auxiliar" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HomeWorkOutlinedIcon />
      </ListItemIcon>
      <Link href="clinicas">
      <ListItemText primary="Clinicas" />
      </Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReceiptOutlinedIcon />
      </ListItemIcon>
      <Link href="/convenios">
      <ListItemText primary="Convenios" />
      </Link>
    </ListItem>
  </div>
);