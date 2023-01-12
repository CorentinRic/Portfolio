import React, {useRef} from 'react'
import { HashLink } from 'react-router-hash-link'
import '../styles/components/NavBar.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import ToggleTheme from './ToggleTheme'

const data = [
    {
        id : "1N",
        name : "Accueil",
        link : "/#"
    },
    {
        id : "2N",
        name : "Infos",
        link : "/#about"
    },
    {
        id : "3N",
        name : "Projets",
        link : "/#work"
    },
    {
        id : "4N",
        name : "Contact",
        link : "/#contact"
    }
]

function NavBar() {
    const navRef = useRef()

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive__nav")
    }

    return (
        <nav className='nav'>
            <span className='logo'>
                <HashLink className='nav-menu-link nav-logo' onClick={showNavBar} to="/#">Cr.</HashLink>
            </span>
            <div className="nav-menuTheme">
                <ToggleTheme />
                <div ref={navRef} className="nav-menu">
                    {data.map((data) => {
                            return (
                                <HashLink className='nav-menu-link btn' key={data.id} onClick={showNavBar} to={data.link}>{data.name}</HashLink>
                            )
                        }
                    )}
                    <button className='nav-btn nav-close-btn' onClick={showNavBar} aria-label="Bouton fermeture menu hamburger">
                        <ImCross />
                    </button>
                </div>
            </div>
            <button className='nav-btn' onClick={showNavBar} aria-label="Bouton ouverture menu hamburger">
                <GiHamburgerMenu />
            </button>
        </nav>
    )
    }

export default NavBar