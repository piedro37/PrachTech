import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { scroller } from 'react-scroll'

export const NavBar = () => {
    const theme = 'dark'
    // const logo = theme === 'dark' ? logo_white : logo_dark
    // document.title = 'PrachTech'

    const handleClick = (e) => {
        // console.log(e.target.id)
        scroller.scrollTo(e.target.id, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          })
        }

    return(
        <Navbar 
            bg={'darkgreen'} 
            variant={theme}
            sticky='top'
            fixed='top'
            expand='md'
            // expanded={true} 
        >
            <Container fluid='lg'>
                <Navbar.Brand>Pieter Van Eynde</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
                    <Nav > 
                        <Nav.Link id='about' onClick={handleClick}>About</Nav.Link>
                        <Nav.Link id='techstack' onClick={handleClick}>Tech Stack</Nav.Link>
                        <Nav.Link id='contact' onClick={handleClick}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


