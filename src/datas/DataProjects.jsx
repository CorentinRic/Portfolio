import KasaDesktop from '../assets/images/Kasa/Kasa_Desktop.webp'
import KasaDesktop2 from '../assets/images/Kasa/Kasa_Desktop_2.webp'
import KasaMobile from '../assets/images/Kasa/Kasa_Mobile.webp'

import KanapDesktop from '../assets/images/Kanap/Kanap_Desktop.webp'
import KanapDesktop2 from '../assets/images/Kanap/Kanap_Desktop_2.webp'
import KanapMobile from '../assets/images/Kanap/Kanap_Mobile.webp'

import OhmyfoodDesktop from '../assets/images/Ohmyfood/Ohmyfood_Desktop.webp'
import OhmyfoodDesktop2 from '../assets/images/Ohmyfood/Ohmyfood_Desktop_2.webp'
import OhmyfoodMobile from '../assets/images/Ohmyfood/Ohmyfood_Mobile.webp'

import BookiDesktop from '../assets/images/Booki/Booki_Desktop.webp'
import BookiDesktop2 from '../assets/images/Booki/Booki_Desktop_2.webp'
import BookiMobile from '../assets/images/Booki/Booki_Mobile.webp'

import PanthereDesktop from '../assets/images/Panthere/Panthere_Desktop.webp'
import PanthereDesktop2 from '../assets/images/Panthere/Panthere_Desktop_2.webp'
import PanthereMobile from '../assets/images/Panthere/Panthere_Mobile.webp'

import {GrReactjs} from 'react-icons/gr'
import {SiJavascript} from 'react-icons/si'
import {TiHtml5} from 'react-icons/ti'
import {IoLogoCss3} from 'react-icons/io'
import {SiLighthouse} from 'react-icons/si'
import {FiFigma} from 'react-icons/fi'

const data = 
  [
    {
        "id": "P7dwOp",
        "title": "Kasa",
        "tools": <>
            <GrReactjs />
            <FiFigma />
            <SiJavascript />
            <IoLogoCss3 />
            <SiLighthouse />
        </>,
        "client": "Openclassrooms",
        "date": "Décembre 2022",
        "job" : "Intégration",
        "imageD": KasaDesktop,
        "imageD2": KasaDesktop2,
        "imageM": KasaMobile,
        "description": "Application Web immobilière, intégration d'une maquette Figma. Ce projet m'a permis d'apprendre la logique des composants réutilisables, l'intégration d'une maquette à l'aide de Figma, ou encore, la logique des routes avec 'react-router'.",
        "github": "https://github.com/CorentinRic/Kasa",
        "site": "https://corentinric.github.io/Kasa"
    },
    {
        "id": "P5dwOp",
        "title": "Kanap",
        "tools": <SiJavascript />,
        "client": "Openclassrooms",
        "date": "Octobre 2022",
        "job" : "Développement",
        "imageD": KanapDesktop,
        "imageD2": KanapDesktop2,
        "imageM": KanapMobile,
        "description": "Plateforme de e-commerce, intégration du front-end en javascript. Ce projet m'a permis d'apprendre la logique d'une plateforme de e-commerce en JavaScript, notamment la méthode 'fetch' pour gérer un appel API.",
        "github": "https://github.com/CorentinRic/Kanap",
        "site": "https://github.com/CorentinRic/Kanap"
    },
    {
        "id": "P3dwOp",
        "title": "Ohmyfood",
        "tools": <>
            <TiHtml5 />
            <IoLogoCss3 />
        </>,
        "client": "Openclassrooms",
        "date": "Juillet 2022",
        "job" : "Intégration",
        "imageD": OhmyfoodDesktop,
        "imageD2": OhmyfoodDesktop2,
        "imageM": OhmyfoodMobile,
        "description": "Intégration d'une maquette pour une application web de réservation de plat. Ce projet m'a permis d'apprendre les animations CSS.",
        "github": "https://github.com/CorentinRic/Ohmyfood",
        "site": "https://corentinric.github.io/Ohmyfood//Index.html"
    },
    {
        "id": "P2dwOp",
        "title": "Booki",
        "tools": <>
            <TiHtml5 />
            <IoLogoCss3 />
        </>,
        "client": "Openclassrooms",
        "date": "Juin 2022",
        "job" : "Intégration",
        "imageD": BookiDesktop,
        "imageD2": BookiDesktop2,
        "imageM": BookiMobile,
        "description": "Application Web immobilière (Vitrine). Booki est le premier projet du parcours de 'Développeur Web' chez Openclassrooms, il consiste à intégrer une maquette à l'aide de HTML et CSS.",
        "github": "https://github.com/CorentinRic/Booki",
        "site": "https://corentinric.github.io/Booki/Booki/index.html"
    },
    {
        "id": "P4dwOp",
        "title": "La Panthère",
        "tools": <>
            <IoLogoCss3 />
            <SiLighthouse />
        </>,
        "client": "Openclassrooms",
        "date": "Août 2022",
        "job" : "Audit SEO",
        "imageD": PanthereDesktop,
        "imageD2": PanthereDesktop2,
        "imageM": PanthereMobile,
        "description": "Optimiser un site web existant, en réalisant un audit SEO suivi d'une correction de code.",
        "github": "https://github.com/CorentinRic/La-panthere",
        "site": "https://corentinric.github.io/La-Panthere/"
    },
]

export default data