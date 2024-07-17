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
  }
});

export const pokemonsReducer = pokemonsSlice.reducer;
export const { setTerm, requestPokemons, requestPokemonsSuccess } = pokemonsSlice.actions;
