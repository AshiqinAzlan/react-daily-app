import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import HomeIcon from "@mui/icons-material/Home";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AcUnitIcon from "@mui/icons-material/AcUnit";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Daily Companion</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <HomeIcon />
              Home
            </Nav.Link>
            <Nav.Link href="/todo">
              <ChecklistIcon />
              Todo
            </Nav.Link>
            <Nav.Link href="/weather">
              <AcUnitIcon />
              Weather
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
