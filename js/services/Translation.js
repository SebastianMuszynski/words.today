import Auth from './Auth'
import { TRANSLATION } from './_constants'

const Translation = {
  getAll: function (listId, wordId) {
    return Auth.requestAPI(
      TRANSLATION.GET_ALL.METHOD,
      TRANSLATION.GET_ALL.URL(listId, wordId)
    )
  },
  create: function (listId, wordId, data) {
    return Auth.requestAPI(
      TRANSLATION.CREATE.METHOD,
      TRANSLATION.CREATE.URL(listId, wordId),
      data
    )
  }
}

export default Translation
