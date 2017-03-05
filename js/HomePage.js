import React from 'react'

const HomePage = React.createClass({
  render () {
    return (
      <div className='HomePage'>
        <header>
          <nav>
            <ul>
              <li><a href='#'>About</a></li>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>Sign in</a></li>
            </ul>
          </nav>
        </header>
        <section className='HomePage__quote'>
          <p>„Learn everything you can, anytime you can, from anyone you can.</p>
          <p>There will always come a time when you will be grateful you did.”</p>
          <p>— Sarah Caldwell</p>
        </section>
      </div>
    )
  }
})

export default HomePage
