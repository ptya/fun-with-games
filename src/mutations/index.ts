import { gql } from 'apollo-boost';

export const ADD_GAME = gql`
  mutation ADD_GAME($id: ID!) {
    addGameToLibrary(gameId: $id) {
      gamePurchase {
        id
        game {
          id
          name
        }
      }
    }
  }
`;
