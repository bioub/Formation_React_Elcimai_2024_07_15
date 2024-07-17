import { useState, useEffect } from 'react';
import { Pokemon } from '../models/pokemon';
import PokemonCard from '../components/pokemon-card';
import { getPokemons } from '../services/pokemon-service';
import { Link, Navigate } from 'react-router-dom';
import PokemonSearch from '../components/pokemon-search';
import { isAuthenticated } from '../services/authentication-service';
import { useCompare } from '../compare-context';
import clsx from 'clsx';
import List from '../components/list';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/state';
import { filteredPokemonsSelector, requestPokemons, requestPokemonsSuccess } from '../store/pokemonsSlice';

function PokemonList() {
  console.log('render PokemonList');
  
  const { pokemonIdsToCompare } = useCompare();
  // const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const pokemons = useSelector<RootState, Pokemon[]>(filteredPokemonsSelector);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(requestPokemons())
    getPokemons().then((pokemons) => dispatch(requestPokemonsSuccess(pokemons)));
  }, []);

  if (!isAuthenticated) {
    return <Navigate to={{ pathname: '/login' }} />;
  }

  return (
    <div>
      <h1 className="center">Pokédex</h1>
      <div className="container">
        <div className="row">
          <PokemonSearch />
          {/* {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))} */}
          <List items={pokemons} renderItem={(pokemon: Pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon} />} />
        </div>
      </div>
    <Link

        className={clsx("btn-floating btn-large waves-effect waves-light blue z-depth-3", pokemonIdsToCompare.length !== 2 && 'disabled')}
        style={{ position: 'fixed', bottom: '25px', right: '100px' }}
        to="/pokemon/compare"
      >
        <i className="material-icons">compare</i>
      </Link>
      <Link
        className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{ position: 'fixed', bottom: '25px', right: '25px' }}
        to="/pokemon/add"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

export default PokemonList;
