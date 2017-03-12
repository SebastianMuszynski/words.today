import React from 'react'
import '../../css/Study'

const Study = React.createClass({
  render () {
    return (
      <div className='Study'>
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
    )
  }
})

export default Study
