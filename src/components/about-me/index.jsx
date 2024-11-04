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
                Hello and welcome to my page! My name is Noah Tidwell. I currently a student at University of Houston, Main Campus studying for a BA in Journalism. In my pastime I enjoy learning MERN Stack Development. I am enthusiastic about building dynamic websites for users to have an engaging experience with. I am interested in web 3 and blockchain Development.

In my pasttime, I enjoy playing the piano and guitar, hiking in the mountains, and gardening. I research blockchain projects and help curate a daily newsletter on the Solana Blockchain known as the <a target='_blank' rel='noreferrer' href='https://thesolanagrapevine.substack.com'>Solana Grapevine</a>
                </p>
            </div>
        </div>
    )
}

export default AboutMe