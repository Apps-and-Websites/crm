import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";

import * as websiteActions from "../../redux/actions/websiteActions";
import * as logoActions from "../../redux/actions/logoActions";
import * as graphicActions from "../../redux/actions/graphicActions";
import * as userActions from "../../redux/actions/userActions";

import AdminBar from "./adminBar";
import AdminRoutes from "./AdminRoutes";

class Admin extends Component {
  componentDidMount() {
    this.props.getAllWebsites();
    this.props.getAllLogos();
    this.props.getAllGraphics();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      projectList,
      getAllWebsites,
      logoList,
      getAllLogos,
      graphicList,
      getAllGraphics,
    } = this.props;

    if (prevProps.projectList.length !== projectList.length) {
      getAllWebsites();
    }

    if (prevProps.logoList.length !== logoList.length) {
      getAllLogos();
    }

    if (prevProps.graphicList.length !== graphicList.length) {
      getAllGraphics();
    }
  }

  render() {
    return (
      <main className="admin">
        <AdminBar logoutUser={this.props.logoutUser} />
        <AdminRoutes
          websiteStart={this.props.websiteStart}
          addWebsite={this.props.addWebsite}
          website={this.props.singleProject}
          projectList={this.props.projectList}
          getSingleWebsite={this.props.getSingleWebsite}
          deleteWebsite={this.props.deleteWebsite}
          /* logos */
          logoList={this.props.logoList}
          addLogo={this.props.addLogo}
          singleLogo={this.props.singleLogo}
          getSingleLogo={this.props.getSingleLogo}
          logoStart={this.props.logoStart}
          deleteLogo={this.props.deleteLogo}
          /* graphics */
          graphicList={this.props.graphicList}
          addGraphic={this.props.addGraphic}
          singleGraphic={this.props.singleGraphic}
          getSingleGraphic={this.props.getSingleGraphic}
          deleteGraphic={this.props.deleteGraphic}
          graphicStart={this.props.graphicStart}
        />
      </main>
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
    websiteStart: state.projectReducer.websiteStart,

    logoList: state.logoReducer.logos,
    singleLogo: state.logoReducer.singleLogo,
    logoStart: state.logoReducer.logoStart,
    /* graphics */
    graphicList: state.graphicReducer.graphics,
    singleGraphic: state.graphicReducer.singleGraphic,
    graphicStart: state.graphicReducer.graphicStart,
  };
};

const mapDispatchToProps = {
  addWebsite: websiteActions.addWebsite,
  getAllWebsites: websiteActions.getAllWebsites,
  getSingleWebsite: websiteActions.getSingleWebsite,
  deleteWebsite: websiteActions.deleteWebsite,
  getAllLogos: logoActions.getAllLogos,
  addLogo: logoActions.addLogo,
  getSingleLogo: logoActions.getSingleLogo,
  deleteLogo: logoActions.deleteLogo,
  addGraphic: graphicActions.addGraphic,
  getAllGraphics: graphicActions.getAllGraphics,
  getSingleGraphic: graphicActions.getSingleGraphic,
  deleteGraphic: graphicActions.deleteGraphic,
  logoutUser: userActions.logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
