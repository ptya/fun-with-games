import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Header from './components/Header'
import Menu from './components/Menu'

import bg from './images/bg.jpg'

const useStyles = makeStyles({
  app: {
    backgroundColor: '#C6E8EE',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'repeat-x',
    minHeight: '100vh',
    padding: '0 2rem',
  },
});


function App() {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      className={classes.app}
    >
      <Header title="Menu" />
      <Menu />
    </Grid>
  );
}

export default App;
