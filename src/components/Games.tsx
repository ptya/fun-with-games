import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import { GET_GAMES } from '../queries';
import { GameSearchData, GameSearchVars } from '../types';

import Back from './Back';

// TODO: if endpoint comes back empty
// TODO: if list is less than X then no pagination
// TODO: UI pagination by 10, but graphql pagination by 30

const Games: React.FC = () => {
  const { search } = useParams();
  const { data, loading, error, fetchMore } = useQuery<GameSearchData, GameSearchVars>(GET_GAMES, {
    variables: {
      query: search,
      after: '',
    },
  });

  if (loading) return <p>Loading</p>; //TODO:
  if (error) return <p>ERROR</p>; //TODO:
  if (!data) return <p>Not found</p>; //TODO:
  return (
    <Grid item container direction="column" alignItems="center">
      <Grid item>Games</Grid>
      <Grid item>
        {data.gameSearch &&
          data.gameSearch.nodes &&
          data.gameSearch.nodes.map((game: any) => (
            <Link
              key={game.id}
              to={{
                pathname: `/game/${game.name}`,
                state: {
                  id: game.id,
                },
              }}
            >
              <p>
                {game.name} + {game.id}
              </p>
            </Link>
          ))}
      </Grid>
      {data.gameSearch && data.gameSearch.pageInfo && data.gameSearch.pageInfo.hasNextPage && (
        <Button
          onClick={() =>
            fetchMore({
              variables: {
                query: search,
                after: data.gameSearch.pageInfo.endCursor,
              },
              updateQuery: (previousResult, { fetchMoreResult }) => {
                if (!fetchMoreResult) return previousResult;
                return {
                  gameSearch: {
                    ...fetchMoreResult.gameSearch,
                    nodes: [...previousResult.gameSearch.nodes, ...fetchMoreResult.gameSearch.nodes],
                  },
                };
              },
            })
          }
        >
          Load More
        </Button>
      )}
      <Back />
    </Grid>
  );
};

export default Games;
