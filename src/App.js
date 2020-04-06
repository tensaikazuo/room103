import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import { Helmet } from 'react-helmet'

import { theme } from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: [
      'HelveticaNeue-Light',
      'Helvetica Neue Light',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'Lucida Grande',
      'sans-serif',
    ],
    fontWeight: 300,
    fontSize: '16px',
  },
  content: {
    flexGrow: 1,
    padding: '1rem',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles()

  return (
    <Root>
      <>
        <Helmet
          titleTemplate="Room 103 | %s "
          defaultTitle="Room 103"
        >
        </Helmet>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <div className={classes.root}>
            <Header />
            <div className={classes.content}>
              <Container maxwidth="xs">
              <React.Suspense fallback={<em>Loading...</em>}>
                <Router>
                  <Routes path="*" />
                </Router>
              </React.Suspense>
              </Container>
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </>
    </Root>
  )
}

export default App
