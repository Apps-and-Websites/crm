import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../navigation/NavBar";

import Logo from "../../assets/images/mr-logo.png";

export default function Header(props) {
  const path = props.location.pathname;
  return (
    <header>
      {path.startsWith("/admin") ? null : (
        <>
          <section className="main-header">
            <div className="main-header__top">
              <h1>Call or Text Me 682-256-6547</h1>
            </div>
            <div className="main-header__secondary">
              <div className="logo-holder">
                <Link to="/">
                  <img src={Logo} />
                </Link>
              </div>
              <h1>Mohammad Raza Portfolio</h1>
            </div>
          </section>
          <NavBar />
        </>
      )}
    </header>
  );
}
