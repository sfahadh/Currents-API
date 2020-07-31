import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const navbar = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">CN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#tech">Tech</Nav.Link>
                <Nav.Link href="#business">Business</Nav.Link>
                <Nav.Link href="#science">Science</Nav.Link>
                <Nav.Link href="#politics">Politics</Nav.Link>
                <Nav.Link href="#world">World</Nav.Link>
                <NavDropdown title="More" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Regional</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Lifestyle</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Entertainment</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Programming</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">Sports</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.6">Finance</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.7">Academia</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.8">Health</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.9">Food</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/4.0">Other</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;