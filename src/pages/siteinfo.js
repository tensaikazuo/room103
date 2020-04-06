import React from 'react'
import { Helmet } from 'react-helmet'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import SiteInfoSummary from 'components/siteInfoSummary.md'
import SiteInfoJenkins from 'components/siteInfoJenkins.md'
import SiteInfoCockpit from 'components/siteInfoCockpit.md'
import SiteInfoDocker from 'components/siteInfoDocker.md'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary[500],
      fontWeight: 'bold',
    },
  },
}))

export default function SiteInfo() {

  const classes = useStyles()

  return(
    <>
      <Helmet>
        <title>Site Info</title>
      </Helmet>
      <div>
        <p>Here is the recipe for making this web site.</p>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SiteInfoSummary />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SiteInfoJenkins />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SiteInfoCockpit />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <SiteInfoDocker />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
