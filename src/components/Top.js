import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Top = () => {

    const [ scroll, setScroll] = useState(false)

    

    

    useEffect(() => {
        window.addEventListener('scroll',() => {

            if(window.pageYOffset > 100) {
                setScroll(true)
                console.log(window.pageYOffset)
            } else {
                setScroll(false)
            }
        })
    },[])
    
    console.log(scroll)

    return(
        <div className="top" id={scroll ? 'scrolled' : null}>
            <div className="container">
                <Logo />
                <Nav />
            </div>
        </div>
    )
}

export default Top