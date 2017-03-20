import React from 'react'
import { Link } from 'react-router'
import Word from '../services/Word'
import WordQuiz from './WordQuiz'
import '../../css/Study'

const Study = React.createClass({
  getInitialState () {
    return {
      words: []
    }
  },
  componentDidMount () {
    Word.getAll(this.props.params.id).then((words) => {
      this.setState({ words: words })
    })
  },
  render () {
    return (
      <div className='StudyPage'>
        <div className='container'>
          <h1>Study</h1>
          { this.state.words.length &&
            <WordQuiz words={this.state.words} />
          }
          <div className='bottom-links'>
            <Link to={`/lists/${this.props.params.id}`}>↫ Back</Link>
          </div>
        </div>
      </div>
    )
  }
})

export default Study
