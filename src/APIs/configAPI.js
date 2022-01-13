export const baseURL = 'https://innovationbrindes-dev.com.br/api/innova-dinamica';

export const requestOptions = ({ url, method = 'GET', body, headers }) => {
  const request = {
    url: baseURL + url,
    options: {
      method: method,
      headers: headers ? headers : {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    },
  };
  return request;
};