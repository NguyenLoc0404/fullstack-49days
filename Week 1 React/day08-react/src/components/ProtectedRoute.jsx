import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isAuthLoading } = useContext(AuthContext);
  if (isAuthLoading) {
    return <>Checking User Token </>;
  } else if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
