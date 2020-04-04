import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    textAlign: 'center',
  },
}));

export default function TopPage() {

  const classes = useStyles()

  return(
    <h1 className={classes.siteTitle}>Welcome to Room 103</h1>
  )
}
