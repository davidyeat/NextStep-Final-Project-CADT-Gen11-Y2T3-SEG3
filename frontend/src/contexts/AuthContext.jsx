import { createContext, useEffect, useState } from "react";
import {loginUser, logoutUser, registerUser,getCurrentUser } from "../services/authService";

const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Authentication the current user when the app starts
   */
  useEffect(() => {
    async function initializeAuth() {
      console.log("Initializing authentication...");
      try {
        const data = await getCurrentUser();
        setUser(data);
        setIsAuthenticated(true);
      } catch (error) {
        if ([401, 403].includes(error.response?.status)) {
          setUser(null);
          setIsAuthenticated(false);
        } else {
          console.error("Auth check failed:", error);
        }
      } finally {
        setLoading(false);
      }
    }
    initializeAuth();
  }, []);

  async function login(credentials) {
    try {
      const response = await loginUser(credentials);
      setUser(response.user);
      setIsAuthenticated(true);
      return response.user;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function register(userData) {
    try {
      const response = await registerUser(userData);
      setUser(response.user);
      setIsAuthenticated(true);
      return response.user;
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
      console.error("Registration failed:", error);
      throw error;
    }
  }

  async function logout() {
    try {
      await logoutUser();
    } catch (error) {
      console.error("Logout failed:", error);
      throw error;
    } finally {
      setUser(null);
      setIsAuthenticated(false);
    }
  }

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
