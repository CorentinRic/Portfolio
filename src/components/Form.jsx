import React from 'react'
import '../styles/components/Form.css'

//emailjs
import { useRef } from 'react'
import emailjs from 'emailjs-com'
//End emailjs

const Form = () => {

    //emailjs
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_lykiyrq', 'template_h95hxcm', form.current, 'GNUif3c8T8m2xkyoA')

        e.target.reset()
    };
    //End emailjs

    return(
            <form className='form' ref={form} onSubmit={sendEmail}>
                <input type="text" name='name' placeholder='Votre nom complet' required />
                <input type="email" name='email' placeholder='Votre adresse e-mail' required />
                <textarea name="message" rows="7" placeholder='Votre message' required ></textarea>
                <button type='submit' className='btn btn-form'><span>Envoyer</span></button>
            </form>
    )
}

export default Form