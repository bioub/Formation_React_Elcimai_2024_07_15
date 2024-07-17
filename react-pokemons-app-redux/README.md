# Exercices

## Redux

Nous allons migrer `CompareContext` vers Redux.

Ajouter une nouvelle clé `idsToCompare` au state `pokemons` (de type `number[]`)

Le state global stocké dans Redux sera donc de la forme :
```
{
  items: [], // tableau de pokemons,
  loading: false, // est-ce qu'une requete est en cours,
  term: '', // le contenu du champ de recherche
  idsToCompare: [2, 5], // les ids des pokemons à comparer
}
```

Modifier le slice `pokemonsSlice` de sorte à créer un action creator `toggleId` qui retourne un objet :

```
{
type: 'pokemons/toggleId',
payload: 2, // l'id du pokemon sélectionné
}
```

et de sorte à ce qu'il modifie le state comme précédemment avec le context (ajoute l'id si absent de `idsToCompare`, retire l'id sinon, soit rien si déjà 2 ids)

Tester avec Redux DevTools en faisant des dispatch de l'action :

```
{
type: 'pokemons/toggleId',
payload: 2, // l'id du pokemon sélectionné
}
```

Utiliser `useDispatch` pour créer l'action `pokemons/toggleId` lorsqu'on clique sur la carte dans `PokemonCard`

Créer et utiliser `idsToCompareSelector` pour récupérer les `idsToCompare` dans `PokemonCard` et modifier la couleur de fond de la carte comme avec le context (`idsToCompare.includes(pokemon.id ?? 0)`)

Créer un sélecteur `pokemonsToCompareSelector` qui transforme la clé `idsToCompare` du state en tableau de pokemon à comparer. Appeler ce selecteur dans `PokemonCompare`.

Bonus : installer et configurer Redux Persist https://github.com/rt2zz/redux-persist

Bonus : Utiliser `createSelector` pour ne pas réexécuter `pokemonsToCompareSelector` si `idsToCompare` et `items` ne changent pas (memoisation: voir la doc de redux toolkit)

