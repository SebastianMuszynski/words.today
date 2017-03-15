import React from 'react'
import Word from '../services/Word'
import '../../css/WordsList'

const WordsList = React.createClass({
  getInitialState () {
    return {
      fields: {
        word: '',
        translations: [
          { name: '' }
        ]
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
  onTranslationChange (event) {
    let fields = this.state.fields
    fields.translations[0].name = event.target.value
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
        name: this.state.fields.word,
        translations_attributes: [
          { name: this.state.fields.translations[0].name }
        ]
      }
    }
    this.addWord(data)
  },
  addWord (data) {
    Word.create(this.getListId(), data).then((word) => {
      let fields = this.state.fields
      fields.word = ''
      fields.translations[0].name = ''
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
                name='word'
                placeholder='Word'
                value={this.state.fields.word}
                onChange={this.onInputChange}
              />
              <input
                type='text'
                placeholder='Translation'
                value={this.state.fields.translations[0].name}
                onChange={this.onTranslationChange}
              />
              <input type='submit' />
            </form>
          </div>
          { this.state.words.length ?
            <section>
              <h1>Your words ({this.state.words.length})</h1>
              <div className='words'>
                { this.state.words.map((word, index) => {
                  return (
                    <div className='words__word' key={word.id}>{index+1}. {word.name}</div>
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
