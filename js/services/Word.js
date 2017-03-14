import Auth from './Auth'
import { WORD } from './_constants'

const Word = {
  getAll: function (listId) {
    return Auth.requestAPI(
      WORD.GET_ALL.METHOD,
      WORD.GET_ALL.URL(listId)
    ).then((result) => {
      return result.data
    })
  },
  create: function (listId, data) {
    return Auth.requestAPI(
      WORD.CREATE.METHOD,
      WORD.CREATE.URL(listId),
      data
    ).then((result) => {
      return result.data
    })
  }
}

export default Word
