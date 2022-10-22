const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class MoviesApi {
  constructor ({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkPromise(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(this._baseUrl, {
      method: 'GET',
      headers: this._headers
    }).then(this._checkPromise);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export default moviesApi;
