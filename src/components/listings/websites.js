import React, { Component } from "react";

import ProjectCard from "../cards/WebsiteCard";

class ProjectList extends Component {
  render() {
    return (
      <section className="projectLists">
        {this.props.websites.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    );
  }
}

export default ProjectList;
