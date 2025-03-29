import { createContext, FC, ReactNode, useState } from "react";

type UserContextType = {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const UserProvider: FC<Props> = (props) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const { children } = props;
  return (
    <>
      <UserContext.Provider value={{ isAdmin, setIsAdmin }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
