import { gql } from 'apollo-boost';

export const GET_GAMES = gql`
  query SEARCH($query: String!, $after: String, $before: String) {
    gameSearch(query: $query, after: $after, before: $before) {
      nodes {
        id
        name
        coverUrl
        releaseDate
        developers {
          nodes {
            id
            name
          }
        }
        publishers {
          nodes {
            id
            name
          }
        }
        genres {
          nodes {
            id
            name
          }
        }
        platforms {
          nodes {
            id
            name
          }
        }
      }
      pageInfo {
        pageSize
        hasPreviousPage
        hasNextPage
        endCursor
        startCursor
      }
    }
  }
`;

export const GET_GAME = gql`
  query GAME($id: ID!) {
    game(id: $id) {
      id
      name
      coverUrl
      releaseDate
      genres {
        nodes {
          id
          name
        }
      }
      publishers {
        nodes {
          id
          name
        }
      }
      developers {
        nodes {
          id
          name
        }
      }
      platforms {
        nodes {
          id
          name
        }
      }
    }
  }
`;

export const MY_GAMES = gql`
  query MY_GAMES {
    user(username: "ptrszb") {
      gamePurchases {
        nodes {
          completionStatus
          game {
            id
            name
            coverUrl
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
          pageSize
        }
      }
    }
  }
`;
