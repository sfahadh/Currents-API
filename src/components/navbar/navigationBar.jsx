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
                    <Nav.Link href="#business" onClick={() => changeCategory('business')}>Business</Nav.Link>
                    <Nav.Link href="#science">Science</Nav.Link>
                    <Nav.Link href="#politics">Politics</Nav.Link>
                    <Nav.Link href="#world">World</Nav.Link>
                    <Nav.Link href="#sports">Sports</Nav.Link>
                    <Nav.Link href="#academia">Academia</Nav.Link>
                    <Nav.Link href="#game">Game</Nav.Link>
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