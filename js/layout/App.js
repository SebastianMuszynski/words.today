import React from 'react'
import Auth from '../auth/Auth'
import Header from './Header'
import '../../css/App'

const App = React.createClass({
  isLoggedIn () {
    return Auth.isLoggedIn()
  },
  render () {
    return (
      <div>
        <Header isLoggedIn={this.isLoggedIn()} />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default App
