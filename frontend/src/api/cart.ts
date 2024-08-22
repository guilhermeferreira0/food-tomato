import { Api } from ".";

export async function getAllCart() {
  const { data } = await Api.get('/cart');
  return data;
}