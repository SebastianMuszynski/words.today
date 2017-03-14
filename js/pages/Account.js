import React from 'react'
import Auth from '../services/Auth'
import axios from 'axios'
import '../../css/Account'

const Account = React.createClass({
  getInitialState () {
    return {
      user: {}
    }
  },
  componentDidMount () {
    axios.get('http://localhost:3000/lists', Auth.getConfig()).then((lists) => {
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
  render () {
    return (
      <div className='Account'>
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

export default Account
