import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    height: '120px',
  },
  header: {
    textTransform: 'uppercase',
  },
});

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid item container justify="center" alignItems="center" className={classes.container}>
      <Typography variant="h1" color="textSecondary" className={classes.header}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Header;
