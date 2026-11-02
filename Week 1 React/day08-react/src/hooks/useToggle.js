import { useState } from "react";
export default function useToggle() {
  const [value, setValue] = useState(false);
  function toggle() {
    setValue((value) => !value);
  }
  function setTrue() {
    setValue(true);
  }
  function setFalse() {
    setValue(false);
  }
  return {
    value,
    toggle,
    setTrue,
    setFalse,
  };
}
