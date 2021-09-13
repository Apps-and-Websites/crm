import React, { Component } from "react";

import LogoCard from "../cards/LogoCard";

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
