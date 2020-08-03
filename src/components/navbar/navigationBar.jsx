import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './navigationBar.css'

const NavigationBar = ({ changeCategory }) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Navbar.Brand className="ml-3">
                <Link to="/" className="link">CN</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto" >
                    <Nav.Item onClick={() => changeCategory('technology')}>
                        <Link to="/technology" className="link">Technology</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('business')}>
                        <Link to="/business" className="link">Business</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('science')}>
                        <Link to="/science" className="link">Science</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('politics')}>
                        <Link to="/politics" className="link">Politics</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('world')}>
                        <Link to="/world" className="link">World</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('sports')}>
                        <Link to="/sports" className="link">Sports</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('academia')}>
                        <Link to="/academia" className="link">Academia</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('game')}>
                        <Link to="/game" className="link">Game</Link>
                    </Nav.Item>

                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Lifestyle</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Regional</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">General</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Programming</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Finance</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Health</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Food</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Others</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav.Item className="mr-3">
                    <Link to="/latestNews" className="link">Latest News</Link>
                </Nav.Item>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;