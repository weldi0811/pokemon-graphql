import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';

import { POKEMON_DETAIL } from '../../graphql/queries';

const usePokemonDetail = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data, loading } = useQuery(POKEMON_DETAIL, {
    variables: { name: name },
    skip: !name,
  });

  return { data, loading };
};

export default usePokemonDetail;
