import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";

import * as websiteActions from "../redux/actions/websiteActions";
import * as appActions from "../redux/actions/appActions";
import * as logoActions from "../redux/actions/logoActions";
import * as graphicActions from "../redux/actions/graphicActions";
import * as userActions from "../redux/actions/userActions";

import AdminBar from "./navBar";
import Routes from "./Routes";

class Admin extends Component {
  componentDidMount() {
    this.props.getAllWebsites();
    this.props.getAllApps();
    this.props.getAllLogos();
    this.props.getAllGraphics();
  }

  componentDidUpdate(prevProps, prevState) {
    const {
      websites,
      getAllWebsites,
      logoList,
      getAllLogos,
      graphicList,
      getAllGraphics,
    } = this.props;

    if (prevProps.websites.length !== websites.length) {
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
      <>
        <header className="main-header">
          <AdminBar logoutUser={this.props.logoutUser} />
        </header>
        <main className="main-content">
          <Routes
            // apps
            addApp={this.props.addApp}
            getAllApps={this.props.getAllApps}
            getSingleApp={this.props.getSingleApp}
            deleteApp={this.props.deleteApp}
            apps={this.props.apps}
            singleApp={this.props.singleApp}
            appStart={this.props.appStart}
            appErorr={this.props.appErorr}
            // websites
            websiteStart={this.props.websiteStart}
            addWebsite={this.props.addWebsite}
            singleWebsite={this.props.singleWebsite}
            websites={this.props.websites}
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
      </>
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
    // apps
    apps: state.appReducer.apps,
    singleApp: state.appReducer.singleApp,
    appStart: state.appReducer.appStart,
    appErorr: state.appReducer.appErorr,
    // websites
    websites: state.websiteReducer.websites,
    singleWebsite: state.websiteReducer.singleWebsite,
    getSingleWebsite: state.websiteReducer.getSingleWebsite,
    websiteStart: state.websiteReducer.websiteStart,
    // logos
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
  // apps
  getAllApps: appActions.getAllApps,
  getSingleApp: appActions.getSingleApp,
  addApp: appActions.addApp,
  deleteApp: appActions.deleteApp,
  // websites
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
