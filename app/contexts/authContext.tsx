import React, { createContext, useState, useContext, ReactNode } from "react";
import { login as loginService } from "../services/authService";
import { LoginRequest, LoginResponse } from "../types/authType";
import { useNavigation } from "@react-navigation/native";

interface AuthContextType {
  user: LoginResponse["user"] | null;
  token: string | null;
  error: string;
  login: (loginData: LoginRequest) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const navigation = useNavigation();
  const [user, setUser] = useState<LoginResponse["user"] | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const login = async (loginData: LoginRequest) => {
    try {
      const result = await loginService(loginData);
      console.log("logado!");
      navigation.navigate("Initial" as never);
      setUser(result.user);
      setToken(result.token);
      setError("");
    } catch (err: any) {
      setError(err.message);
      console.log("DEU RUIM");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    navigation.navigate("Login" as never);
  };

  return (
    <AuthContext.Provider value={{ user, token, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
