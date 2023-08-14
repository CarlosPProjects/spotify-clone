"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { FC } from "react";

interface UserProvider {
  children: React.ReactNode;
}

const UserProvider: FC<UserProvider> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;