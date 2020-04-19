import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteData } from 'react-static'
import ReactMarkdown from 'react-markdown'

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
  const { imgInfo } = useRouteData()

  const imgPair = {}

  const makeImgPair = () => {
    posts.map(post => {
      if (post.Picture) {
        imgInfo.map(eachInfo => {
          const imgFullPath = eachInfo.url
          const hasStorage = imgFullPath.indexOf('/storage')
          if (hasStorage !== -1) {
            const imgPathMod = imgFullPath.substring(hasStorage)
            if (post.Picture.path === imgPathMod) {
              const imgAbsPath = eachInfo.filename
              const hasImages = imgAbsPath.indexOf('/images')
              if (hasImages !== -1) {
                const imgAbsPathMod = imgAbsPath.substring(hasImages)
                imgPair[post._id] = imgAbsPathMod
              } else {
                console.log('The filename of imgInfo is not correct...')
              }
            } else {
              console.log("The path of this post's path is different from one of the paths of imgInfo...")
            }
          } else {
            'The url of imgInfo is not correct...'
          }
        })
      }
      return imgPair
    })
  }
  makeImgPair()
  console.log(imgPair)

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
