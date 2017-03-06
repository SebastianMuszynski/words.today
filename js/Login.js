import React from 'react'

const Login = React.createClass({
  getInitialState () {
    return {
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  onEmailChange (event) {
    this.setState({ email: event.target.email })
  },
  onPasswordChange (event) {
    this.setState({ password: event.target.password })
  },
  onPasswordConfirmationChange (event) {
    this.setState({ password_confirmation: event.target.password_confirmation })
  },
  handleSubmit (event) {
    event.preventDefault()
  },
  render () {
    return (
      <div className='Login'>
        <div>
          <h1>Log in</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="E-mail"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    )
  }
})

export default Login
