import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
export default function Dashboard() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  function logOutNow() {
    logout();
    navigate("/login");
  }
  return (
    <>
      <p>welcome to DashBoard</p>
      <button onClick={logOutNow}>Log Out</button>
    </>
  );
}
