import React from 'react';

import { Grid, Button } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';

import { MY_GAMES } from '../queries';
import { MyGamesData, MyGamesVars } from '../types';

import GameList from './GameList';
import Back from './Back';

// TODO: if endpoint comes back empty
// TODO: if list is less than X then no pagination
// TODO: UI pagination by 10, but graphql pagination by 30
// TODO: empty state
// TODO: shoot off mutation after adding a new game

const MyGames: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<MyGamesData, MyGamesVars>(MY_GAMES, {
    variables: {
      after: '',
    },
  });

  if (loading) return <p>Loading</p>; //TODO:
  if (error) return <p>ERROR</p>; //TODO:
  if (!data) return <p>Not found</p>; //TODO:

  const isEmpty = data.user.gamePurchases && data.user.gamePurchases.nodes.length === 0;
  const {
    user: {
      gamePurchases: { pageInfo, nodes },
    },
  } = data;

  const games = nodes.map((node) => node.game);

  return (
    <Grid item container direction="column" alignItems="center" spacing={3}>
      {isEmpty && <p>you have no games</p>}
      {!isEmpty && <GameList games={games} />}
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

export default MyGames;
