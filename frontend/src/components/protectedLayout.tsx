import { useAuth } from "../contexts/AuthContext/useAuth";
import {getTokenCookie, getUserLocalStorage} from '../contexts/AuthContext/util';

interface ProtectedLayoutProps {
  children: JSX.Element
}

export function ProtectedLayout({children}: ProtectedLayoutProps) {
  const auth = useAuth();
  const userLocalStorage = getUserLocalStorage();
  const token = getTokenCookie();

  if (
      !token ||
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