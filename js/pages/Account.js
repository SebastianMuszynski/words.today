import React from 'react'
import Auth from '../services/Auth'
import User from '../services/User'
import axios from 'axios'
import '../../css/Account'

const Account = React.createClass({
  getInitialState () {
    return {
      user: {}
    }
  },
  componentDidMount () {
    User.getCurrentUser().then((user) => {
      this.setState({ user: user })
    })
  },
  render () {
    return (
      <div className='Account'>
        <div className='container'>
          <h1>Your account</h1>
          <div className='user-info'>
            <div className='user-info__label'>Username</div>
            <div className='user-info__value'>{ this.state.user.username }</div>
          </div>
          <div className='user-info'>
            <div className='user-info__label'>Email address</div>
            <div className='user-info__value'>{ this.state.user.email }</div>
          </div>
        </div>
      </div>
    )
  }
})

export default Account
