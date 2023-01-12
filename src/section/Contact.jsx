import React from 'react'
import '../styles/section/Contact.css'
import Form from '../components/Form'
import LinksSocials from '../components/LinksSocials'
import CV from '../assets/documents/CV-Corentin Richard.pdf'

const Contact = () => {
    return(
        <section id='contact' className='contact'>
            <div className="contact__container">
                <div className="contact__about">
                    <h2>Contact</h2>
                    <a className='contact__mail btn' target="_blank" rel="noreferrer" href="mailto:corentinrichard.p@gmail.com" aria-label='E-mail'>corentinrichard.p@gmail.com</a>
                    <a href={CV} download className='btn'><span>Curriculum vitæ</span></a>
                    <LinksSocials />
                </div>
                <Form />
            </div>
        </section>
    )
}

export default Contact
