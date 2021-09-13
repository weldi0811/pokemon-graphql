import { useQuery } from '@apollo/client';
import { POKEMON_LIST } from '../../../graphql/queries';

const usePokemonList = () => {
  const { loading, error, data } = useQuery(POKEMON_LIST);
  console.log(data);
  return { loading, error, data };
};

export default usePokemonList;
