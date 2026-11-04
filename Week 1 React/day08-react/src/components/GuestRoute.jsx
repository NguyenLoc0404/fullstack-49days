import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
export default function GuestRoute({ children }) {
  const { user, isAuthenticated, isAuthLoading } = useContext(AuthContext);
  if (isAuthLoading) {
    return <>Checking User Token</>;
  } else if (isAuthenticated && user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return children;
}
