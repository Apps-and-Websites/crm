import React from "react";
import { Route } from "react-router-dom";

import AddWebsite from "./addings/addWebsite";
import Websites from "./listings/websites";
import Apps from "./listings/appProjects";
import Logos from "./listings/logos";
import AddLogo from "./addings/addLogo";
import AddAppProject from "./addings/addApp";
import Graphics from "./listings/graphics";
import AddGraphic from "./addings/addGraphic";

export default function AdminRoutes({
  /* Apps */
  addApp,
  getAllApps,
  getSingleApp,
  deleteApp,
  apps,
  singleApp,
  appStart,
  appErorr,
  /* websites */
  addWebsite,
  singleWebsite,
  websites,
  getSingleWebsite,
  websiteStart,
  deleteWebsite,
  /* logos */
  logoList,
  addLogo,
  singleLogo,
  getSingleLogo,
  logoStart,
  deleteLogo,
  /* graphics */
  graphicList,
  addGraphic,
  singleGraphic,
  getSingleGraphic,
  graphicStart,
  deleteGraphic,
}) {
  const websiteRoutes = () => {
    return (
      <>
        <Route
          exact
          path="/add-website"
          render={(props) => <AddWebsite {...props} addWebsite={addWebsite} />}
        />
        <Route
          exact
          path="/website/:id"
          render={(props) => (
            <AddWebsite
              {...props}
              addWebsite={addWebsite}
              singleWebsite={singleWebsite}
              getSingleWebsite={getSingleWebsite}
              websiteStart={websiteStart}
              deleteWebsite={deleteWebsite}
            />
          )}
        />

        <Route
          exact
          path="/websites"
          render={(props) => <Websites {...props} websites={websites} />}
        />
      </>
    );
  };

  return (
    <div>
      {websiteRoutes()}
      <Route
        exact
        path="/add-graphic"
        render={(props) => <AddGraphic {...props} addGraphic={addGraphic} />}
      />

      <Route
        exact
        path="/add-logo"
        render={(props) => <AddLogo {...props} addLogo={addLogo} />}
      />

      <Route
        exact
        path="/add-logo/:id"
        render={(props) => (
          <AddLogo
            {...props}
            logoStart={logoStart}
            addLogo={addLogo}
            singleApp={singleApp}
            getSingleLogo={getSingleLogo}
            deleteLogo={deleteLogo}
          />
        )}
      />

      <Route
        exact
        path="/add-app"
        render={(props) => <AddAppProject {...props} addApp={addApp} />}
      />

      <Route
        exact
        path="/add-graphic/:id"
        render={(props) => (
          <AddGraphic
            {...props}
            graphicStart={graphicStart}
            addGraphic={addGraphic}
            singleGraphic={singleGraphic}
            getSingleGraphic={getSingleGraphic}
            deleteGraphic={deleteGraphic}
          />
        )}
      />

      <Route
        exact
        path="/logos"
        render={(props) => <Logos {...props} logoList={logoList} />}
      />

      <Route
        exact
        path="/graphics"
        render={(props) => <Graphics {...props} graphicList={graphicList} />}
      />
      <Route
        exact
        path="/add-app/:id"
        render={(props) => (
          <AddAppProject
            {...props}
            appStart={appStart}
            addApp={addApp}
            singleApp={singleApp}
            getSingleApp={getSingleApp}
            deleteApp={deleteApp}
          />
        )}
      />
      <Route
        exact
        path="/apps"
        render={(props) => <Apps {...props} apps={apps} />}
      />
      <Route
        exact
        path="/apps/:id"
        render={(props) => (
          <AddAppProject
            {...props}
            appStart={appStart}
            addApp={addApp}
            singleApp={singleApp}
            getSingleApp={getSingleApp}
            deleteApp={deleteApp}
          />
        )}
      />
    </div>
  );
}
