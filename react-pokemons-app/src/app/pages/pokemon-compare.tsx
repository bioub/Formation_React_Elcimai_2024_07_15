import { ReactNode, useEffect, useState } from 'react';
import PokemonCardDetails from '../components/pokemon-card-details';
import { getPokemon } from '../services/pokemon-service';
import { Pokemon } from '../models/pokemon';
import { useCompare } from '../compare-context';

function PokemonCompare(): ReactNode {
  const [pokemon1, setPokemon1] = useState<Pokemon>();
  const [pokemon2, setPokemon2] = useState<Pokemon>();
  console.log('render PokemonCompare');
  const { pokemonIdsToCompare } = useCompare();

  useEffect(() => {
    console.log('useEffect PokemonCompare');
    
    Promise.all([
      getPokemon(pokemonIdsToCompare[0]),
      getPokemon(pokemonIdsToCompare[1]),
    ]).then(([pokemon1, pokemon2]) => {
      setPokemon1(pokemon1);
      setPokemon2(pokemon2);
    })
    // getPokemon(1).then((pokemon1) => {
    //   setPokemon1(pokemon1);
    // })
    // getPokemon(2).then((pokemon2) => {
    //   setPokemon2(pokemon2);
    // })
  }, []);

  if (!pokemon1 || !pokemon2) {
    return null;
  }

  return (
    <div className="PokemonCompare">
      <div className="row">
        <div className="col s6">
          <PokemonCardDetails pokemon={pokemon1} />
        </div>
        <div className="col s6">
          <PokemonCardDetails pokemon={pokemon2} />
        </div>
      </div>
    </div>
  );
}

export default PokemonCompare;
