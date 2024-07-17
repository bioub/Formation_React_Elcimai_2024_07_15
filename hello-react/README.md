# Exercices

## Tester de fonctions

Tester `pairs.ts` et `racineCarre.ts`

Vérifier avec `npx vitest --dom --coverage` que 100% des lignes soit couvertes dans ces 2 fichiers (installer la lib demandée).

## Tester des composant React

Tester `Select.tsx` :

- vérifier que le composant "render"
- vérifier qu'il affiche la valeur sélectionné
- vérifier qu'en cliquant sur la valeur sélectionnée le menu s'ouvre
- vérifier qu'en cliquant sur un item le callback `onSelected` soit appelé avec la bonne valeur (ouvrir le menu au préalable)
- vérifier qu'en cliquant sur `window` le menu se referme (ouvrir le menu au préalable)
- créer une ref avec `createRef` de React (`useRef` ne pouvant s'utiliser que dans un composant)
la passer à `<Select>` et vérifier qu'en appelant `openMenu` le menu s'ouvre bien
