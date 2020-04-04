import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import { Link, Router } from 'components/Router'

import { theme } from 'theme'
import Header from 'components/Header'
import Footer from 'components/Footer'

import './app.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {

  const classes = useStyles();

  return (
    <Root>
      <>
      <CssBaseline />
      <div className={classes.root}>
        <ThemeProvider theme={theme}>
          <Header />
          <div className="content">
            <React.Suspense fallback={<em>Loading...</em>}>
              <Router>
                <Routes path="*" />
              </Router>
            </React.Suspense>
          </div>
          <Footer />
        </ThemeProvider>
      </div>
      </>
    </Root>
  )
}

export default App
