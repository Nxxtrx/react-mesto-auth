export const BASE_URL = 'https://auth.nomoreparties.co';

export const registr = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  }).then((response) => {
    return response.json();
  }).then((res) => {
    return res;
  }).catch((err) => {console.log(err)})
}

export const authorize = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  }).then((response) => response.json())
  .then((data) => {
    localStorage.setItem('jwt', data.token)
    return data.token
  }).catch((err) => console.log(err))
}

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`
    }
  }).then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err))
}
