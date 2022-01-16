import React from 'react'
import './portfolio.css'
import EA from '../../images/EA.jpeg'
import Snapi from '../../images/snapi.jpeg'

function Portfolio() {
    return (
        <div className='portfolio_container'id='portfolio'>
            <h1>MY PORTFOLIO</h1>
            <div className='EA_container'>
                <h2>Enterprising Arrangements</h2>
            <a href="https://www.github.com/NoahTidwell/Enterprising-Arrangements">
                <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={EA} alt='screenshot of Enterprising Arrangements' />
                </a>
                </div>
                <div className='social_networking_api'>
                    <h2>Open Thoughts</h2>
                    <a href="https://github.com/NoahTidwell/open-thoughts">
                    <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={Snapi} alt='screenshot of Enterprising Arrangements' />
                    </a>
                </div>
        </div>


    )
}

export default Portfolio