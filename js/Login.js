import React from 'react'
import { browserHistory } from 'react-router'
import Auth from './Auth'

const Login = React.createClass({
  getInitialState () {
    return {
      email: '',
      password: ''
    }
  },
  onInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  },
  handleSubmit (event) {
    event.preventDefault()
    const payload = {
      email: this.state.email,
      password: this.state.password
    }
    Auth.login(payload).then(() => {
      browserHistory.push('/')
    })
  },
  render () {
    return (
      <div className='actionForm'>
        <div>
          <h1>Log In</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.onInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInputChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
})

export default Login
