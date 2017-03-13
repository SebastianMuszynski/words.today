import React from 'react'
import '../../css/Study'

const Study = React.createClass({
  getInitialState () {
    return {
      fields: {
        newSetName: ''
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
      <div className='Study'>
        <div className='container'>
          <h1>Create new list</h1>
          <div className='create-set'>
            <form onSubmit={this.handleSubmit}>
              <input
                type='text'
                name='newSetName'
                placeholder='Name'
                value={this.state.fields.newSetName}
                onChange={this.onInputChange}
              />
              <input type='submit' />
            </form>
          </div>
          <h1>Review</h1>
          <section className='sets'>
            <div className='sets__set'>JOBS</div>
            <div className='sets__set'>SCHOOL</div>
            <div className='sets__set'>CALENDAR</div>
            <div className='sets__set'>WORK</div>

            <div className='sets__set'>ANIMALS</div>
            <div className='sets__set'>BODY</div>
            <div className='sets__set'>COSMETICS</div>
            <div className='sets__set'>NEWSPAPER</div>

            <div className='sets__set'>BUILDINGS</div>
            <div className='sets__set'>CARS</div>
            <div className='sets__set'>HOME</div>
            <div className='sets__set'>CELEBRATIONS</div>

            <div className='sets__set'>CLOTHES</div>
            <div className='sets__set'>COLORS</div>
            <div className='sets__set'>COMPUTERS</div>
            <div className='sets__set'>COUNTRIES</div>

            <div className='sets__set'>FAMILY</div>
            <div className='sets__set'>DRINKS</div>
            <div className='sets__set'>FOOD</div>
            <div className='sets__set'>GEOGRAPHY</div>
          </section>
        </div>
      </div>
    )
  }
})

export default Study
