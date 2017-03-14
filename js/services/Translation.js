import Auth from './Auth'
import { TRANSLATION } from './_constants'

const Translation = {
  getAll: function (listId, wordId) {
    return Auth.requestAPI(
      TRANSLATION.GET_ALL.METHOD,
      TRANSLATION.GET_ALL.URL(listId, wordId)
    ).then((result) => {
      return result.data
    })
  },
  create: function (listId, wordId, data) {
    return Auth.requestAPI(
      TRANSLATION.CREATE.METHOD,
      TRANSLATION.CREATE.URL(listId, wordId),
      data
    ).then((result) => {
      return result.data
    })
  }
}

export default Translation
