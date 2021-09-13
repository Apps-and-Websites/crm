import React, { Component } from "react";

import AppCard from "../cards/AppCard";

class Apps extends Component {
  render() {
    return (
      <section className="projectLists">
        {this.props.apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </section>
    );
  }
}

export default Apps;
