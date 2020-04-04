import React from 'react'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: 'white',
    backgroundColor: theme.palette.primary[500],
    textAlign: 'center',
  },
}));

const now   = new Date();
const year  = now.getFullYear();

export default function Footer() {

  const classes = useStyles()

  return (
      <div className={classes.footer}>
        <footer>
          <small>&copy;{year} Kazuo ARAKI </small>
        </footer>
      </div>
  )
}
