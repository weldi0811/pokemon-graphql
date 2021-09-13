import usePokemonList from './pokemon-list.hooks';
import Link from 'next/link';
import Image from 'next/image';

export default function PokemonList() {
  const { loading, data } = usePokemonList();

  return (
    <div>
      {!loading &&
        data.pokemons.results.map(item => {
          return (
            <Link key={item.id} href={`pokemon/${item.name}`} passHref>
              <div>
                <div className="flex w-80 bg-white shadow-md rounded-lg overflow-hidden mx-auto mt-2">
                  <div className="w-2 bg-gray-800"></div>

                  <div className="flex items-center px-2 py-3 w-max">
                    <Image
                      className="rounded-full border"
                      alt="User avatar"
                      src={item.dreamworld}
                      width={80}
                      height={80}
                    />

                    <div className="mx-3 max-w">
                      <p className="text-gray-600 ">Name : {item.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
}
