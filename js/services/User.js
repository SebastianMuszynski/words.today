import Auth from './Auth'
import { USER } from './_constants'

const User = {
  getCurrent () {
    return Auth.requestAPI(
      USER.GET_CURRENT.METHOD,
      USER.GET_CURRENT.URL
    )
  },
  create (data) {
    return Auth.requestAPI(
      USER.CREATE.METHOD,
      USER.CREATE.URL,
      data
    )
  },
  update (userId, data) {
    return Auth.requestAPI(
      USER.UPDATE.METHOD,
      USER.UPDATE.URL(userId),
      data
    )
  }
}

export default User
