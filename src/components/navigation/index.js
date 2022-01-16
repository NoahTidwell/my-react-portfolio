import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { navLinks } from '../utils/navLinks'
import './navigation.css'

function createLinks() {
    return navLinks.map((e, idx) => (
        <Nav.Link key={idx} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function Navigation() {
    return (
        <div id="home">
            <Navbar className="navigation_container" expand="md">
            <Navbar.Brand style={ {marginLeft: '1rem'} }href="#home">Noah Tidwell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse style={{ justifyContent: 'flex-end', marginRight: '1rem', borderColor: 'none'}}>
            <Nav style={{ margin: '0 1rem'}}className= "links">
            {createLinks()}
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation