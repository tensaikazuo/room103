import React from 'react'
import { Helmet } from 'react-helmet'

import { SkillBars } from 'react-skills'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const skillsData = [
  { name: 'JavaScript', level: '90', color: 'deeppink' },
  { name: 'CSS & Scss', level: '70', color: 'deeppink' },
  { name: 'React', level: '50', color: 'deeppink' },
  { name: 'PHP', level: '70', color: 'deepskyblue'},
  { name: 'Webpack', level: '50', color: 'goldenrod' },
  { name: 'Docker', level: '50', color: 'goldenrod' },
  { name: 'WordPress', level: '50', color: 'goldenrod' },
  { name: 'Windows Server', level: '70', color: 'purple' }
]

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    marginRight: 'auto',
    marginLeft: 'auto',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary[500],
      fontFamily: [
        'Roboto',
        'Helvetica',
        'Arial',
        'sans-serif',
      ],
      fontWeight: 500,
      fontSize: '0.8125rem',
      padding: '4px 5px',
      minWidth: '64px',
      borderRadius: '4px',
      transition: '0.5s',
      '&:hover': {
        backgroundColor: theme.palette.primary[50],
      },
    },
  },
  media: {
    height: 450,
  },
  buttons: {
    marginTop: '16px',
  },
  secondButton: {
    marginLeft: '8px',
  },
  note: {
    textAlign: 'center',
    fontSize: '14px',
  }
}))

export default function Profile() {

  const classes = useStyles()

  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} key="1">
          <Card className={classes.card}>
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
              <div className={classes.buttons}>
                <a href="https://github.com/tensaikazuo/">GITHUB</a>
                <a href="https://kazuoaraki.net/" className={classes.secondButton}>BLOG</a>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} key="2">
          <SkillBars skills={skillsData} />
          <span className={classes.note}>
            <p>note: Those data are from my point of view.</p>
          </span>
        </Grid>
      </Grid>
    </>
  )
}
