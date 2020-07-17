import React, { useState, useEffect } from 'react'
import Top from './src/components/Top'
import Header from './src/components/Header'
import About from './src/components/About'
import Project from './src/components/Project'
import Contact from './src/components/Contact'

const App = () => {

    const [ scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',() => {

            if(window.pageYOffset > 200) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    },[])

    return (
        <>
            <Top scroll={scroll} setScroll={setScroll} />
            <Header scroll={scroll} />
            <About />
            <Project />
            <Contact />
        </>
    )
}

export default App