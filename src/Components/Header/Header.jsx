import { MoonIcon } from '@chakra-ui/icons'
import { Box, Icon, IconButton ,useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

import './header.css'
const Header = () => {
const [Toggle, showMenu] = useState(false)
const {colorMode , toggleColorMode} = useColorMode()

  return (
    <Box>
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">Vinay</a>
            <div className={Toggle ?"nav__menu show-menu":"nav__menu"}>

                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link active-link">
                     
                            <i  class="uil uil-estate nav__icon"></i>Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i class="uil uil-user nav__icon"></i>About
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#projects" className="nav__link">
                            <i class="uil uil-briefcase-alt nav__icon"></i>Projects
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i class="uil uil-scenery nav__icon"></i>Contact
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                          {/* <MoonIcon onClick={toggleColorMode}/> */}
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={()=>showMenu(!Toggle)}></i>
            </div>
            <div className="nav__toggle" onClick={()=>showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>

    </header>
    </Box>
  )
}

export default Header