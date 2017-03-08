import axios from 'axios'

const Auth = {
  signup: function (payload) {
    return axios.post('http://localhost:3000/users', payload).then((res) => {
      localStorage.token = res.data.auth_token
    })
  },
  login: function(payload) {
    return axios.post('http://localhost:3000/authenticate', payload).then((res) => {
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
