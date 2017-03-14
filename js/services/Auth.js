import axios from 'axios'
import { AUTH, USER } from './_constants'

const Auth = {
  requestAPI: function (method, url, data) {
    return axios({
      method: method,
      url: url,
      data: data,
      headers: {
        Authorization: this.getToken()
      }
    })
  },
  login: function(data) {
    return this.requestAPI(AUTH.AUTHENTICATE.METHOD, AUTH.AUTHENTICATE.URL, data).then((res) => {
      localStorage.token = res.data.auth_token
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
