import Auth from './Auth'
import { WORD } from '../constants'

const Word = {
  getAll: function (listId) {
    return Auth.requestAPI(
      WORD.GET_ALL.METHOD,
      WORD.GET_ALL.URL(listId)
    )
  },
  create: function (listId, data) {
    return Auth.requestAPI(
      WORD.CREATE.METHOD,
      WORD.CREATE.URL(listId),
      data
    )
  }
}

export default Word
