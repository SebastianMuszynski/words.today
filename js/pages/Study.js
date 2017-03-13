import React from 'react'
import { browserHistory } from 'react-router'
import Auth from '../auth/Auth'
import axios from 'axios'
import '../../css/Study'

const Study = React.createClass({
  getInitialState () {
    return {
      fields: {
        newList: ''
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
    let config = {
      headers: {
        Authorization: Auth.getToken()
      }
    }
    let payload = {
      list: {
        name: this.state.fields.newList
      }
    }
    axios.post('http://localhost:3000/lists', payload, config).then((list) => {
      let fields = this.state.fields
      fields.newList = ''
      this.setState({ lists: [...this.state.lists, list.data], fields: fields })
    })
  },
  onListClick (listId) {
    browserHistory.push('/study/' + listId)
  },
  render () {
    return (
      <div className='Study'>
        <div className='container'>
          <h1>Create new list</h1>
          <div className='create-list'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='newList'
                placeholder='Name'
                value={this.state.fields.newList}
                onChange={this.onInputChange}
              />
              <input type='submit' />
            </form>
          </div>
          { this.state.lists.length ?
            (
              <section>
                <h1>Your lists</h1>
                <div className='lists'>
                  { this.state.lists.map((list) => {
                    return (
                      <div
                        className='lists__list'
                        key={list.id}
                        onClick={this.onListClick.bind(this, list.id)}
                      >
                        {list.name}
                      </div>
                    )
                  })}
                </div>
              </section>
            )
            :
            null
          }
        </div>
      </div>
    )
  }
})

export default Study
