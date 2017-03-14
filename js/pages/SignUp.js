import React from 'react'
import { browserHistory, Link } from 'react-router'
import Auth from '../services/Auth'
import User from '../services/User'

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
    const data = {
      user: {
        username: this.state.fields.username,
        email: this.state.fields.email,
        password: this.state.fields.password
      }
    }
    this.signUpAndLogIn(data)
  },
  signUpAndLogIn (data) {
    User.create(data).then((user) => {
      const loginData = {
        email: data.user.email,
        password: data.user.password
      }
      Auth.login(loginData).then(() => {
        browserHistory.push('/')
      })
    })
  },
  render () {
    return (
      <div className='AuthForm'>
        <div className='AuthForm__form'>
          <h1>Sign up</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Username"
              value={this.state.fields.username}
              onChange={this.onInputChange}
            />
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={this.state.fields.email}
              onChange={this.onInputChange}
            />
            <input
              name="password"
              ref="password"
              type="password"
              placeholder="Password"
              value={this.state.fields.password}
              onChange={this.onInputChange}
            />
            <input
              name="passwordConfirmation"
              ref="passwordConfirmation"
              type="password"
              placeholder="Password confirmation"
              value={this.state.fields.passwordConfirmation}
              onChange={this.onInputChange}
            />
            <input
              type="submit"
              value="SIGN UP"
              disabled={!this.state.isFormValid}
            />
          </form>
          <div className='AuthForm__links'>
            <Link to='/'>↫ Home</Link>
            <Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    )
  }
})

export default SignUp
