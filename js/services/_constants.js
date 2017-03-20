export const API_HOST = 'http://localhost:3000'

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
    URL: (userId) => `${API_HOST}/users/${userId}`
  }
}

export const LIST = {
  GET_ALL: {
    METHOD: 'GET',
    URL: `${API_HOST}/lists`
  },
  CREATE: {
    METHOD: 'POST',
    URL: `${API_HOST}/lists`
  }
}

export const WORD = {
  GET_ALL: {
    METHOD: 'GET',
    URL: function (listId) {
      return `${API_HOST}/lists/${listId}/words`
    }
  },
  CREATE: {
    METHOD: 'POST',
    URL: function (listId) {
      return `${API_HOST}/lists/${listId}/words`
    }
  }
}

export const TRANSLATION = {
  GET_ALL: {
    METHOD: 'GET',
    URL: function (listId, wordId) {
      return `${API_HOST}/lists/${listId}/words/${wordId}/translations`
    }
  },
  CREATE: {
    METHOD: 'POST',
    URL: function (listId, wordId) {
      return `${API_HOST}/lists/${listId}/words/${wordId}/translations`
    }
  }
}
