import { ADD_WORD } from '../constants'

export function addWord (word) {
  return { type: ADD_WORD, word }
}