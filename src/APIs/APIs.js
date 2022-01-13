import { requestOptions } from './configAPI';

export function GET_Products(token) {
  return requestOptions({
    url: `/produtos/listar`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token,
    }
  });
}

export function POST_Login(email, password) {
  return requestOptions({
    url: `/login/acessar`,
    method: 'POST',
    body: {
      "email": email,
      "senha": password,
    }
  });
}