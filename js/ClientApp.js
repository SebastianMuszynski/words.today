import React from 'react'
import ReactDOM from 'react-dom'
import '../css/HomePage'

const HelloWorld = React.createClass({
  render () {
    return (
      <h1>Hello World</h1>
    )
  }
})

ReactDOM.render(<HelloWorld />, document.getElementById('app'))
