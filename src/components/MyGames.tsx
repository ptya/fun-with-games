import React from 'react';
import { Grid } from '@material-ui/core';

import Back from './Back';

const MyGames: React.FC = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>MyGames</Grid>
      <Back />
    </Grid>
  );
};

export default MyGames;
