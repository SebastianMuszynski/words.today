import Auth from './Auth'
import { LIST } from '../constants'

const List = {
  getAll () {
    return Auth.requestAPI(
      LIST.GET_ALL.METHOD,
      LIST.GET_ALL.URL
    )
  },
  get (id) {
    return Auth.requestAPI(
      LIST.GET.METHOD,
      LIST.GET.URL(id)
    )
  },
  create (data) {
    return Auth.requestAPI(
      LIST.CREATE.METHOD,
      LIST.CREATE.URL,
      data
    )
  }
}

export default List
