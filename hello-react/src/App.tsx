import { useRef, useState } from 'react'
import './App.css'
import Select, { SelectRef } from './Select';

function App() {
  const [count, setCount] = useState(0);
  const [departement, setDepartement] = useState('Choisissez un département');
  const [ville, setVille] = useState('Choisissez une ville');
  const [villes, setVilles] = useState<string[]>([]);
  const selectDeptRef = useRef<SelectRef>(null);

  function handleSelectedDepartement(item: string) {
    if (item === '77') {
      setVilles(['Melun', 'Fontainebleau']);
    } else {
      setVilles(['Paris 17e', 'Paris 1er']);
    }
    setDepartement(item);
    selectDeptRef.current?.openMenu();
  }

  return (
    <>
      <button className='selected' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Select items={['75', '77']} selected={departement} onSelected={handleSelectedDepartement} />
        <Select items={villes} selected={ville} onSelected={setVille} componentRef={selectDeptRef} />
    </>
  )
}

export default App
