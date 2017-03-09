import React from 'react'
import { browserHistory } from 'react-router'
import Auth from '../Auth'

const SignUp = React.createClass({
  getInitialState () {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  },
  onInputChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  },
  onPasswordConfirmationChange (event) {
    this.onInputChange(event)
    this.refs.submitBtn.disabled = !!(this.state.password !== event.target.value)
  },
  handleSubmit (event) {
    event.preventDefault()
    let payload = {
      user: {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    }
    Auth.signup(payload).then((res) => {
      browserHistory.push('/')
    })
  },
  render () {
    return (
      <div className='actionForm'>
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={this.onInputChange}
            />
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
            <input
              name="passwordConfirmation"
              type="password"
              placeholder="Password confirmation"
              value={this.state.passwordConfirmation}
              onChange={this.onPasswordConfirmationChange}
            />
            <input type="submit" value="Submit" ref='submitBtn' disabled />
          </form>
        </div>
      </div>
    )
  }
})

export default SignUp
