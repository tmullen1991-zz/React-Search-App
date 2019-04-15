import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Google Books Search and Save</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
  
            <Nav.Link href="/">
              Search
            </Nav.Link>
            <Nav.Link href="/saved">
              Saved Books
            </Nav.Link>
            <Nav.Link href="https://github.com/tmullen1991/React-Game">
              Link to Github
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default App
