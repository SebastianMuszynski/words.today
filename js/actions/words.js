import {
  FETCH_WORDS_REQUEST,
  FETCH_WORDS_SUCCESS,
  FETCH_WORDS_FAILURE,
} from '../constants'

export const fetchWordsRequest = (listId) => (
  { type: FETCH_WORDS_REQUEST, listId }
)

export const fetchWordsSuccess = (listId, response) => (
  { type: FETCH_WORDS_SUCCESS, listId, response }
)

export const fetchWordsFailure = (listId, error) => (
  { type: FETCH_WORDS_FAILURE, payload, error }
)

