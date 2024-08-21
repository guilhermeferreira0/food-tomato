import { Api } from "../api";

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