import React from 'react'
import { browserHistory, Link } from 'react-router'
import Auth from '../services/Auth'
import NavLink from '../ui/NavLink'
import '../../css/Header'

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
          <li><NavLink to='/lists'>Lists</NavLink></li>
          <li><NavLink to='/account'>Account</NavLink></li>
          <li><a href='#' onClick={this.onLogOutClick}>Log out</a></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><NavLink to='/login'>Log in</NavLink></li>
          <li><NavLink to='/signup'>Sign up</NavLink></li>
        </ul>
      )
    }
  },
  render () {
    return (
      <header className='header'>
        <nav>
          { this.getNavigation() }
        </nav>
      </header>
    )
  }
})

export default Header
