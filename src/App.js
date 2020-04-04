import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'
import { Helmet } from 'react-helmet'

import { theme } from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'

import './app.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
  }
}));

function App() {

  const classes = useStyles();

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
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
      </>
    </Root>
  )
}

export default App
