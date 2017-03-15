import React from 'react'
import { Link } from 'react-router'
import '../../css/Home'

const Home = React.createClass({
  render () {
    return (
      <div className='Home'>
        <section className='info'>
          <h2>LEARN NEW<br/> <span>WORDS.TODAY</span></h2>
          <div className='auth-links'>
            <Link to='/login'>Log in</Link>
            <Link to='/signup'>Sign up</Link>
          </div>
        </section>
      </div>
    )
  }
})

export default Home
