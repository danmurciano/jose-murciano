import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";


function Header2() {
  const router = useRouter();

  return (
    <>
    <Navbar variant="dark" expand="lg" className="navbar-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="navbar-collapse" id="basic-navbar-nav">
        <Nav className="nav-center">

          <Nav.Link
            className={router.pathname === "/" ? "nav-item navTextActive" : "nav-item navText"}
            href="/">Home
          </Nav.Link>

          <Nav.Link
            className={router.pathname === "/gallery" ? "nav-item navTextActive" : "nav-item navText"}
            href="/gallery">Gallery
          </Nav.Link>

          <Nav.Link
            className={router.pathname === "/contact" ? "nav-item navTextActive" : "nav-item navText"}
            href="/contact">Contact
          </Nav.Link>

        </Nav>

      </Navbar.Collapse>
    </Navbar>
    </>

  );
}

export default Header2;
