import Auth from './Auth'
import { USER } from './_constants'

const User = {
  getCurrent: function () {
    return Auth.requestAPI(
      USER.GET_CURRENT.METHOD,
      USER.GET_CURRENT.URL
    )
  },
  create: function (data) {
    return Auth.requestAPI(
      USER.CREATE.METHOD,
      USER.CREATE.URL,
      data
    )
  }
}

export default User
