import React from 'react'

const SignUp = React.createClass({
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
    this.refs.submitBtn.disabled = !!(this.state.password !== this.state.password_confirmation)
  },
  handleSubmit (event) {
    event.preventDefault()
  },
  render () {
    return (
      <div className='actionForm'>
        <div>
          <h1>Sign Up</h1>
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
            <input
              type="password"
              placeholder="Password confirmation"
              value={this.state.password_confirmation}
              onChange={this.onPasswordConfirmationChange}
            />
            <input type="submit" value="Submit" ref='submitBtn' />
          </form>
        </div>
      </div>
    )
  }
})

export default SignUp
