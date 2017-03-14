import axios from 'axios'
import { AUTH } from './_constants'

const Auth = {
  requestAPI: function (method, url, data) {
    return axios({
      method: method,
      url: url,
      data: data,
      headers: {
        Authorization: this.getToken()
      }
    }).then((result) => {
      return result.data
    })
  },
  login: function(data) {
    return this.requestAPI(
      AUTH.AUTHENTICATE.METHOD,
      AUTH.AUTHENTICATE.URL,
      data
    ).then((result) => {
      localStorage.token = result.auth_token
    })
  },
  logout: function() {
    delete localStorage.token
  },
  getToken: function() {
    return localStorage.token
  },
  isLoggedIn: function() {
    return !!localStorage.token
  }
}

export default Auth
