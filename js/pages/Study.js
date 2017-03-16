import React from 'react'
import Word from '../services/Word'
import { shuffleArray } from '../helpers/shuffle'
import '../../css/Study'

const Study = React.createClass({
  getInitialState () {
    return {
      words: []
    }
  },
  getListId () {
    return this.props.params.id
  },
  componentDidMount () {
    Word.getAll(this.getListId()).then((words) => {
      this.setState({ words: shuffleArray(words) })
    })
  },
  render () {
    return (
      <div className='StudyPage'>
        <div className='container'>
          <h1>Study</h1>
          <div>
            <div>
              {this.state.words.map((word) => {
                return (
                  <div key={word.name}>
                    <div className='word'>
                      {word.name}
                    </div>
                    <div className='translations'>
                      <div className='translations__translation'>
                        {word.translations[0].name}
                      </div>
                      <div className='translations__translation'>
                        {word.translations[0].name}
                      </div>
                      <div className='translations__translation'>
                        {word.translations[0].name}
                      </div>
                      <div className='translations__translation'>
                        {word.translations[0].name}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default Study
