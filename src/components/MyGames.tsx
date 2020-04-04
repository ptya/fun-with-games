import React from 'react';

import { Grid, Button } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { MY_GAMES } from '../queries';
import { MyGamesData, MyGamesVars } from '../types';

import Back from './Back';

// TODO: if endpoint comes back empty
// TODO: if list is less than X then no pagination
// TODO: UI pagination by 10, but graphql pagination by 30
// TODO: empty state

const MyGames: React.FC = () => {
  const { data, loading, error, fetchMore } = useQuery<MyGamesData, MyGamesVars>(MY_GAMES, {
    variables: {
      after: '',
    },
  });

  if (loading) return <p>Loading</p>; //TODO:
  if (error) return <p>ERROR</p>; //TODO:
  if (!data) return <p>Not found</p>; //TODO:

  console.log(data);

  const isEmpty = data.user.gamePurchases && data.user.gamePurchases.nodes.length === 0;
  const {
    user: {
      gamePurchases: { pageInfo, nodes: games },
    },
  } = data;

  return (
    <Grid item container direction="column" alignItems="center">
      <Grid item>
        {isEmpty && <p>you have no games</p>}
        {!isEmpty &&
          games.map((node: any) => (
            <Link
              key={node.game.id}
              to={{
                pathname: `/game/${node.game.name}`,
                state: {
                  id: node.game.id,
                },
              }}
            >
              <p>
                {node.game.name} + {node.game.id}
              </p>
            </Link>
          ))}
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

export default MyGames;
