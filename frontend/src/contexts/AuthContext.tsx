import { createContext, ReactNode, useEffect, useState } from 'react';
import { getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';
import { IContext, UserProps } from './types';

interface ContextProviderProps {
  children: ReactNode
}

export const Context = createContext<IContext>({} as IContext);

export function AuthProvider({children}: ContextProviderProps) {
  const [user, setUser] = useState<UserProps>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);
    const user = { email: email, token: response?.data.token }

    console.log(user);
    setUser(user);
    setUserLocalStorage(user);
  }

  function logout() {
    setUser({});
    setUserLocalStorage(null);
  }
  
  return(
    <Context.Provider value={{ 
      user,
      setUser,
      modalIsOpen,
      setModalIsOpen,
      authenticate,
      logout
    }}>
      {children}
    </Context.Provider>
  );
}
