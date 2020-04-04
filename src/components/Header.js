import React from 'react'
import { Link, } from 'components/Router'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Room 103
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/profile">Profile</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/siteinfo">Site Info</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link to="/log">Log</Link></MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}
