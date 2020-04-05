import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import lime from '@material-ui/core/colors/lime';

const useStyles = makeStyles((theme) => ({
  paperSection: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    //textAlign: 'center',
    //backgroundColor: lime[50],
  },
}));

export default function Log() {

  const { posts } = useRouteData()

  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Log</title>
      </Helmet>
      <div>
        <p>These are change logs of the site.</p>
      </div>
      <div className={classes.paperSection}>
        <Grid container spacing={3}>
          {posts.map(post => (
            <Grid item xs={12} md={6} key={post._id}>
              <Paper className={classes.paper}>
                <h3>{post.Title}</h3>
                <p>{post.Date}</p>
                <ReactMarkdown source={post.Content} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}
