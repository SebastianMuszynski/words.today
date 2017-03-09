import React from 'react'
import Auth from '../Auth'
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
          <h1 className='magic-title'>Learn vocabulary with ease</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
})

export default App
