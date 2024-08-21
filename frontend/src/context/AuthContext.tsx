import { createContext, ReactNode, useState } from 'react';
import api from '../api';

interface ContextProviderProps {
  children: ReactNode
}

export const Context = createContext({});

export function AuthProvider({children}: ContextProviderProps) {
  const [isLogged, setIsLogged] = useState(false);

  async function handleLogin() {
    const { data } = await api.get('/');
    console.log(data);

    setIsLogged(true);
  }
  
  return(
    <Context.Provider value={{ isLogged, setIsLogged, handleLogin }}>
      {children}
    </Context.Provider>
  );
}
