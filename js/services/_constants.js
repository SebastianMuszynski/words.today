export const API_HOST = process.env.API_HOST

export const AUTH = {
  AUTHENTICATE: {
    METHOD: 'POST',
    URL: `${API_HOST}/authenticate`
  }
}

export const USER = {
  GET_CURRENT: {
    METHOD: 'GET',
    URL: `${API_HOST}/user_info`
  },
  CREATE: {
    METHOD: 'POST',
    URL: `${API_HOST}/users`
  },
  UPDATE: {
    METHOD: 'PUT',
    URL: (id) => `${API_HOST}/users/${id}`
  }
}

export const LIST = {
  GET_ALL: {
    METHOD: 'GET',
    URL: `${API_HOST}/lists`
  },
  GET: {
    METHOD: 'GET',
    URL: (id) => `${API_HOST}/lists/${id}`
  },
  CREATE: {
    METHOD: 'POST',
    URL: `${API_HOST}/lists`
  }
}

export const WORD = {
  GET_ALL: {
    METHOD: 'GET',
    URL: (id) => `${API_HOST}/lists/${id}/words`
  },
  CREATE: {
    METHOD: 'POST',
    URL: (id) => `${API_HOST}/lists/${id}/words`
  }
}

export const TRANSLATION = {
  GET_ALL: {
    METHOD: 'GET',
    URL: (listId, wordId) => `${API_HOST}/lists/${listId}/words/${wordId}/translations`
  },
  CREATE: {
    METHOD: 'POST',
    URL: (listId, wordId) => `${API_HOST}/lists/${listId}/words/${wordId}/translations`
  }
}
