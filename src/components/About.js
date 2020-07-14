import React from 'react';

const About = () => {

    return (
        <section className="about" id="about">
            <div className="container">
                <h2>About Me</h2>
                <div className="content">
                    <img src="./assets/milo-rastgoo.png" />
                    <div className="social">
                        <a href="https://www.linkedin.com/in/rastgoo"><img src="./assets/linkedin.png"/></a>
                        <a href="https://github.com/informagician"><img src="./assets/github.png"/></a>
                        <a href="https://twitter.com/Informagician"><img src="./assets/twitter.png"/></a>
                        <a href="https://www.hackerrank.com/informagician"><img src="./assets/hackerrank.png"/></a>
                    </div>
                    <div className="text">
                        <p>I am a Full-Stack Web Developer with experiece as Network Specialist and IT Project Manager.</p>
                        <p>I'm interested in solving problems and making things, either using code or collection of hardware tools!</p>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About