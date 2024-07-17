export function pairs(nbs: number[]) {
  return nbs.filter((nb) => nb % 2 === 0);
}

// toBe teste les référence
// toEqual teste le contenu (du tableau / de l'objet)
