import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './layout/App'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Study from './pages/Study'

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Home} />
      <Route path="login" component={Login} />
      <Route path="signup" component={SignUp} />
      <Route path="study" component={Study} />
    </Route>
  </Router>
), document.getElementById('app'))
