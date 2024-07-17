import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import { searchPokemon } from '../services/pokemon-service';
import List from './list';



function PokemonSearch() {
  console.log('render PokemonSearch');
  
  const [term, setTerm] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  // const renderItem = useMemo(() => function renderItem(pokemon: Pokemon) {
  //   return <Link
  //      key={pokemon.id}
  //      to={`/pokemons/${pokemon.id}`}
  //      className="collection-item"
  //    >
  //      {pokemon.name}
  //    </Link>
  //  }, []);

  const renderItem = useCallback(function renderItem(pokemon: Pokemon) {
    return <Link
       key={pokemon.id}
       to={`/pokemons/${pokemon.id}`}
       className="collection-item"
     >
       {pokemon.name}
     </Link>
   }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const term = event.target.value;
    setTerm(term);

    if (term.length <= 1) {
      // setPokemons([]);
      return;
    }

    searchPokemon(term).then((pokemons) => setPokemons(pokemons));
  }

  return (
    <div className="row">
      <div className="col s12 m6 offset-m3">
        <div className="card">
          <div className="card-content">
            <div className="input-field">
              <input
                type="text"
                placeholder="Rechercher un pokémon"
                value={term}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            <div className="collection">
              <List items={pokemons} renderItem={renderItem} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PokemonSearch);
