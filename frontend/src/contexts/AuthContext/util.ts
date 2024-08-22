import { Api } from "../../api";
import Cookies from 'universal-cookie';

export function getTokenCookie() {
  const cookies = new Cookies();
  return cookies.get('jwt_authorization');
}

export function setUserLocalStorage(user: any) {
  localStorage.setItem('ustj', JSON.stringify(user));
}

export function getUserLocalStorage() {
  const json = localStorage.getItem('ustj');
  if (!json) {
    return null;
  }

  const user = JSON.parse(json);
  return user ?? null;
}

export async function LoginRequest(email: string, password: string) {
  try {
    const request = await Api.post('/user/login', {email, password});
    return request;
  } catch (error) {
    return null;
  }
}