import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../Helpers";

type Props = {
  children?: ReactNode;
};

const InitialUser: User = { email: "", username: "" };

export const AuthContext = createContext({
  isLoading: false,
  error: false,
  isAuthenticated: false,
  currentUser: InitialUser,
  login: (username: string, password: string) => {},
  signout: () => {},
});

export const AuthWrapper = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState(InitialUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    setError(false);

    const request = await fetch("http://localhost:5074/api/Auth/Loggin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    if (!request.ok) {
      setIsAuthenticated(false);
      setIsLoading(false);
      setError(true);
    }
    if (request.ok) {
      const data = await request.json();
      const user = {
        email: data.username,
        username: data.username,
      };
      setCurrentUser(user);
      setIsLoading(false);
      setError(false);
    }
  };
  const signout = () => {
    setIsAuthenticated(false);
    setCurrentUser({ email: "", username: "" });
  };

  return (
    <AuthContext.Provider
      value={{ error, isLoading, isAuthenticated, currentUser, login, signout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
