import React from 'react'
import { Helmet } from 'react-helmet'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
  },
  media: {
    height: 450,
  },
  lead: {
    textAlign: 'center',
  },
}));

export default function Profile() {

  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Grid container justify="center">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/images/kazuo_portrait.jpg"
              title="Kazuo Araki"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Kazuo Araki
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Hi! I'm Kazuo Araki, a web and infra engineer based in Ashikaga, Japan.
                I create and refine web pages using JavaScript. I'm interested in Static Site Generator and Headless CMS.
                I am also a creator, specializing in poetry and folk song.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href="https://github.com/tensaikazuo/">
              GitHub
            </Button>
            <Button size="small" color="primary" href="https://kazuoaraki.net/">
              Blog
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}
