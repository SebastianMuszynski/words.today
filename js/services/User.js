import axios from 'axios'
import Auth from './Auth'

const User = {
  get: function () {
    return axios.get('http://localhost:3000/user_info', Auth.getConfig()).then((user) => {
      return user.data
    })
  }
}

export default User
