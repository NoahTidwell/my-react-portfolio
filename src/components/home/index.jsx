import React from 'react'
import Typed from 'react-typed'
import './home.css'

function Home() {
    return (
        <div className='main-info'>
            <h1>Who is Noah?</h1>
        <Typed
        strings={[
            ' ',
            'Technical-Writer',
            'Sales Manager',
            'Blockchain Enthusiast',
            'MERN Stack Developer',
            ' ',
            ' ']}
            typeSpeed={40}
            backSpeed={50}
            loop>
        </Typed>
        </div>
    )
}

export default Home