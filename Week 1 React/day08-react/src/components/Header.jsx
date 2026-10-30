import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  function handleToggleTheme() {
    setTheme(currentTheme => currentTheme === "light" ? "dark" : "light");
  }
  return (
    <>
     <button onClick={handleToggleTheme}>
        Change Theme
      </button>
      <p className={theme === "light" ? "div-header-content div-light": "div-header-content div-black"}>Header: {theme}</p>
    </>
  );
}
