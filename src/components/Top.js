import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Top = () => {

    const [ scroll, setScroll] = useState(false)

    window.addEventListener('scroll',()=>{
        
        if(window.scrollTop > 0) {
            setScroll(true)
            console.log('TRUE')
        }
    })

    // useEffect(() => {
    //     if (document.body.scrollTop != 0){
    //         setScroll(true)
    //         console.log('TRUE')
    //     }
    // },[])
    

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