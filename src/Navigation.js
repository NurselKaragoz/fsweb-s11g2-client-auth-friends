import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function ContainerOutsideExample() {
  return (
    <Container>
      <Navbar expand="sm" className="bg-body-tertiary  ">
        <Nav class="navbar fixed-top ">
          <Container>
            FRIENDS DATABASE
            <Navbar.Brand className="navbar-dark bg-dark" href="/login">
              LOGIN.
            </Navbar.Brand>
            <Navbar.Brand className="navbar-dark bg-dark" href="/friends">
              FRIENDLIST.
            </Navbar.Brand>
            <Navbar.Brand className="navbar-dark bg-dark" href="f">
              ADDFRİEND.
            </Navbar.Brand>
            <Navbar.Brand className="navbar-dark bg-dark" href="#">
              LOGOUT
            </Navbar.Brand>
          </Container>
        </Nav>
      </Navbar>
    </Container>
  );
}

export default ContainerOutsideExample;
