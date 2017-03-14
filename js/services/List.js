import Auth from './Auth'
import { LIST } from './_constants'

const List = {
  getAll: function () {
    return Auth.requestAPI(
      LIST.GET_ALL.METHOD,
      LIST.GET_ALL.URL
    )
  },
  create: function (data) {
    return Auth.requestAPI(
      LIST.CREATE.METHOD,
      LIST.CREATE.URL,
      data
    )
  }
}

export default List
