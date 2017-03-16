import React from 'react'
import Word from '../services/Word'
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
      this.setState({ words: words })
    })
  },
  render () {
    return (
      <div className='StudyPage'>
        <div className='container'>
          <h1>Study</h1>
        </div>
      </div>
    )
  }
})

export default Study
