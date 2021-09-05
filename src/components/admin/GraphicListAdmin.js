import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import GraphicCard from "./GraphicCardAdmin";

class GraphicList extends Component {
  render() {
    return (
      <section className="graphicList">
        {this.props.graphicList.map((graphic) => (
          <GraphicCard key={graphic.id} graphic={graphic} />
        ))}
      </section>
    );
  }
}

export default GraphicList;
