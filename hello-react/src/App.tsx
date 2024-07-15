import { useState } from 'react'
import './App.css'
import Select from './Select';

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');

  return (
    <>
      <button className='selected' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      <Select items={['blue', 'green', 'red']} selected={color} onSelected={setColor} />
    </>
  )
}

export default App
