export const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_BASE_URL = 'https://api.movies.olgalatkina.nomoredomains.sbs';

export const SearchMessage = {
  EMPTY: 'Нужно ввести ключевое слово',
  NOT_FOUND: 'Ничего не найдено',
  NOT_AVAILABLE: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
}

export const CodeError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  ALREADY_EXISTS: 409, // ConflictError
  SERVER_ERROR: 500,
};

export const nameRegExp = '[A-Za-zА-Яа-яЁё-]+[A-Za-zА-Яа-яЁё\\s-]*[A-Za-zА-Яа-яЁё-]*';
export const emailRegExp = '([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\\.[a-z]{2,})';

export const Breakpoint = {
  MOBILE: 480,
  TABLET: 1010,
  DESKTOP: 1280,
};

export const Length = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
}
