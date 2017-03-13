import React from 'react'
import '../../css/WordsList'

const WordsList = React.createClass({
  getInitialState () {
    return {
      fields: {
        newWord: ''
      },
      isFormValid: false
    }
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
          <h1>Your words</h1>
          <section className='words'>
            <div className='words__word'>jobs</div>
            <div className='words__word'>school</div>
            <div className='words__word'>calendar</div>
            <div className='words__word'>work</div>

            <div className='words__word'>animals</div>
            <div className='words__word'>body</div>
            <div className='words__word'>cosmetics</div>
            <div className='words__word'>newspaper</div>

            <div className='words__word'>buildings</div>
            <div className='words__word'>cars</div>
            <div className='words__word'>home</div>
            <div className='words__word'>celebrations</div>

            <div className='words__word'>clothes</div>
            <div className='words__word'>colors</div>
            <div className='words__word'>computers</div>
            <div className='words__word'>countries</div>

            <div className='words__word'>family</div>
            <div className='words__word'>drinks</div>
            <div className='words__word'>food</div>
            <div className='words__word'>geography</div>
          </section>
        </div>
      </div>
    )
  }
})

export default WordsList
