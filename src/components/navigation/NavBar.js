import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

import NavItems from "./navItems";

function NavBar() {
  return (
    <nav className="navBar">
      <ul className="navBar__navigation">
        {NavItems.map((item) => (
          <li className="navBar__item" key={item.id}>
            <LinkRoute
              to={item.route}
              activeClass="navBar__active"
              className="navBar__link"
            >
              {item.name}
            </LinkRoute>
          </li>
        ))}

        <button className="navBar__scroll" onClick={() => scroll.scrollToTop()}>
          <i className="mdi mdi-chevron-double-up page-link"></i>
        </button>
      </ul>
    </nav>
  );
}

export default NavBar;
