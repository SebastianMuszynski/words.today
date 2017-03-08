import React from 'react'
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import Auth from './Auth'

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
          <li><a href='#' onClick={this.onLogOutClick}>Log out</a></li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li><a href='#'>About</a></li>
          <li><Link to='/login'>Log in</Link></li>
          <li><Link to='/signup'>Sign up</Link></li>
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
