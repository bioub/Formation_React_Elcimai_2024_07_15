import { memo, ReactNode } from 'react';

type Props<T> = {
  items: T[];
  renderItem(item: T): ReactNode;
};

function List<T>({ items, renderItem }: Props<T>): ReactNode {
  console.log('render List');

  // Exemple (absurde) de code synchrone qui ralenti l'affichage du composant
  // const debut = Date.now();
  // while (debut + 1000 > Date.now());
  
  return items.map((item) => renderItem(item));
}

export default memo(List, (prevProps, nextProps) => prevProps.items === nextProps.items);