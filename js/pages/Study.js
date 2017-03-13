import React from 'react'
import { browserHistory } from 'react-router'
import Auth from '../auth/Auth'
import axios from 'axios'
import '../../css/Study'

const Study = React.createClass({
  getInitialState () {
    return {
      fields: {
        newSetName: ''
      },
      isFormValid: false,
      lists: []
    }
  },
  componentDidMount () {
    let config = {
      headers: {
        Authorization: Auth.getToken()
      }
    }
    axios.get('http://localhost:3000/lists', config).then((lists) => {
      this.setState({ lists: lists.data })
    })
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
  },
  onListClick (listId) {
    browserHistory.push('/study/' + listId)
  },
  render () {
    return (
      <div className='Study'>
        <div className='container'>
          <h1>Create new list</h1>
          <div className='create-set'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='newSetName'
                placeholder='Name'
                value={this.state.fields.newSetName}
                onChange={this.onInputChange}
              />
              <input type='submit' />
            </form>
          </div>
          <h1>Your lists</h1>
          <section className='sets'>
            { this.state.lists.map((list) => {
              return (
                <div
                  className='sets__set'
                  key={list.id}
                  onClick={this.onListClick.bind(this, list.id)}
                >
                  {list.name}
                </div>
              )
            })}
          </section>
        </div>
      </div>
    )
  }
})

export default Study
