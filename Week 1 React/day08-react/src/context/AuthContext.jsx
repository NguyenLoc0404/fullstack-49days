import { createContext } from "react";
import { useState, useEffect } from "react";
import { checkToken } from "../service/authService";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  useEffect(() => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      getInformation();
    } else {
      setIsAuthLoading(false)
    }
  }, []);
  async function getInformation() {
    await checkToken()
      .then((res) => {
        login(res.data, false);
      })
      .catch(() => {
        sessionStorage.removeItem("accessToken");
        setIsAuthenticated(false);
      })
      .finally(() => setIsAuthLoading(false));
  }

  function login(userData, setToken = true) {
    setUser(userData);
    setIsAuthenticated(true);
    if (setToken) {
      sessionStorage.setItem("accessToken", userData.accessToken);
    }
  }
  function logout() {
    setUser(null);
    setIsAuthenticated(false);
    sessionStorage.removeItem("accessToken");
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isAuthLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
