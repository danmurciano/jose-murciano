import Link from "next/link";
import Router, { useRouter } from "next/router";
import { Navbar, Nav } from "react-bootstrap";


export default function Header() {
  const router = useRouter();

  return (
    <>
    <Navbar variant="dark" expand="lg" className="navbar-center">
      <div class="toggle-button-div">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </div>

      <Navbar.Collapse className="navbar-sticky row" id="basic-navbar-nav">
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
      <div class="toggle-button-div"/>
    </Navbar>
    </>

  );
}
