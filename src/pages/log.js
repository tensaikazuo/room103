import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'
import { imgInfo } from '../../imginfo.js'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  paperSection: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary[500],
      fontWeight: 'bold',
    },
  },
}));

export default function Log() {

  const { posts } = useRouteData()

  const IsImageAvailable = (props) => {
    const matchResult = imgInfo
      .filter(elem => {
        return elem.id === props.id
      })
    console.log(matchResult)
    if (matchResult.length === 1) {
      const imgPath = matchResult
        .map(elem => {
          return 'images/log/' + elem.id + '.' + elem.extName
        })
        .shift()
      return <img src={imgPath} width="100%" height="auto" alt={props.meta} />
    } else {
      return null
    }
  }

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
                <IsImageAvailable
                  id={post._id}
                  meta={(post.Picture && post.Picture.meta) ? post.Picture.meta.title : ''}
                />
                <ReactMarkdown source={post.Content} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}
