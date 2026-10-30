import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
export default function Card() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme === "light" ? "div-card-content div-light": "div-card-content div-black"}>
      <p>Card: {theme}</p>
    </div>
  );
}
