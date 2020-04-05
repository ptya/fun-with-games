import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    '& .MuiButton-label': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      display: 'inline-block',
    },
  },
}));

const GameButton: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Button color="secondary" variant="contained" fullWidth className={classes.button}>
      {children}
    </Button>
  );
};

export default GameButton;
