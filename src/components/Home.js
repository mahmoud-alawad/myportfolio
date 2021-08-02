import React from 'react'
import '../styles/scss/main.scss'
import Card from './Card'
import Skills from './Skills'
import About from './About'

const Home = () => {
    return (
        <div>
           <About/>
           <Skills />
           <Card />
        </div>
    )
}

export default Home
