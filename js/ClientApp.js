import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import Login from './Login'
import SignUp from './SignUp'
import '../css/App'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <Route path="login" component={Login} />
      <Route path="signup" component={SignUp} />
    </Route>
  </Router>
), document.getElementById('app'))
