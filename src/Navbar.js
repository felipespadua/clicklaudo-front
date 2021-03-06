import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FormGroup from '@material-ui/core/FormGroup';
import Link from '@material-ui/core/Link';
// import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { BrowserRouter as Router } from 'react-router-dom';
import Menubar from './Menubar.js';
import BuildIcon from '@material-ui/icons/Build';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	logo: {
		marginBottom: '35px',
		backgroundImage: 'url(/img/Logo.svg)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		height: '6vh',
		width: '50vh',
		backgroundSize: '150px',
		position: 'absolute',
		top: '50%',
		marginLeft: '90px',
		transform: 'translate(-50%, -50%)'
	},
	justify: {
		alignItems: 'center'
	}
}));

export default function NavBar() {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root && 'fixed-top'}>
			<FormGroup />
			<AppBar position="static">
				<Toolbar>
					<Link href="/" className={classes.logo} />
					<Typography variant="h6" className={classes.title} />
					{/* <Tooltip disableFocusListener title="Home">
            <Button href="/">Home</Button>
          </Tooltip>
          <Tooltip disableFocusListener title="Laudos">
            <Button href="Laudos">Laudos</Button>
          </Tooltip> */}
					<div>
						<Button aria-controls="simple-menu" aria-haspopup="true" href="/newlaudoview">
							<PostAddOutlinedIcon />
							Novo Exame
						</Button>

						<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
							<BuildIcon />
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<Link href="/Medicos">
								<MenuItem onClick={handleClose}>Médicos</MenuItem>
							</Link>
							<Link href="/MedicosSolicitante">
								<MenuItem onClick={handleClose}>Médicos Solitantes</MenuItem>
							</Link>
							<Link href="/Convenios">
								<MenuItem onClick={handleClose}>Convênios</MenuItem>
							</Link>
							<Link href="/Clinicas">
								<MenuItem onClick={handleClose}>Clinicas</MenuItem>
							</Link>
							<Divider />
							<Link href="/dashboard">
								<MenuItem onClick={handleClose}>Dashboard</MenuItem>
							</Link>
						</Menu>
					</div>

					<div>
						<Router>
							<Menubar />
						</Router>
					</div>
					<div>
						<IconButton
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onCl
							ick={handleMenu}
							color="primary"
							href="/Cadastro"
						>
							<AccountCircle />
						</IconButton>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
