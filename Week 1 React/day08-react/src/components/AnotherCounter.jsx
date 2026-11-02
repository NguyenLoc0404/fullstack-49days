import useCounter from "../hooks/useCounter";
export default function AnotherCounter() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <p>Count B: {count}</p>
      <>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
      </>
    </>
  );
}
