import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../models/pokemon";

export type PokemonSlice = {
  term: string;
  items: Pokemon[];
  loading: boolean;
}

const initialState: PokemonSlice = {
  term: '',
  items: [],
  loading: false,
};

const pokemonsSlice = createSlice({
  initialState,
  name: 'pokemons',
  reducers: {
    setTerm(state, action: PayloadAction<string>) {
      // immer
      state.term = action.payload;
    },
    requestPokemons(state, action: PayloadAction<void>) {
      state.loading = true;
    },
    requestPokemonsSuccess(state, action: PayloadAction<Pokemon[]>) {
      state.items = action.payload;
      state.loading = false;
    },
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
    } 
  }
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const { setTerm, requestPokemons, requestPokemonsSuccess } = pokemonsSlice.actions;
export const { termSelector, filteredPokemonsSelector } = pokemonsSlice.selectors;
