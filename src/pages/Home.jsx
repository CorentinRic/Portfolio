import React from 'react'
import '../styles/pages/Home.css'
import About from '../section/About'
import Work from '../section/Work'
import Contact from '../section/Contact'
import Skills from '../section/Skills'

function Home() {
  return (
    <main className="home" id='home'>
      <section className='home__section'>
        <div className="home__container">
          <h1>Corentin<br/>RICHARD</h1>
          <p>Développeur Front End</p>
        </div>
      </section>
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  )
}

export default Home
