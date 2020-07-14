import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    return(
        <nav>
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About Me</NavLink>
            <NavLink to='/project'>Projects</NavLink>
            <NavLink to='/contact'>Contact</NavLink> */}
            <a href="#about">About Me</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    )
}

export default Nav