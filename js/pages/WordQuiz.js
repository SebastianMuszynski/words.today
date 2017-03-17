import React from 'react'
import Word from '../services/Word'
import { shuffleArray } from '../helpers/shuffle'
import '../../css/WordQuiz'

const WordQuiz = React.createClass({
  propTypes: {
    words: React.PropTypes.array
  },
  getInitialState () {
    return {
      words: shuffleArray(this.props.words),
      activeWordIndex: null
    }
  },
  componentDidMount () {
    this.showWord()
  },
  showWord (index = 0) {
    const el = this.refs[`word_${index}`]
    if (el) {
      el.classList.remove('hidden')
      el.classList.add('fadeIn')
      this.setState({ activeWordIndex: index })
    }
  },
  hideWord (index, callback) {
    const el = this.refs[`word_${index}`]
    setTimeout(() => {
      el.classList.add('fadeOut')
      setTimeout(() => {
        el.classList.add('hidden')
        callback && callback()
      }, 500)
    }, 500)
  },
  changeWords () {
    let activeIndex = this.state.activeWordIndex || 0
    this.hideWord(activeIndex, this.showWord.bind(this, activeIndex + 1))
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
    isCorrect && setTimeout(() => this.changeWords(), 500)
  },
  highlightAnswer (isCorrect, wordIndex, answerIndex) {
    const ref = this.getWordAnswerRef(wordIndex, answerIndex)
    this.refs[ref].classList.add(isCorrect ? 'correct' : 'incorrect')
  },
  render () {
    return (
      <div className='WordQuiz'>
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
    )
  }
})

export default WordQuiz
