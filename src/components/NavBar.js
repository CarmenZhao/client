import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav-bar">
      <Navbar.Brand href="/" className="ms-4 page">
        <img src={logo} alt="banner" style={{ width: 200, heigh: 300 }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-4" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/" className="ms-4 page">
            Home
          </Nav.Link>
          <Nav.Link href="/Stock" className="ms-4 page">
            Stocks
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
