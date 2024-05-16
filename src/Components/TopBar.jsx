import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
function TopBar() {
  return (
    <>
      <div
        style={{
          placeItems: "normalLegacy !important",
        }}
      >
        <Navbar bg="myColor" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/dashboard">AJITH </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/dashboard">Home</Nav.Link>
              <Nav.Link href="/create">Add Costomer</Nav.Link>
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            </Nav>

            <div className="dropdown">
              <i
                className="fa-regular fa-circle-user fa-2xl m-4"
                style={{ color: "white" }}
              ></i>
              <div className="dropdown-content">
                <a href="/">Logout</a>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default TopBar;
