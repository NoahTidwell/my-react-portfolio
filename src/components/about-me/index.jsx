import React from 'react'
import './aboutMe.css'
import person from '../../images/noah.jpg'

function AboutMe() {
    return (
        <div className='about_container' id='about-me'>
            <div>
            <img src={person} alt='person-icon' />
            </div>
            <div className='about_text'>
                <h1>ABOUT ME</h1>
                <p> 
                Hello and welcome to my page! My name is Noah Tidwell. I am currently a student at University of Houston studying for a BA in Journalism. I enjoy learning about MERN Stack Development and am enthusiastic about blockchain.

In my pasttime, I enjoy playing the piano and guitar, hiking in the mountains, and gardening. I research blockchain projects and have professional written about many different blockchain projects. I am currently working on a project that will help people learn about blockchain and how to participate in it.
                </p>
            </div>
        </div>
    )
}

export default AboutMe