import React from 'react'
import Word from '../services/Word'
import { shuffleArray } from '../helpers/shuffle'
import '../../css/Study'

const Study = React.createClass({
  getInitialState () {
    return {
      words: [],
      currentWordIndex: -1
    }
  },
  getListId () {
    return this.props.params.id
  },
  componentDidMount () {
    Word.getAll(this.getListId()).then((words) => {
      this.setState({ words: shuffleArray(words) })
      this.showNextWord()
    })
  },
  showNextWord () {
    const nextIndex = this.state.currentWordIndex + 1
    if (nextIndex < this.state.words.length) {
      if (nextIndex > 0) {
        setTimeout(() => {
          this.refs[`word_${nextIndex - 1}`].classList.add('fadeOut')
          setTimeout(() => {
            this.refs[`word_${nextIndex - 1}`].classList.add('hidden')
            this.refs[`word_${nextIndex}`].classList.remove('hidden')
            this.refs[`word_${nextIndex}`].classList.add('fadeIn')
            this.setState({ currentWordIndex: nextIndex })
          }, 500)
        }, 500)
      } else {
        this.refs[`word_${nextIndex}`].classList.remove('hidden')
        this.refs[`word_${nextIndex}`].classList.add('fadeIn')
        this.setState({ currentWordIndex: nextIndex })
      }
    }
  },
  getWordAnswerRef (wordIndex, answerIndex) {
    return `word_${wordIndex}_answer_${answerIndex}`
  },
  generateAnswers (wordIndex) {
    return (
      <div className='translations'>
        {this.getAnswersForWord(wordIndex).map((answer, index) => {
          return (
            <div
              key={index}
              ref={this.getWordAnswerRef(wordIndex, index)}
              className='translations__translation'
              onClick={this.handleCheckAnswer.bind(this, wordIndex, answer, index)}
            >
              {answer}
            </div>
          )
        })}
      </div>
    )
  },
  getAnswersForWord (wordIndex) {
    const word = this.state.words[wordIndex]
    let answers = [word.translations[0].name]
    while (answers.length < 4) {
      let index = Math.floor(Math.random() * this.state.words.length)
      let randomWord = this.state.words[index]
      answers.push(randomWord.translations[0].name)
    }
    return shuffleArray(answers)
  },
  handleCheckAnswer (wordIndex, answer, answerIndex) {
    let isCorrect = false
    const word = this.state.words[wordIndex]
    const translations = word.translations
    for (let i = 0; i < translations.length && !isCorrect; i++) {
      isCorrect = !!(translations[i].name == answer)
    }
    this.highlightAnswer(isCorrect, wordIndex, answerIndex)
    isCorrect && setTimeout(() => this.showNextWord(), 500)
  },
  highlightAnswer (isCorrect, wordIndex, answerIndex) {
    const ref = this.getWordAnswerRef(wordIndex, answerIndex)
    this.refs[ref].classList.add(isCorrect ? 'correct' : 'incorrect')
  },
  render () {
    return (
      <div className='StudyPage'>
        <div className='container'>
          <h1>Study</h1>
          <div>
            <div>
              {this.state.words.map((word, index) => {
                const ref = `word_${index}`
                return (
                  <div key={word.name} ref={ref} className='hidden'>
                    <div className='word'>
                      {word.name}
                    </div>
                    {this.generateAnswers(index)}
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
