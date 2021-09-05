import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import ProjectCard from "./ProjectCard";

import * as websiteActions from "../../redux/actions/websiteActions";

class Projects extends Component {
  componentWillMount() {
    this.props.getAllWebsites();
  }
  render() {
    const { projectList } = this.props;
    return (
      <section id={this.props.id} className="projects">
        <h1 className="heading-primary">Projects</h1>
        <div className="projectContainer">
          {projectList.length > 0 ? (
            projectList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <Loader
              type="Bars"
              color="#118CA9"
              height={400}
              width={400}
              className="marginTop-big"
            />
          )}
        </div>
      </section>
    );
  }
}
// EventDetail.propTypes = {
//   match: PropTypes.oneOfType([PropTypes.object]).isRequired,
//   singleEvent: PropTypes.oneOfType([PropTypes.object]).isRequired,
//   getSingleEvent: PropTypes.func.isRequired
// };

const mapStateToProps = (state) => {
  return {
    projectList: state.projectReducer.projects,
    singleProject: state.projectReducer.singleProject,
    getSingleWebsite: state.projectReducer.getSingleWebsite,
  };
};

const mapDispatchToProps = {
  getAllWebsites: websiteActions.getAllWebsites,
  getSingleWebsite: websiteActions.getSingleWebsite,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

/* show 5 projects

  // projectList
            //   .slice(-4, -1)
            //   .map((project) => (
            //     <ProjectCard key={project.id} project={project} />
            //   ))
            //   .reverse()

*/
