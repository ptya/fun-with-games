import { gql } from 'apollo-boost';

export interface Developer {
  id: number;
  name: string;
}
export interface Publisher {
  id: number;
  name: string;
}
export interface Platform {
  id: number;
  name: string;
}
export interface Genre {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  coverUrl?: string;
  releaseDate?: string;
  developers: {
    nodes: Developer[];
  };
  publishers: {
    nodes: Publisher[];
  };
  platforms: {
    nodes: Platform[];
  };
  genres: {
    nodes: Genre[];
  };
}

export interface PageInfo {
  pageSize: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  endCursor?: string;
  startCursor?: string;
}

export interface GameSearchData {
  gameSearch: {
    nodes: Game[];
    pageInfo: PageInfo;
  };
}

export interface GameSearchVars {
  query: string | undefined;
  after?: string;
  before?: string;
}

export interface GameData {
  game: Game;
}

export interface GameVars {
  id: number;
}

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
