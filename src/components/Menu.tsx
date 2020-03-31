import React from 'react';
import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '70px',
  },
  button: {
    color: theme.palette.text.primary,
    borderTop: `solid 5px ${theme.palette.common.black}`,
    borderBottom: `solid 5px ${theme.palette.common.black}`,
    borderRadius: 0,
    padding: '10px 0',
    backgroundImage: `
    linear-gradient(
      to bottom,
      #E8CFA0 20%,
      #F0D050 20%,
      #F0D050 85%,
      #FDAB3B 85%
      );
    `,
    '&:before': {
      content: '""',
      width: 5,
      height: '100%',
      background: theme.palette.common.black,
      position: 'absolute',
      right: -5,
    },
    '&:after': {
      content: '""',
      width: 5,
      height: '100%',
      background: theme.palette.common.black,
      position: 'absolute',
      left: -5,
    },
  },
}));

const Menu: React.FC = () => {
  const classes = useStyles();
  return (
    <Grid item container direction="column" alignItems="center" spacing={5} className={classes.container}>
      <Grid item container>
        <Button color="primary" variant="contained" fullWidth className={classes.button}>
          Now Playing
        </Button>
      </Grid>
      <Grid item container>
        <Button color="primary" variant="contained" fullWidth className={classes.button}>
          My Games
        </Button>
      </Grid>
      <Grid item container>
        <Button color="primary" variant="contained" fullWidth className={classes.button}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Menu;
