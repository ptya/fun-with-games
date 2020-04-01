import React from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';

import Back from './Back';

// TODO: if endpoint comes back empty
// TODO: if list is less than X then no pagination

const Games: React.FC = () => {
  const { search } = useParams();
  console.log(search);
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>Games</Grid>
      <Back />
    </Grid>
  );
};

export default Games;
