import React, {useContext} from 'react'
import { ThemeContext } from '../utils/ThemeContext'

function ToggleTheme() {

    const {toggleTheme, theme} = useContext(ThemeContext);

  return (
    <span onClick={toggleTheme} className='toggleTheme btn'>
        {theme ? "Light" : "Dark"}
    </span>
  )
}

export default ToggleTheme