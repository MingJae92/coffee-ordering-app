import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthContextDataTypes,
  UserDataTypes,
} from "../../types/AuthContextTypes/AuthContextTypes.types";

const AuthContext = createContext<AuthContextDataTypes>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserDataTypes | null>(null);
  const navigate = useNavigate();

  const login = (userData: UserDataTypes) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/dashboard"); // or your desired path
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
