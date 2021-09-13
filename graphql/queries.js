import gql from 'graphql-tag';

export const POKEMON_LIST = gql`
  query pokemons($limit: Int) {
    pokemons(limit: $limit) {
      results {
        id
        name
        dreamworld
      }
    }
  }
`;

export const POKEMON_DETAIL = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
    }
  }
`;
