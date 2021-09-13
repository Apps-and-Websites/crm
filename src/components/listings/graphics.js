import React, { Component } from "react";
import GraphicCard from "../cards/GraphicCard";

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
