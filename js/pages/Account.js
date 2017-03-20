import React from 'react'
import { Link } from 'react-router'
import User from '../services/User'
import classNames from 'classnames'
import NotificationSystem from 'react-notification-system'
import '../../css/Account'

const Account = React.createClass({
  _notificationSystem: null,

  getInitialState () {
    return {
      fields: {
        actualPassword: '',
        newPassword: '',
        newPasswordConfirmation: ''
      },
      isFormHidden: true,
      isFormValid: false,
      user: {}
    }
  },
  componentDidMount () {
    this._notificationSystem = this.refs.notificationSystem

    User.getCurrent().then((user) => {
      this.setState({ user: user })
    })
  },
  onInputChange (event) {
    let fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({ fields: fields, isFormValid: this.isFormValid() })
  },
  arePasswordsEqual () {
    return this.refs.newPassword.value === this.refs.newPasswordConfirmation.value
  },
  areFieldsFilled () {
    let fields = this.state.fields
    return Object.keys(fields).every((key) => !!fields[key])
  },
  clearForm () {
    let fields = this.state.fields
    fields.actualPassword = ''
    fields.newPassword = ''
    fields.newPasswordConfirmation = ''
    this.setState({ fields: fields, isFormValid: this.isFormValid() })
  },
  isFormValid () {
    return this.areFieldsFilled() && this.arePasswordsEqual()
  },
  showPasswordForm (event) {
    event.preventDefault()
    this.setState({ isFormHidden: false })
  },
  handleChangePassword (event) {
    event.preventDefault()
    let data = {
      email: this.state.user.email,
      password: this.state.fields.actualPassword,
      user: {
        password: this.state.fields.newPassword
      }
    }
    this.updatePassword(data)
  },
  updatePassword (data) {
    User.update(this.state.user.id, data).then((result) => {
      this.setState({ isFormHidden: true })
      this.clearForm()

      this._notificationSystem.addNotification({
        level: 'success',
        message: 'You have a new password now!',
        position: 'tl',
      })
    }, (error) => {
      this._notificationSystem.addNotification({
        level: 'error',
        message: 'Something went wrong, try again please.',
        position: 'tl',
      })
    })
  },
  render () {
    return (
      <div className='AccountPage'>
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
          <div className='user-info options'>
            <button
              onClick={this.showPasswordForm}
              className={classNames({
                hidden: !this.state.isFormHidden
              })}
            >
              I want to change my password
            </button>
          </div>
          <div className='form-container'>
            <form
              className={classNames('password-form', {
                hidden: this.state.isFormHidden
              })}
              onSubmit={this.handleChangePassword}
            >
              <input
                type='password'
                name='actualPassword'
                placeholder='Actual password'
                onChange={this.onInputChange}
                value={this.state.fields.actualPassword}
              />
              <input
                type='password'
                name='newPassword'
                ref='newPassword'
                placeholder='New password'
                onChange={this.onInputChange}
                value={this.state.fields.newPassword}
              />
              <input
                type='password'
                name='newPasswordConfirmation'
                ref='newPasswordConfirmation'
                placeholder='New password confirmation'
                onChange={this.onInputChange}
                value={this.state.fields.newPasswordConfirmation}
              />
              <input
                type='submit'
                value='Change password'
                disabled={!this.state.isFormValid}
              />
            </form>
          </div>
          <div className='bottom-links'>
            <Link to='/'>↫ Home</Link>
          </div>
        </div>
        <NotificationSystem ref="notificationSystem" />
      </div>
    )
  }
})

export default Account
