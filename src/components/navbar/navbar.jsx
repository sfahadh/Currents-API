import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Form, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const navbar = () => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">CN</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="#tech">Technology</Nav.Link>
                <Nav.Link href="#business">Business</Nav.Link>
                <Nav.Link href="#science">Science</Nav.Link>
                <Nav.Link href="#politics">Politics</Nav.Link>
                <Nav.Link href="#world">World</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Lifestyle</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default navbar;