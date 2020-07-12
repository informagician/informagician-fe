import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Top from './src/components/Top'
import Header from './src/components/Header'
import About from './src/components/About'
import Project from './src/components/Project'
import Contact from './src/components/Contact'
import Footer from './src/components/Footer'

const App = () => {

    // const [ pageHeight, setPageHeight ] = useState()

    // useEffect(() => {
    //     window.addEventListener('resize',() => {

    //         // if(window.pageYOffset > 200) {
    //         //     setScroll(true)
    //         //     // console.log(window.pageYOffset)
    //         // } else {
    //         //     setScroll(false)
    //         // }
    //         const height = window.innerHeight
    //         console.log(window.innerHeight)
    //         setPageHeight(height)
    //     })
    // },[])

    // useEffect(() => {
    //     window.addEventListener('scroll', () => {


    //     })
    // })

    

    return(
        <>
            {/* <Router> */}
            <Top />
                {/* <Route exact path='/'> */}
                    <Header />
                    <About />
                    <Project />
                    <Contact />
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