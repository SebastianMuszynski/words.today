import React from 'react'
import { browserHistory } from 'react-router'
import Word from '../services/Word'
import '../../css/Words'

const Words = React.createClass({
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
    this.refs.word.focus()
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
      this.refs.word.focus()
      this.setState({ words: [...this.state.words, word], fields: fields })
    })
  },
  handleStudyBtn () {
    browserHistory.push(`/lists/${this.getListId()}/study`)
  },
  render () {
    return (
      <div className='WordsPage'>
        <div className='container'>
          <h1>Add new word</h1>
          <div className='add-word'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='word'
                ref='word'
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
          { this.state.words.length &&
            <section>
              <div className='heading'>
                <h1>
                  You have
                  <span className='stats-number'>{this.state.words.length}</span>
                  {this.state.words.length == 1 ? 'word' : 'words'}
                </h1>
                <button className='btn-study' onClick={this.handleStudyBtn}>Study</button>
              </div>
              <div className='words'>
                { this.state.words.map((word, index) => {
                  return (
                    <div className='words__word' key={word.id}>
                      <div className='words__word--name'>
                        {word.name}
                      </div>
                      <div className='words__word--translation'>
                        {word.translations[0] && word.translations[0].name}
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          }
        </div>
      </div>
    )
  }
})

export default Words
