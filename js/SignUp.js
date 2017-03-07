import React from 'react'

const SignUp = React.createClass({
  getInitialState () {
    return {
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
  },
  render () {
    return (
      <div className='actionForm'>
        <div>
          <h1>Sign Up</h1>
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
