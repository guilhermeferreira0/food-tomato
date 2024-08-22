import { createContext, ReactNode, useEffect, useState } from 'react';
import { getTokenCookie, getUserLocalStorage, LoginRequest, setUserLocalStorage } from './util';
import { IContext, UserProps } from './types';
import Cookies from 'universal-cookie';

interface ContextProviderProps {
  children: ReactNode
}

export const Context = createContext<IContext>({} as IContext);

export function AuthProvider({children}: ContextProviderProps) {
  const [user, setUser] = useState<UserProps>({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const cookies = new Cookies();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);
    const user = { email: email, token: response?.data.token }

    setUser(user);
    cookies.set('jwt_authorization', response?.data.token);
    console.log(getTokenCookie());
    setUserLocalStorage(user);
  }

  function logout() {
    setUser({});
    cookies.remove('jwt_authorization');
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
