import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/components/Footer.css'
import {BsArrowRightShort} from 'react-icons/bs'

function Footer() {

  return (
    <footer>
        <div className="footer-link">
            <div className="footer-link-content">
              <a className='btn footer-links' target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/corentin-richard-p/'>Linkedin</a>
              <a className='btn footer-links' target="_blank" rel="noreferrer" href='https://github.com/CorentinRic'>Github</a>
              <a className='btn footer-links' target="_blank" rel="noreferrer" href="mailto:corentinrichard.p@gmail.com" aria-label='E-mail'>E-mail</a>
            </div>
            <div className="footer-legal">
              <Link className='btn footer-links legal-link btn' to='/notices'><BsArrowRightShort />Mentions légales</Link>
              <p className='footer-signature'>CORENTIN RICHARD © 2022.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer