import React from 'react';
import { Grid } from '@material-ui/core';

import Back from './Back';

const NowPlaying: React.FC = () => {
  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>NowPlaying</Grid>
      <Back />
    </Grid>
  );
};

export default NowPlaying;
