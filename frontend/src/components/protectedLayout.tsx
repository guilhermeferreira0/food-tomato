import { useAuth } from "../contexts/useAuth";
import {getUserLocalStorage} from '../contexts/util';

interface ProtectedLayoutProps {
  children: JSX.Element
}

export function ProtectedLayout({children}: ProtectedLayoutProps) {
  const auth = useAuth();
  const userLocalStorage = getUserLocalStorage();

  if (
      !auth.user.token ||
      auth.user.email !== userLocalStorage.email ||
      auth.user.token !== userLocalStorage.token 
    ) {
    return (
      <h1>You don´t have access</h1>
    );
  }

  return children;
}