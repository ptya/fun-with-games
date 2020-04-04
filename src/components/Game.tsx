import React from 'react';
import { Grid, Paper, Typography, makeStyles } from '@material-ui/core';
import { useParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_GAME } from '../queries';
import { GameData, GameVars } from '../queries';

import Header from './Header';
import Back from './Back';

const useStyles = makeStyles((theme) => ({
  paper: {
    ...theme.mixins.bordered,
    padding: '1.5rem 1rem',
    marginTop: '1rem',
    background: theme.palette.secondary.main,
  },
  header: {
    marginTop: '1rem',
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  image: {
    maxWidth: 100,
    display: 'block',
  },
  imageContainer: {
    ...theme.mixins.bordered,
    marginTop: '1rem',
  },
}));

// TODO: have a default picture for games not having cover
// TODO: add game button if it is not yet added
// TODO: remove game button if it is not yet added

const Game: React.FC = () => {
  const {
    state: { id },
  } = useLocation();
  const { name } = useParams();
  const classes = useStyles();

  const { data, loading, error } = useQuery<GameData, GameVars>(GET_GAME, {
    variables: {
      id,
    },
  });

  if (loading) return <p>Loading</p>; //TODO:
  if (error) return <p>ERROR</p>; //TODO:
  if (!data) return <p>Not found</p>; //TODO:

  return (
    <>
      <Header title={name!} isSmall />
      <Grid item container direction="column" spacing={5}>
        <Grid item>
          <Paper className={classes.paper}>
            {data.game.releaseDate && (
              <>
                <Typography variant="h2" className={classes.header}>
                  Release Date
                </Typography>
                <Typography>{data.game.releaseDate}</Typography>
              </>
            )}
            {data.game.developers.nodes.length > 0 && (
              <>
                <Typography variant="h2" className={classes.header}>
                  Developer{data.game.developers.nodes.length > 1 ? 's' : ''}
                </Typography>
                {data.game.developers.nodes.map((developer) => (
                  <Typography key={developer.id}>{developer.name}</Typography>
                ))}
              </>
            )}
            {data.game.publishers.nodes.length > 0 && (
              <>
                <Typography variant="h2" className={classes.header}>
                  Publisher{data.game.publishers.nodes.length > 1 ? 's' : ''}
                </Typography>
                {data.game.publishers.nodes.map((publisher) => (
                  <Typography key={publisher.id}>{publisher.name}</Typography>
                ))}
              </>
            )}
            {data.game.platforms.nodes.length > 0 && (
              <>
                <Typography variant="h2" className={classes.header}>
                  Platform{data.game.platforms.nodes.length > 1 ? 's' : ''}
                </Typography>
                {data.game.platforms.nodes.map((platform) => (
                  <Typography key={platform.id}>{platform.name}</Typography>
                ))}
              </>
            )}
            {data.game.genres.nodes.length > 0 && (
              <>
                <Typography variant="h2" className={classes.header}>
                  Genre{data.game.genres.nodes.length > 1 ? 's' : ''}
                </Typography>
                {data.game.genres.nodes.map((genre) => (
                  <Typography key={genre.id}>{genre.name}</Typography>
                ))}
              </>
            )}
            {data.game.coverUrl && (
              <Grid container justify="center">
                <Grid item className={classes.imageContainer}>
                  <img className={classes.image} src={`https://vglist.co/${data.game.coverUrl}`} alt={data.game.name} />
                </Grid>
              </Grid>
            )}
          </Paper>
        </Grid>
        <Back />
      </Grid>
    </>
  );
};

export default Game;
