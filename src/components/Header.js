import React from 'react'

const Header = props => {

    return(
        <header id="home">
            <div className="container">
                <div className="jumbo">
                    <div>
                        <img src="./assets/milo-rastgoo-avatar.png" />
                    </div>
                    <div className="jumbo-text">
                        <h2>Hi! I'm Milo.</h2>
                        <p>I am a Full-Stack Web Developer.</p>
                    </div>
                </div>
                {props.scroll ? null : (
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                )}
            </div>
        </header>
    )
}

export default Header