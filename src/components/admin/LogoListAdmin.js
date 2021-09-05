import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import LogoCard from "./LogoCardAdmin";

class LogoList extends Component {
  render() {
    return (
      <section className="logoList">
        {this.props.logoList.map((logo) => (
          <LogoCard key={logo.id} logo={logo} />
        ))}
      </section>
    );
  }
}

export default LogoList;
