import { useNavigate } from 'react-router-dom';
import { Pokemon } from '../models/pokemon';
import './pokemon-card.css';
import { formatDate, formatType } from '../helpers';
import { MouseEvent } from 'react';
import { useCompare } from '../compare-context';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { idsToCompareSelector, toggleId } from '../store/pokemonsSlice';
import { AppDispatch } from '../store/state';

type Props = {
  pokemon: Pokemon;
  borderColor?: string;
};

function PokemonCard({ pokemon }: Props) {
  const navigate = useNavigate();
  const pokemonIdsToCompare = useSelector(idsToCompareSelector);
  const dispatch = useDispatch<AppDispatch>();

  function goToPokemon(id: number) {
    navigate(`/pokemons/${id}`);
  }

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    goToPokemon(pokemon.id ?? 0)
  }

  return (
    <div className={clsx("col s6 m4", pokemonIdsToCompare.includes(pokemon.id!) && 'blue')} onClick={() => dispatch(toggleId(pokemon.id!))}>
      <div className="card horizontal">
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name} />
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p>
              <small>{formatDate(pokemon.created)}</small>
            </p>
            {pokemon.types?.map((type) => (
              <span key={type} className={formatType(type)}>
                {type}
              </span>
            ))}
            <button onClick={handleClick}>Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
