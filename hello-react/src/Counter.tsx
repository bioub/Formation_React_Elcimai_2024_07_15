import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button className="Counter" onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}

type Props = {
  count: number;
  onIncrement(): void;
}

export function CounterController({ count, onIncrement }: Readonly<Props>) {
  return (
    <button className="Counter" onClick={() => onIncrement()}>
      {count}
    </button>
  );
}


export default Counter;
