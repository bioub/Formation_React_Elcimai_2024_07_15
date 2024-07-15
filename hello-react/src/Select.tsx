import { useEffect, useState } from 'react';
import styles from './Select.module.css';

type Props = {
  items: string[];
  selected: string;
  onSelected(v: string): void;
};

function Select({ items, selected, onSelected }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function handleItemClick(item: string) {
    onSelected(item);
    setMenuIsOpen(false);
  }

  useEffect(() => {
    function windowClickListener() {
      setMenuIsOpen(false);
    }
    window.addEventListener('click', windowClickListener, { capture: true })
    return () => {
      window.removeEventListener('click', windowClickListener, { capture: true })
    }
  }, [])

  return (
    <div className="Select" onClick={() => setMenuIsOpen(!menuIsOpen)}>
      <div className={styles.selected}>{selected}</div>
      {menuIsOpen && (
        <div className={styles.menu}>
          {items.map((item) => (
            <div
              key={item}
              className={styles.item}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
