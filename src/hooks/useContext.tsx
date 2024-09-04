import { useContext } from "react";
import { AuthContext } from "../auth/authWrapper";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error("You are using this beyond your limits");
  }

  return context;
};
