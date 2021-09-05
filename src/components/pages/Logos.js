import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import LogoCard from "./LogoCard";

import * as logoActions from "../../redux/actions/logoActions";

class Logos extends Component {
  componentWillMount() {
    this.props.getAllLogos();
  }
  render() {
    const { logoList } = this.props;
    return (
      <section id={this.props.id} className="logos">
        <h1 className="heading-primary">Logos</h1>
        <div className="logoContainer">
          {logoList.length > 0 ? (
            logoList
              .map((logo) => <LogoCard key={logo.id} logo={logo} />)
              .reverse()
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
    logoList: state.logoReducer.logos,
    singleLogo: state.logoReducer.singleLogo,
    logoStart: state.logoReducer.logoStart,
  };
};

const mapDispatchToProps = {
  getAllLogos: logoActions.getAllLogos,
  getSingleLogo: logoActions.getSingleLogo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logos);

/* show 5 projects

  // logoList
            //   .slice(-4, -1)
            //   .map((project) => (
            //     <ProjectCard key={project.id} project={project} />
            //   ))
            //   .reverse()

*/
