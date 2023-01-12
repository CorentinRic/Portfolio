import React from 'react'
import '../styles/components/Card.css'

function Card({title, client, tools}) {
  return (
    <article className='card'>
        <div className="card__container">
            <h3>{title}</h3>
            <div className="card__line"></div>
            <p>{client}</p>
            <div className="card__line"></div>
            <span className='card__tools'>{tools}</span>
        </div>
    </article>
  )
}

export default Card