import React from 'react'
import './portfolio.css'
import EA from '../../images/EA.jpeg'
import Snapi from '../../images/snapi.jpeg'
import Budget from '../../images/budget.jpeg'
import Employee from '../../images/employee.jpeg'
import homepage from '../../images/homepage.jpeg'


function Portfolio() {
    return (
        <div className='portfolio_container'id='portfolio'>
            <h1>MY PORTFOLIO</h1>
            <div className='EA_container card rounded-2 card-shadow mt-5 m-5 mb-5'>
                <h2>Enterprising Arrangements</h2>
            <a target='_blank' rel='noreferrer' href="https://www.github.com/NoahTidwell/Enterprising-Arrangements">
                <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={EA} alt='screenshot of Enterprising Arrangements' />
                </a>
                </div>
                  <div className='share_your_story_container card rounded-2 card-shadow mt-5 m-5 mb-5' >
                    <h2>Share Your Story</h2>
                    <a href="https://github.com/JeffGoji/share-your-story">
                    <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={homepage} alt='screenshot of Share Your Story' />
                    </a>
                </div>
                <div className='social_networking_api card rounded-2 card-shadow mt-5 m-5 mb-5'>
                    <h2>Open Thoughts</h2>
                    <a target='_blank' rel='noreferrer' href="https://github.com/NoahTidwell/open-thoughts">
                    <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={Snapi} alt='screenshot of Enterprising Arrangements' />
                    </a>
                </div>
                <div className='budget_balance card rounded-2 card-shadow mt-5 m-5 mb-5'>
                    <h2>Budget Balance</h2>
                    <a href="https://github.com/NoahTidwell/budget-balance">
                    <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={Budget} alt='screenshot of Enterprising Arrangements' />
                    </a>
                </div>
                <div className='employee_container card rounded-2 card-shadow mt-5 m-5 mb-5'>
                    <h2>Employee Tracker Tool</h2>
                    <a href="https://github.com/NoahTidwell/employee-tracker-tool">
                    <img style={{ maxHeight: '450px', maxWidth: '450px', margin: '1rem', border: 'none'}} src={Employee} alt='screenshot of Enterprising Arrangements' />
                    </a>
                </div>
        </div>


    )
}

export default Portfolio
