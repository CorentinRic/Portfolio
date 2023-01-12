import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import '../styles/components/LinksSocials.css'

function LinksSocials() {

    const datas = [

        {
            "id": "linkLinkedin",
            "name": "Linkedin",
            "logo": <BsLinkedin />,
            "link": "https://www.linkedin.com/in/corentin-richard-p/",
            "aria": "Liens vers Linkedin."
        },
        {
            "id": "linkGithub",
            "name": "Github",
            "logo": <BsGithub />,
            "link": "https://github.com/CorentinRic",
            "aria": "Liens vers Github."
        }
    ]

  return (
    <div className="linksSocials">
        {datas.map((datas) => {
        return (
            <a key={datas.id} target="_blank" rel="noreferrer" href={datas.link} aria-label={datas.aria}>{datas.logo}</a>
            )
        }
        )}
    </div>
  )
}

export default LinksSocials