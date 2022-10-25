export const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_BASE_URL = 'https://api.movies.olgalatkina.nomoredomains.sbs';

export const SearchMessage = {
  EMPTY: 'Нужно ввести ключевое слово',
  NOT_FOUND: 'Ничего не найдено',
  NOT_AVAILABLE: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'
}

export const AppMessage = {
  SUCCESS: 'Вы успешно зарегистрировались!',
  BAD_REQUEST: 'Что-то пошло не так.',
}

export const VALIDATION = {
  username: {
    pattern: '^[\\sa-zA-Zа-яА-ЯёЁ-]+$',
    message: 'Имя может содержать только латиницу, кириллицу, пробел или дефис',
  },
  email: {
    pattern: '^[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$',
    message: 'Некорректный Email-адрес',
  },
};

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

export const SHORT_FILM_DURATION = 40;
export const IMAGES_URL = 'https://api.nomoreparties.co';
