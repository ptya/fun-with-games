import React from 'react';
import { Grid, makeStyles, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';

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
    '& .MuiFormHelperText-root': {
      display: 'none',
    },
  },
  back: {
    marginTop: '6rem',
  },
}));

interface FormData {
  name: string;
}

const Search: React.FC = () => {
  const history = useHistory();
  const classes = useStyles();

  const initialValues = {
    name: '',
  };

  const onSubmit = (values: FormData) => {
    history.push(`games/${values.name}`);
  };

  const validate = async (values: FormData) => {
    if (!values.name) {
      return { name: 'required' };
    }
    return;
  };

  return (
    <Grid container direction="column" spacing={2} className={classes.container}>
      <Grid item>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({ handleSubmit }) => (
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    id="name"
                    name="name"
                    placeholder="Witcher 3"
                    variant="outlined"
                    autoFocus
                    fullWidth
                    required={true}
                    InputProps={{
                      classes: {
                        root: classes.root,
                        error: classes.error,
                      },
                    }}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" color="primary" variant="contained" fullWidth>
                    Search
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </Grid>
      <Back className={classes.back} />
    </Grid>
  );
};

export default Search;
