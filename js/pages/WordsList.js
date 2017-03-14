import React from 'react'
import Auth from '../services/Auth'
import axios from 'axios'
import '../../css/WordsList'

const WordsList = React.createClass({
  getInitialState () {
    return {
      fields: {
        newWord: ''
      },
      isFormValid: false,
      words: []
    }
  },
  componentDidMount () {
    axios.get(`http://localhost:3000/lists/${this.props.params.id}/words`, Auth.getConfig()).then((words) => {
      this.setState({ words: words.data })
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
    let payload = {
      word: {
        name: this.state.fields.newWord
      }
    }
    axios.post(`http://localhost:3000/lists/${this.props.params.id}/words`, payload, Auth.getConfig()).then((word) => {
      let fields = this.state.fields
      fields.newWord = ''
      this.setState({ words: [...this.state.words, word.data], fields: fields })
    })
  },
  render () {
    return (
      <div className='WordsList'>
        <div className='container'>
          <h1>Add new word</h1>
          <div className='add-word'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='newWord'
                placeholder='New word'
                value={this.state.fields.newWord}
                onChange={this.onInputChange}
              />
              <input type='submit' />
            </form>
          </div>
          { this.state.words.length ?
            <section>
              <h1>Your words</h1>
              <div className='words'>
                { this.state.words.map((word) => {
                  return (
                    <div className='words__word' key={word.id}>{word.name}</div>
                  )
                })}
              </div>
            </section>
            :
            null
          }
        </div>
      </div>
    )
  }
})

export default WordsList
