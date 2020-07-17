import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Top = props => {

    

    
    
    // console.log(scroll)

    return(
        <div className="top" id={props.scroll ? 'scrolled' : null}>
            <div className="container">
                <Logo />
                <Nav />
            </div>
            {props.scroll ? (
                <a href="#home">
                    <div className="to">TOP</div>
                </a>
            ) : null}
        </div>
    )
}

export default Top