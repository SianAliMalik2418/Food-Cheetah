"use client";

import { useSession } from "next-auth/react";
import { createContext, useContext } from "react";

const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const { data: session , status } = useSession();
  const userId = session?.user?.id;

  return (
    <authContext.Provider value={{ userId , status }}>{children}</authContext.Provider>
  );
};
export default AuthContextProvider;

export const useAuthContext = () => {
  const context = useContext(authContext);
  return context;
};
