import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navibar() {

    const navigate = useNavigate();

  return (
    <Navbar expand="lg">
        <Container className="mainNav">
            <Navbar.Brand><h3>Keno Reyes</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="navLinks" onClick={() => navigate("/")}>About Me</Nav.Link>
                    <Nav.Link className="navLinks" onClick={() => navigate("/projects")}>Projects</Nav.Link>
                    <Nav.Link className="navLinks" onClick={() => navigate("/contact")}>Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Navibar