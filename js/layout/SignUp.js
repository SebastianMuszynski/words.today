import React from 'react'
import { browserHistory } from 'react-router'
import Auth from '../Auth'

const SignUp = React.createClass({
  getInitialState () {
    return {
      fields: {
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      isFormValid: false
    }
  },
  onInputChange (event) {
    let fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({ fields: fields, isFormValid: this.isFormValid() })
  },
  isFormValid () {
    return this.areRequiredFieldsFilled() && this.arePasswordsEqual()
  },
  areRequiredFieldsFilled () {
    let fields = this.state.fields
    return Object.keys(fields).every((key) => !!fields[key])
  },
  arePasswordsEqual () {
    return this.refs.password.value == this.refs.passwordConfirmation.value
  },
  handleSubmit (event) {
    event.preventDefault()
    const payload = {
      user: {
        username: this.state.fields.username,
        email: this.state.fields.email,
        password: this.state.fields.password
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
              ref="password"
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onInputChange}
            />
            <input
              name="passwordConfirmation"
              ref="passwordConfirmation"
              type="password"
              placeholder="Password confirmation"
              value={this.state.passwordConfirmation}
              onChange={this.onInputChange}
            />
            <input
              type="submit"
              value="SIGN UP"
              disabled={!this.state.isFormValid}
            />
          </form>
        </div>
      </div>
    )
  }
})

export default SignUp
