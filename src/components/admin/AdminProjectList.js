import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import AddProject from "./addProject";

import ProjectCard from "./AdminProjectCard";

class ProjectList extends Component {
  render() {
    return (
      <section className="projectLists">
        {this.props.projectList.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </section>
    );
  }
}

export default ProjectList;
