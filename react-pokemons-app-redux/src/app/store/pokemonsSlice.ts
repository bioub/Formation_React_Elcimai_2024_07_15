import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../models/pokemon";

export type PokemonSlice = {
  term: string;
  items: Pokemon[];
  loading: boolean;
  idsToCompare: number[];
}

const initialState: PokemonSlice = {
  term: '',
  items: [],
  loading: false,
  idsToCompare: [],
};

const pokemonsSlice = createSlice({
  initialState,
  name: 'pokemons',
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      // immer
      state.term = action.payload;
      state.idsToCompare = [];
    },
    requestPokemons(state, action: PayloadAction<void>) {
      state.loading = true;
    },
    requestPokemonsSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    toggleId(state, action: PayloadAction<number>) {
      if (state.idsToCompare.includes(action.payload)) {
        state.idsToCompare = state.idsToCompare.filter((pokemonId) => pokemonId !== action.payload);
      } else if (state.idsToCompare.length < 2) {
        state.idsToCompare.push(action.payload);
      } else {
        // le tableau contient déjà 2 pokemons
      }
    }
  },
  selectors: {
    termSelector(state) {
      return state.term;
    },
    filteredPokemonsSelector(state) {
      // attention ici state = state.pokemons
      // si besoin d'un selector plus global le créer en dehors du slice comme dans les
      // exemple dans demo-redux
      const term = state.term.toLocaleLowerCase();
      return state.items.filter((item) => item.name?.toLocaleLowerCase().includes(term));
    },
    idsToCompareSelector(state) {
      return state.idsToCompare;
    },
    pokemonsToCompareSelector(state) {
      return state.idsToCompare.map((id) => state.items.find((p) => p.id === id));
    }
  }
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const { setTerm, requestPokemons, requestPokemonsSuccess, toggleId } = pokemonsSlice.actions;
export const { termSelector, filteredPokemonsSelector, idsToCompareSelector, pokemonsToCompareSelector } = pokemonsSlice.selectors;
