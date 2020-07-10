import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Top from './src/components/Top'
import Header from './src/components/Header'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Footer from './src/components/Footer'

const App = () => {

    return(
        <>
            {/* <Router> */}
            <Top />
                {/* <Route exact path='/'> */}
                    <Header />
                    <About />
                    {/* <Projects /> */}
                {/* </Route> */}
                {/* <Route path='/contact'> */}
                    {/* <Contact /> */}
                {/* </Route> */}
                <Footer/>
            {/* </Router> */}
        </>
    )
}

export default App