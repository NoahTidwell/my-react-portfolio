import './App.css';
import React from 'react';
import Navigation from './components/navigation';
import ParticleAnimation from 'react-particle-animation'
import Contact from './components/contact'
import AboutMe from './components/about-me';
import Portfolio from './components/portfolio';


function App() {
  return (
    <div>
    <Navigation />
    <ParticleAnimation
    particleSpeed={0.5}
    particleRadius={1.55}
    color={{r: 0, g: 160, b: 74, a: 249}}
    style={{height: '96vh'}}
    background={{ r: 21, g: 22, b: 23, a: 1}}
    />
    <AboutMe />
    <Portfolio />
    <Contact />
    </div>
  );
}

export default App;