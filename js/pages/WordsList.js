import React from 'react'
import Word from '../services/Word'
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
  getListId () {
    return this.props.params.id
  },
  componentDidMount () {
    Word.getAll(this.getListId()).then((words) => {
      this.setState({ words: words })
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
    let data = {
      word: {
        name: this.state.fields.newWord
      }
    }
    this.addWord(data)
  },
  addWord (data) {
    Word.create(this.getListId(), data).then((word) => {
      let fields = this.state.fields
      fields.newWord = ''
      this.setState({ words: [...this.state.words, word], fields: fields })
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
              <h1>Your words ({this.state.words.length})</h1>
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
