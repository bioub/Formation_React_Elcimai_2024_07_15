import { ReactNode } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { useSelector } from 'react-redux';
import { pokemonsToCompareSelector } from '../store/pokemonsSlice';
function PokemonCompare(): ReactNode {
  const pokemonsToCompare = useSelector(pokemonsToCompareSelector);

  if (pokemonsToCompare.length !== 2) {
    return null;
  }

  return (
    <div className="PokemonCompare">
      <div className="row">
        {pokemonsToCompare.map((pokemon) => (
          <div className="col s6" key={pokemon!.id}>
            <PokemonCardDetails pokemon={pokemon!} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PokemonCompare;
