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
                    <Nav.Item onClick={() => changeCategory('technology')} className="nav-link">
                        <Link to="/technology" className="link">Technology</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('business')} className="nav-link">
                        <Link to="/business" className="link">Business</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('science')} className="nav-link">
                        <Link to="/science" className="link">Science</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('politics')} className="nav-link">
                        <Link to="/politics" className="link">Politics</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('world')} className="nav-link">
                        <Link to="/world" className="link">World</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('sports')} className="nav-link">
                        <Link to="/sports" className="link">Sports</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('academia')} className="nav-link">
                        <Link to="/academia" className="link">Academia</Link>
                    </Nav.Item>

                    <Nav.Item onClick={() => changeCategory('game')} className="nav-link">
                        <Link to="/game" className="link">Game</Link>
                    </Nav.Item>

                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => changeCategory('lifestyle')}>
                            <Link to="/lifestyle" className="text-dark">Lifestyle</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={() => changeCategory('regional')}>
                            <Link to="/regional" className="text-dark">Regional</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={() => changeCategory('general')}>
                            <Link to="/general" className="text-dark">General</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={() => changeCategory('programming')}>
                            <Link to="/programming" className="text-dark">Programming</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={() => changeCategory('finance')}>
                            <Link to="/finance" className="text-dark">Finance</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={() => changeCategory('health')}>
                            <Link to="/health" className="text-dark">Health</Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item onClick={() => changeCategory('food')}>
                            <Link to="/food" className="text-dark">Food</Link>
                        </NavDropdown.Item>
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