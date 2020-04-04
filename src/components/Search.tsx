import React, { useState } from 'react';
import { Grid, TextField, makeStyles, Button } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router-dom';

import Back from './Back';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `solid 5px #222`,
    borderBottom: `solid 5px #222`,
    borderRadius: 0,
    background: theme.palette.secondary.main,
    backgroundImage: `
    linear-gradient(
      to bottom,
      ${theme.palette.secondary.main} 90%,
      #C4C4C4 90%
      );
    `,
    '&:before': {
      content: '""',
      width: 5,
      height: '100%',
      background: '#222',
      position: 'absolute',
      right: -5,
    },
    '&:after': {
      content: '""',
      width: 5,
      height: '100%',
      background: '#222',
      position: 'absolute',
      left: -5,
    },
  },
  error: {
    borderColor: '#E3001D',
    '&:before, &:after': {
      background: '#E3001D',
    },
  },
  container: {
    marginTop: '3rem',
  },
  back: {
    marginTop: '6rem',
  },
}));

const Search: React.FC = () => {
  const [name, setName] = useState('');
  const [isError, setError] = useState(false);

  const history = useHistory();
  const location = useLocation();
  console.log(location);
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    if (isError && value.length > 0) {
      setError(false);
    }
    setName(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length < 1) {
      setError(true);
    } else {
      history.push(`games/${name}`);
    }
  };

  return (
    <Grid container direction="column" spacing={2} className={classes.container}>
      <Grid item>
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                id="name"
                name="name"
                placeholder="Witcher 3"
                value={name}
                onChange={handleChange}
                variant="outlined"
                autoFocus
                fullWidth
                InputProps={{
                  classes: {
                    root: classes.root,
                    error: classes.error,
                  },
                }}
                error={isError}
              />
            </Grid>
            <Grid item>
              <Button type="submit" color="primary" variant="contained" fullWidth>
                Search
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
      <Back className={classes.back} />
    </Grid>
  );
};

export default Search;
