import React from 'react'
import { Link } from 'components/Router'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MenuIcon from '@material-ui/icons/Menu'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  homeLink: {
    textDecoration: 'none',
    color: 'white',
  },
  menuList: {
    padding: 0,
  },
  menuItemLink: {
    display: 'block',
    width: '100%',
    padding: '0.5em 1em 0.5em 1em',
    textDecoration: 'none',
    color: theme.palette.primary[500],
    fontWeight: 'bold',
  }
}));

export default function Header() {

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.homeLink} to="/">Room 103</Link>
          </Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.menuList} onClick={handleClose}>
              <Link className={classes.menuItemLink} to="/">Home</Link>
            </MenuItem>
            <MenuItem className={classes.menuList} onClick={handleClose}>
              <Link className={classes.menuItemLink} to="/profile">Profile</Link>
            </MenuItem>
            <MenuItem className={classes.menuList} onClick={handleClose}>
              <Link className={classes.menuItemLink} to="/siteinfo">Site Info</Link>
            </MenuItem>
            <MenuItem className={classes.menuList} onClick={handleClose}>
              <Link className={classes.menuItemLink} to="/log">Log</Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}
