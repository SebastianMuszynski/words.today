import React from 'react'
import { browserHistory } from 'react-router'
import Auth from './Auth'
import NavLink from './ui/NavLink'
import '../css/Header'

const Header = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool
  },
  onLogOutClick (event) {
    event.preventDefault()
    Auth.logout()
    browserHistory.push('/')
  },
  getNavigation () {
    if (this.props.isLoggedIn) {
      return (
        <ul>
          <li><a href='#'>About</a></li>
          <li><a href='#' onClick={this.onLogOutClick}>Log Out</a></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><a href='#'>About</a></li>
          <li><NavLink to='/login'>Log In</NavLink></li>
          <li><NavLink to='/signup'>Sign Up</NavLink></li>
        </ul>
      )
    }
  },
  render () {
    return (
      <header>
        <nav>
          { this.getNavigation() }
        </nav>
      </header>
    )
  }
})

export default Header
