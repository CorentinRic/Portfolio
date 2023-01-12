import React from 'react'
import '../styles/section/About.css'
import { HashLink } from 'react-router-hash-link'

function About() {
  return (
    <section id='about'>
        <div className="about__container">
            <div className="about__title">
                <h2 className='about__hello'>Hello.</h2>
                <h2 className='about__h2 first'>Bienvenue sur mon Portfolio.<br/> Je suis Corentin, diplômé chez Openclassrooms.</h2>
                <p>Lors d'un voyage, j'ai rencontré un ami développeur. Après de longues discussions, l'envie d'en apprendre plus sur ce domaine est vite devenue une évidence. À mon retour, j'ai décidé de m'orienter vers le développement front-end, qui allie logique et créativité.</p>
            </div>
            <div id='about__btn' className='about__btn'>
                <HashLink to="/#work" className="btn btn--calypso"><span>Projects</span></HashLink>
                <HashLink to="/#contact" className="btn btn--calypso"><span>Contact</span></HashLink>
            </div>
        </div>
    </section>
  )
}

export default About