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
        if (error.response?.status === 401) {
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
      const userData = await loginUser(credentials);
      setUser(userData);
      setIsAuthenticated(true);
      return userData;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  async function register(userData) {
    try {
      const newUser = await registerUser(userData);
      setUser(newUser);
      setIsAuthenticated(true);
      return newUser;
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
