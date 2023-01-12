import React from 'react'
import {useParams, Navigate} from "react-router-dom";
import '../styles/pages/Project.css'
import data from '../datas/DataProjects'

const Project = () => {

  /* Comparaison de l'id. */

  const { id } = useParams()
  const project = data.find((item) => item.id === id)

  if (!project) 
    return <Navigate to="/*" />

  return (
    <main>
      <section className="project">
        <div className="project__container">
          <div className="project__content">
            <h1>{project.title}</h1>
            <p className='project__subtitile'>
              <span className='project__subtitle-span'>Client</span> : {project.client}
            </p>
            <p className='project__subtitile'>
              <span className='project__subtitle-span'>Job</span> : {project.job}
            </p>
            <p className='project__subtitile project__subtitile-description'>
              <span className='project__subtitle-span'>Description</span> : <br />{project.description}
            </p>
            <p className='project__subtitle project__subtitle-date'>{project.date}</p>
            <p className='project__tools'>{project.tools}</p>
            <div className="project__links">
              <a className='btn' target="_blank" rel="noreferrer" href={project.github}>Github</a>
              <a className='btn' target="_blank" rel="noreferrer" href={project.site}>Site</a>
            </div>
          </div>
          <div className="project__container__image">
              <div className="project__imageDesktop project-img">
                <img src={project.imageD} alt={project.title}/>
              </div>
          </div>
        </div>
        <div className="project__images">
          <div className="project__images-containerLeft">
            <div className="project__imageDesktop2 project-img">
                <img src={project.imageD2} alt={project.title}/>
              </div>
          </div>
          <div className="project__images-containerRight">
            <div className="project__imageMobile project-img">
              <img src={project.imageM} alt={project.title}/>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Project