import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type StyleProps = {
  isSmall: boolean;
};

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '120px',
  },
  header: (props: StyleProps) => ({
    padding: '1rem 0.5rem',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: props.isSmall! ? '1.5rem' : theme.typography.h1.fontSize,
  }),
}));

type Props = {
  title: string;
  isSmall?: boolean;
};

const Header: React.FC<Props> = ({ title, isSmall = false }) => {
  const classes = useStyles({ isSmall });
  return (
    <Grid item container justify="center" alignItems="center" className={classes.container}>
      <Typography variant="h1" color="textSecondary" className={classes.header}>
        {title}
      </Typography>
    </Grid>
  );
};

export default Header;
