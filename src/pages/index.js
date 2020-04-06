import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  siteTitle: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '600px',
  },
  lead: {
    textAlign: 'center',
  },
}));

export default function TopPage() {

  const classes = useStyles()

  return(
    <>
      <h1 className={classes.siteTitle}>Welcome to Room 103</h1>
      <p className={classes.lead}>
        My portfolio site demonstrating light CMS structure, using React Static, Cockpit, and Jenkins
      </p>
      <Grid container justify="center">
        <div className={classes.image}>
          <img src='/images/welcome_living_slowly.jpg' width="100%" height="auto" alt="entrance of room 103" />
        </div>
      </Grid>
    </>
  )
}
