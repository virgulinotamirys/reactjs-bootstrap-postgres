import React, { useState } from "react";
import './style.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';


//criar componentes no react com apenas funcoes
const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="/">Início</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="/login">Acesso Restrito</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
);


export default Header;
