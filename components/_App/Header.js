// import React from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";


function Header() {
  const router = useRouter();

  return (
    <>
    <div class="title">
      <p class="title"> Jose Murciano </p>
    </div>

    <nav class="navbar navbar-expand-lg navbar-dark navbarCenter">

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="nav-menu">

        <ul class="navbar-nav navbarList">

            <li class="nav-item">
              <a
                href="/"
                class={router.pathname === "/" ? "nav-link navTextActive" : "nav-link navText" }
               >
                Home
              </a>
            </li>


            <li class="nav-item">
              <a
                href="/gallery"
                class={router.pathname === "/gallery" ? "nav-link navTextActive" : "nav-link navText" }
               >
                Gallery
              </a>
            </li>


            <li class="nav-item">
              <a
                href="/contact"
                class={router.pathname === "/contact" ? "nav-link navTextActive" : "nav-link navText" }
               >
                Contact
              </a>
            </li>

        </ul>

      </div>
    </nav>
      </>

  );
}

export default Header;
