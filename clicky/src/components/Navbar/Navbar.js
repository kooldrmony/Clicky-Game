import React from "react";
import "./Navbar.css";

const Nav = () => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <p class="navbar-brand">Clicky Game</p>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        Click on an Image to start!
      </li>
    </ul>
    <span class="navbar-text">
      Total Score: | Top Score: 
    </span>
  </div>
</nav>
);

export default Nav;