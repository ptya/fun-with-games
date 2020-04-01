import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px',
  },
  link: {
    width: '100%',
  },
}));

const Menu: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" alignItems="center" spacing={5} className={classes.container}>
      <Grid item container>
        <Link to="/now-playing" className={classes.link}>
          <Button color="primary" variant="contained" fullWidth>
            Now Playing
          </Button>
        </Link>
      </Grid>
      <Grid item container>
        <Link to="/my-games" className={classes.link}>
          <Button color="primary" variant="contained" fullWidth>
            My Games
          </Button>
        </Link>
      </Grid>
      <Grid item container>
        <Link to="/search" className={classes.link}>
          <Button color="primary" variant="contained" fullWidth>
            Search
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Menu;
