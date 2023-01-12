import React from 'react'
import '../styles/section/Work.css'
import Card from '../components/Card'
import DataProjects from '../datas/DataProjects'
import { HashLink } from 'react-router-hash-link'

function  Work() {

    const datas = DataProjects

  return (
    <section id='work'>
        <div className="work__container">
            <h2>Projets</h2>
            <div className="work__cards">
                {datas.map((datas) => {
                    return (
                        <article key={datas.id}>
                        <HashLink to={`/project/${datas.id}`}>
                            <Card
                            key={datas.id}
                            title={datas.title}
                            client={datas.client} 
                            tools={datas.tools}
                            />
                        </HashLink>
                        </article> 
                    )
                }
                )}
            </div>
        </div>
    </section>
  )
}

export default  Work