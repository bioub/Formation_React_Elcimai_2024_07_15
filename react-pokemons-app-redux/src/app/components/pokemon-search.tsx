import { memo, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import { searchPokemon } from '../services/pokemon-service';
import List from './list';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/state';
import { setTerm, termSelector } from '../store/pokemonsSlice';



function PokemonSearch() {
  console.log('render PokemonSearch');
  
  // const [term, setTerm] = useState('');
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const term = useSelector<RootState, string>(termSelector);
  // const pokemons = useSelector<RootState, Pokemon[]>((state) => state.pokemons.items.filter((item) => item.name?.includes(state.pokemons.term)));
  const dispatch = useDispatch<AppDispatch>();

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
    dispatch(setTerm(term));

    if (term.length <= 1) {
      // setPokemons([]);
      return;
    }

    // searchPokemon(term).then((pokemons) => setPokemons(pokemons));
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
            {/* <div className="collection">
              <List items={pokemons} renderItem={renderItem} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PokemonSearch);
