import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Login from './Login'
import SignUp from './SignUp'
import HomePage from './HomePage'
import '../css/HomePage'

render((
  <Router history={hashHistory}>
    <Route path="/" component={HomePage} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
  </Router>
), document.getElementById('app'))
