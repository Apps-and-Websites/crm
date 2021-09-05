import React from "react";
import { Route } from "react-router-dom";

import AddProject from "./addProject";
import ProjectLists from "./AdminProjectList";
import LogoList from "./LogoListAdmin";
import AddLogo from "./addLogo";
import GraphicList from "./GraphicListAdmin";
import AddGraphic from "./AddGraphic";

export default function AdminRoutes({
  addWebsite,
  website,
  projectList,
  getSingleWebsite,
  websiteStart,
  deleteWebsite,
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
  return (
    <div>
      <Route
        exact
        path="/admin/add-graphic"
        render={(props) => <AddGraphic {...props} addGraphic={addGraphic} />}
      />

      <Route
        exact
        path="/admin/add-logo"
        render={(props) => <AddLogo {...props} addLogo={addLogo} />}
      />

      <Route
        exact
        path="/admin/project"
        render={(props) => <AddProject {...props} addWebsite={addWebsite} />}
      />

      <Route
        exact
        path="/admin/project/:id"
        render={(props) => (
          <AddProject
            {...props}
            addWebsite={addWebsite}
            website={website}
            getSingleWebsite={getSingleWebsite}
            websiteStart={websiteStart}
            deleteWebsite={deleteWebsite}
          />
        )}
      />

      <Route
        exact
        path="/admin/add-logo/:id"
        render={(props) => (
          <AddLogo
            {...props}
            logoStart={logoStart}
            addLogo={addLogo}
            singleLogo={singleLogo}
            getSingleLogo={getSingleLogo}
            deleteLogo={deleteLogo}
          />
        )}
      />

      <Route
        exact
        path="/admin/add-graphic/:id"
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
        path="/admin/"
        render={(props) => (
          <ProjectLists {...props} projectList={projectList} />
        )}
      />

      <Route
        exact
        path="/admin/logos"
        render={(props) => <LogoList {...props} logoList={logoList} />}
      />

      <Route
        exact
        path="/admin/graphics"
        render={(props) => <GraphicList {...props} graphicList={graphicList} />}
      />
    </div>
  );
}
