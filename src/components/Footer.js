import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    color: 'white',
    backgroundColor: theme.palette.primary[500],
    textAlign: 'center',
    boxShadow: [
      '0px -2px 4px -1px rgba(0,0,0,0.2)',
      '0px -4px 5px 0px rgba(0,0,0,0.14)',
      '0px -1px 10px 0px rgba(0,0,0,0.12)',
    ]
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
