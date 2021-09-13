import { useEffect, useState } from 'react';
import Image from 'next/image';
import PlaceholderImage from '../../assets/ui-image-placeholder-wireframes-apps-260nw-1037719204.webp';

import usePokemonDetail from './pokemon-detail.hooks';

const Detail = () => {
  const { data, loading } = usePokemonDetail();
  const [image, setImage] = useState('');

  useEffect(() => {
    if (data) {
      return setImage(data.pokemon.sprites.front_default);
    }
  }, [loading]);

  return (
    <>
      {!loading && (
        <Image
          className="rounded-full border"
          alt="User avatar"
          src={image || PlaceholderImage}
          width={180}
          height={180}
        />
      )}
    </>
  );
};

export default Detail;
