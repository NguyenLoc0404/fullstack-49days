import useCounter from "../hooks/useCounter";
export default function CounterCp() {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <>
      <p>Count A: {count}</p>
      <>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-</button>
      </>
    </>
  );
}
