import React from "react";
import { connect } from "react-redux";
import Typing from "react-typing-animation";

import { Link } from "react-scroll";

import * as reducerActions from "../../redux/actions/actions";
import BackgroundVideo from "../bgVideo";
import NavBar from "../navigation/NavBar";

function Header({ isLight, toggleLightMode, id }) {
  return (
    <header id={id} className="header">
      <BackgroundVideo />

      <button className="header__switcher" onClick={() => toggleLightMode()}>
        <span className="header__switcher-icon">
          {isLight ? (
            <i className="mdi mdi-weather-night"></i>
          ) : (
            <i className="mdi mdi-weather-sunny"></i>
          )}
        </span>
      </button>

      <section className="header__content">
        <Typing speed={10}>
          <p>
            Hello, my name is
            <span className="header__content-name"> Mohammad Raza</span>
          </p>
          <Typing.Delay ms={1000} />
          <Typing.Speed ms={100} />

          <p>
            I am a
            <span className="header__content-career">
              {" "}
              Full Stack Web Developer
            </span>{" "}
          </p>

          <p>Currently Studying at Lambda School</p>
        </Typing>
        <Link to="projects" smooth={true} duration={1000}>
          <button
            type="button"
            className="btn-project"
            style={{ color: "white" }}
          >
            View My Project
            <i className="mdi mdi-arrow-right"></i>
          </button>
        </Link>
        <Link to="contact" smooth={true} duration={1000}>
          <button
            type="button"
            className="btn-project"
            style={{ color: "white" }}
          >
            Contact Me
            <i className="mdi mdi-arrow-right"></i>
          </button>
        </Link>
      </section>
      <NavBar />
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isLight: state.reducer.isLight,
  };
};

const mapDispatchToProps = {
  toggleLightMode: reducerActions.toggleLightMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
