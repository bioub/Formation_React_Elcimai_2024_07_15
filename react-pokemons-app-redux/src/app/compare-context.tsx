import { createContext, PropsWithChildren, useContext, useRef, useState } from 'react';

type CompareContextObject = {
  pokemonIdsToCompare: number[];
  toggleId(id: number): void;
};

export const CompareContext = createContext<CompareContextObject>({
  pokemonIdsToCompare: [],
  toggleId(_id: number) {
    throw new Error('To use CompareContext you have to use <CompareProvider>');
  },
});

export function useCompare(): CompareContextObject {
  return useContext(CompareContext);
}

export function CompareProvider({ children }: Readonly<PropsWithChildren>) {
  const [pokemonIdsToCompare, setPokemonIdsToCompare] = useState<number[]>([]);
  const valueRef = useRef<CompareContextObject>();

  if (!valueRef.current) {
    valueRef.current = {
      pokemonIdsToCompare,
      toggleId(id: number) {
        if (pokemonIdsToCompare.includes(id)) {
          setPokemonIdsToCompare(pokemonIdsToCompare.filter((pokemonId) => pokemonId !== id));
        } else if (pokemonIdsToCompare.length < 2) {
          setPokemonIdsToCompare([...pokemonIdsToCompare, id]);
        } else {
          // le tableau contient déjà 2 pokemons
        }
      }
    } 
  }

  return (
    // Problème de perf, la valeur passée à CompareContext.Provider, est un objet qui sera recréé
    // à chaque click sur un pokemon card
    // idem pour toggleId (la fonction est récréé à chaque mise à jour du state)
    // Solution 1 : utiliser une ref qui sera conservée entre 2 render
    // Solution 2 : utiliser useMemo
    <CompareContext.Provider value={valueRef.current}>
      {children}
    </CompareContext.Provider>
  );
}
