export const MOVIES_BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_BASE_URL = 'https://api.movies.olgalatkina.nomoredomains.sbs';

export const IMAGES_URL = 'https://api.nomoreparties.co';
export const SHORT_FILM_DURATION = 40;
export const HTTP_REGEX = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

export const SearchMessage = {
  EMPTY: 'Нужно ввести ключевое слово',
  NOT_FOUND: 'Ничего не найдено',
  NOT_SAVED: 'У вас нет сохранённых фильмов',
  SEARCH_ERROR: 'Во время загрузки сохранённых фильмов произошла ошибка. Подождите немного и попробуйте обновить страницу.',
}

export const AppMessage = {
  SUCCESS: 'Всё прошло успешно!',
  REGISTER_SUCCESS: 'Вы успешно зарегистрировались!',
  UPDATE_SUCCESS: 'Ваши данные успешно изменены',
  ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  BAD_REQUEST: 'Что-то пошло не так.',
}

export const CodeError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  ALREADY_EXISTS: 409,
  SERVER_ERROR: 500,
};

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
