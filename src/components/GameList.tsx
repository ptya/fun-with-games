import React from 'react';

import { Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { Game } from '../types';

import GameButton from './GameButton';

type Props = {
  games: Game[];
};

const useStyles = makeStyles((theme) => ({
  gamesContainer: {
    width: '100%',
  },
}));

const GameList: React.FC<Props> = ({ games }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" spacing={1}>
      {games.map((game: Game) => (
        <Grid key={game.id} item className={classes.gamesContainer}>
          <Link
            to={{
              pathname: `/game/${game.name}`,
              state: {
                id: game.id,
              },
            }}
          >
            <GameButton>{game.name}</GameButton>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default GameList;
