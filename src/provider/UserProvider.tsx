import { createContext, FC, ReactNode } from "react";

export const UserContext = createContext({});

type Props = {
  children: ReactNode;
};

export const UserProvider: FC<Props> = (props) => {
  const { children } = props;
  const contextName = "aaa";
  return (
    <>
      <UserContext.Provider value={{ contextName }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
