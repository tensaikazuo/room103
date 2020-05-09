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

  const makeImgPair = () => {
    const result = posts
      .filter(post => {
        return post.Picture
      })
      .reduce((prev, current) => {
        const result = imgInfo
          .map(eachInfo => {
            const imgFullPath = eachInfo.url
            const hasStorage = imgFullPath.indexOf('/storage')
            if (hasStorage !== -1) {
              const imgPathMod = imgFullPath.substring(hasStorage)
              if (current.Picture.path === imgPathMod) {
                const imgAbsPath = eachInfo.filename
                const hasImages = imgAbsPath.indexOf('images')
                console.log(hasImages)
                if (hasImages !== -1) {
                  const imgAbsPathMod = imgAbsPath.substring(hasImages)
                  console.log(imgAbsPathMod)
                  return imgAbsPathMod
                } else {
                  console.log('The filename of imgInfo is not correct...')
                }
              }
            } else {
              console.log('The url of imgInfo is not correct...')
            }
          })
          .filter(element => {
            return element
          })
        console.log(result)
        prev[current._id] = result[0]
        return prev
      }, {})
    return result
  }

  const imgPair = makeImgPair()
  console.log(imgPair)

  const IsImageAvailable = (props) => {
    if (props.id in imgPair) {
      return <img src={imgPair[props.id]} width="100%" height="auto" alt={props.meta} />
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
