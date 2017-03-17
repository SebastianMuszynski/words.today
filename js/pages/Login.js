import React from 'react'
import { browserHistory, Link } from 'react-router'
import Auth from '../services/Auth'

const Login = React.createClass({
  getInitialState () {
    return {
      fields: {
        email: '',
        password: ''
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
    let fields = this.state.fields
    return Object.keys(fields).every((key) => !!fields[key])
  },
  handleSubmit (event) {
    event.preventDefault()
    const data = {
      email: this.state.fields.email,
      password: this.state.fields.password
    }
    this.logIn(data)
  },
  logIn (data) {
    Auth.login(data).then(() => {
      browserHistory.push('/')
    })
  },
  render () {
    return (
      <div className='AuthForm'>
        <div className='AuthForm__form'>
          <h2>Log in</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              name="email"
              type="text"
              placeholder="E-mail"
              value={this.state.fields.email}
              onChange={this.onInputChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={this.state.fields.password}
              onChange={this.onInputChange}
            />
            <input
              type="submit"
              value="LOG IN"
              disabled={!this.state.isFormValid}
            />
          </form>
          <div className='AuthForm__links'>
            <Link to='/'>↫ Home</Link>
            <Link to='/signup'>Sign up</Link>
          </div>
        </div>
      </div>
    )
  }
})

export default Login
