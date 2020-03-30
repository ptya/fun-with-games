import React from 'react';
import { Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '70px',
  },
  button: {
    color: theme.palette.text.primary,
    border: `solid 5px ${theme.palette.common.black}`,
    borderRadius: '10px',
    padding: '10px 0',
  }
}));


function App() {
  const classes = useStyles();
  return (
    <Grid item container direction="column" alignItems="center" spacing={5} className={classes.container}>
      <Grid item container>
        <Button color="primary" variant="contained" fullWidth className={classes.button}>Now Playing</Button>
      </Grid>
      <Grid item container>
        <Button color="primary" variant="contained" fullWidth className={classes.button}>My Games</Button>
      </Grid>
      <Grid item container>
        <Button color="primary" variant="contained" fullWidth className={classes.button}>Search</Button>
      </Grid>
    </Grid >
  );
}

export default App;
