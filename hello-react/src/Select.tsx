import { Ref, useEffect, useImperativeHandle, useRef, useState } from 'react';
import styles from './Select.module.css';

type Props = {
  items: string[];
  selected: string;
  onSelected(v: string): void;
  componentRef?: Ref<SelectRef>
};

export interface SelectRef {
  openMenu(): void;
}

function Select({ items, selected, onSelected, componentRef }: Readonly<Props>) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);

  function handleItemClick(item: string) {
    onSelected(item);
    setMenuIsOpen(false);
  }

  useEffect(() => {
    function windowClickListener(event: MouseEvent) {
      if (!hostRef.current?.contains(event.target as Element)) {
        setMenuIsOpen(false);
      } 
    }
    window.addEventListener('click', windowClickListener, { capture: true })
    return () => {
      window.removeEventListener('click', windowClickListener, { capture: true })
    }
  }, [])

  useImperativeHandle(componentRef, () => ({
    openMenu() {
      setMenuIsOpen(true);
    }
  }), []);

  return (
    <div ref={hostRef} className="Select" onClick={() => setMenuIsOpen(!menuIsOpen)}>
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
