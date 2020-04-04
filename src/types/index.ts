interface Developer {
  id: number;
  name: string;
}
interface Publisher {
  id: number;
  name: string;
}
interface Platform {
  id: number;
  name: string;
}
interface Genre {
  id: number;
  name: string;
}

interface Game {
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

interface PageInfo {
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
}

export interface GameData {
  game: Game;
}

export interface GameVars {
  id: number;
}

enum Status {
  UNPLAYED = 'UNPLAYED',
  IN_PROGRESS = 'IN_PROGRESS',
  DROPPED = 'DROPPED',
  COMPLETED = 'COMPLETED',
  FULLY_COMPLETED = 'FULLY_COMPLETED',
  NOT_APPLICABLE = 'NOT_APPLICABLE',
  PAUSED = 'PAUSED',
}

export interface GamePurchase {
  id: number;
  completionStatus: Status;
  game: Game;
}

interface GamePurchases {
  nodes: GamePurchase[];
  pageInfo: PageInfo;
}

export interface MyGamesData {
  user: {
    gamePurchases: GamePurchases;
  };
}

export interface MyGamesVars {
  after?: string;
}
export interface AddGameData {
  gamePurchases: GamePurchases;
}

export interface AddGameVars {
  id: number;
}
