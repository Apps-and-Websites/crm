import React from "react";
import { connect } from "react-redux";
import { CgWebsite } from "react-icons/cg";
import { SiReactos } from "react-icons/si";
import { RiProfileLine } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";

import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";

import * as reducerActions from "../../redux/actions/actions";
import BackgroundVideo from "../bgVideo";
import NavBar from "../navigation/NavBar";
import HomeProjects from "./HomeProjects";
import { act } from "@testing-library/react";

function Home({ id }) {
  return (
    <div id="home-page" class="home-content">
      <header id={id} className="home-content__header">
        <p>Hello, my name is</p>
        <h1 class="heading-primary">Mo Raza</h1>
        <h2>Full Stack Web Developer</h2>
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>Javascript</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
        <div>
          <a href="sms:682-256-6547">682-256-6547</a>
          <a href="mailto:msraza1@gmail.com">msraza1@gmail.com</a>
        </div>
      </header>
      <div class="home-content__sections">
        <section class="one">
          <button>
            <CgWebsite />
            <span>Live Websites</span>
          </button>
        </section>
        <section class="two">
          <button>
            <SiReactos />
            <span>Apps and Projects</span>
          </button>
        </section>
        <section class="three">
          <button>
            <RiProfileLine />
            <span>Profile</span>
          </button>
        </section>
        <section class="four">
          <button>
            <MdContactMail />
            <span>Contact Me</span>
          </button>
        </section>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
