import Auth from './Auth'
import { USER } from './_constants'

const User = {
  getCurrent: function () {
    return Auth.requestAPI(
      USER.GET_CURRENT.METHOD,
      USER.GET_CURRENT.URL
    ).then((result) => {
      return result.data
    })
  },
  create: function (data) {
    return Auth.requestAPI(
      USER.CREATE.METHOD,
      USER.CREATE.URL,
      data
    ).then((result) => {
      return result.data
    })
  }
}

export default User
