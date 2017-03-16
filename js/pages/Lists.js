import React from 'react'
import { browserHistory } from 'react-router'
import List from '../services/List'
import '../../css/Lists'

const Lists = React.createClass({
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
    List.getAll().then((lists) => {
      this.setState({ lists: lists })
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
  onListClick (listId) {
    browserHistory.push('/lists/' + listId)
  },
  handleSubmit (event) {
    event.preventDefault()
    let data = {
      list: {
        name: this.state.fields.newList
      }
    }
    this.createList(data)
  },
  createList (data) {
    List.create(data).then((list) => {
      let fields = this.state.fields
      fields.newList = ''
      this.setState({ lists: [...this.state.lists, list], fields: fields })
    })
  },
  render () {
    return (
      <div className='ListsPage'>
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
                <h1>
                  You have
                  <span className='stats-number'>{this.state.lists.length}</span>
                  {this.state.lists.length == 1 ? 'list' : 'lists'}
                </h1>
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

export default Lists
