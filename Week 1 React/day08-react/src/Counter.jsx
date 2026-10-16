import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [histoies, setHistoies] = useState([]);
  function returnCurrentHistory(current, action) {
    return {
      pre: current,
      next:
        action === "Tăng" ? current + 1 : action === "Giảm" ? current - 1 : 0,
      action,
    };
  }
  function add() {
    if (count <= 19) {
      setCount((count) => count + 1);
      setHistoies((histoies) => [
        ...histoies,
        returnCurrentHistory(count, "Tăng"),
      ]);
    }
  }
  function reset() {
    setCount(0);
    setHistoies((histoies) => [
      ...histoies,
      returnCurrentHistory(count, "Reset"),
    ]);
  }
  function minus() {
    if (count >= 1) {
      setCount((count) => count - 1);
      setHistoies((histoies) => [
        ...histoies,
        returnCurrentHistory(count, "Giảm"),
      ]);
    }
  }
  function renderHistoies() {
    return histoies.map((history, index) => (
      <p key={index}>
        {index + 1}. {history.action}: {history.pre} - {history.next}
      </p>
    ));
  }
  return (
    <>
      <h5>Số Đếm Hiện Taị</h5>
      <h2>{count}</h2>
      <>
        <button onClick={() => minus()}>- Giảm</button>
        <button onClick={() => add()}>+ Tăng</button>
        <button onClick={() => reset()}>Reset</button>
      </>
      <>
        <p>Lịch sử thao tác</p>
        <>{renderHistoies()}</>
      </>
    </>
  );
}
