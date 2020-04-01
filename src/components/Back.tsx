import React from 'react';
import { Grid, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  link: {
    width: '100%',
  },
  button: {
    backgroundImage: `
    linear-gradient(
      to bottom,
      #999 20%,
      #8D8D8D 20%,
      #8D8D8D 85%,
      #6A6A69 85%
      );
    `,
  },
}));

type Props = {
  className?: string;
};

const Back: React.FC<Props> = ({ className = '' }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <Grid item container className={className}>
      <Link onClick={handleClick} className={classes.link}>
        <Button color="secondary" variant="contained" fullWidth className={classes.button}>
          Back
        </Button>
      </Link>
    </Grid>
  );
};

export default Back;
