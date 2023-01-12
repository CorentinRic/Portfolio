import React from 'react'
import '../styles/section/Skills.css'
import {BsCircleFill} from 'react-icons/bs'

const Skills = () => {

    return(
        <section id='skills'>
            <div className="skills__container">
                <span className='text t1'>React.js&nbsp;<small>70%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;HTML/CSS&nbsp;<small>70%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;JavaScript&nbsp;<small>70%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;GSAP&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;</span>
                <span className='text t2'>React.js&nbsp;<small>70%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;HTML/CSS&nbsp;<small>70%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;JavaScript&nbsp;<small>70%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;GSAP&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;</span>
            </div>
            <p>langages / outils de développement</p>
            <div className="skills__container">
                <span className='textR t1'>Github&nbsp;<small>50%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;Node.js&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;Express&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;MongoDB&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;</span>
                <span className='textR t2'>Github&nbsp;<small>50%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;Node.js&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;Express&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;MongoDB&nbsp;<small>30%</small>&nbsp;&nbsp;<BsCircleFill />&nbsp;&nbsp;</span>
            </div>
        </section>
    )
}

export default Skills