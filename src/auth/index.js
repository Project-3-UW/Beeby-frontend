import { useEffect, useState } from "react";


export const TOKEN_NAME = "token";

function getTokenFromLocal() {
  return localStorage.getItem(TOKEN_NAME);
}

function setTokenToLocal(token) {
  localStorage.setItem(TOKEN_NAME, token);
}

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (newToken) => {
    if (newToken) {
      setTokenToLocal(newToken);
      setAuthenticated(true);
      
    }
  };

  const logout = async () => {
    setTokenToLocal("");
    setAuthenticated(false);

  };

  useEffect(() => {
    const token = getTokenFromLocal();
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return {
    authenticated,
    login,
    logout,
  };
};
