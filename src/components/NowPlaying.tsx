import React from 'react';

import { Grid, Button, makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { MY_GAMES } from '../queries';
import { MyGamesData, MyGamesVars } from '../types';

import Back from './Back';

// TODO: if endpoint comes back empty
// TODO: if list is less than X then no pagination
// TODO: UI pagination by 10, but graphql pagination by 30
// TODO: empty state
// TODO: autoget paginated ..

const useStyles = makeStyles((theme) => ({
  image: {
    display: 'block',
  },
  imageContainer: {
    ...theme.mixins.bordered,
    width: '100%',
    marginTop: '1rem',
  },
}));

const NowPlaying: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<MyGamesData, MyGamesVars>(MY_GAMES, {
    variables: {
      after: '',
    },
  });

  const classes = useStyles();

  if (loading) return <p>Loading</p>; //TODO:
  if (error) return <p>ERROR</p>; //TODO:
  if (!data) return <p>Not found</p>; //TODO:

  const isEmpty = data.user.gamePurchases && data.user.gamePurchases.nodes.length === 0;
  const {
    user: {
      gamePurchases: { pageInfo, nodes: games },
    },
  } = data;
  const nowPlaying = games.filter((game) => game.completionStatus === 'IN_PROGRESS');
  const isCurrentlyPlaying = !isEmpty && nowPlaying.length > 0;

  return (
    <Grid item container direction="column" spacing={5}>
      <Grid item container>
        <Grid item className={classes.imageContainer}>
          {!isCurrentlyPlaying && <p>you are not playing games</p>}
          {isCurrentlyPlaying && (
            <img
              className={classes.image}
              src={`https://vglist.co/${nowPlaying[0].game.coverUrl}`}
              alt={nowPlaying[0].game.name}
            />
          )}
        </Grid>
      </Grid>
      {pageInfo.hasNextPage && (
        <Grid item>
          <Button
            onClick={() =>
              fetchMore({
                variables: {
                  after: pageInfo.endCursor,
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                  if (!fetchMoreResult) return previousResult;
                  return {
                    user: {
                      gamePurchases: {
                        ...fetchMoreResult.user.gamePurchases,
                        nodes: [
                          ...previousResult.user.gamePurchases.nodes,
                          ...fetchMoreResult.user.gamePurchases.nodes,
                        ],
                      },
                    },
                  };
                },
              })
            }
          >
            Load More
          </Button>
        </Grid>
      )}
      <Back />
    </Grid>
  );
};

export default NowPlaying;
