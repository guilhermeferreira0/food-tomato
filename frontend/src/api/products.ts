import { Api } from './index';

export async function getProducts() {
  const { data } = await Api.get('/food');
  return data;
}