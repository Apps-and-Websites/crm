import React from "react";
import { Image } from "cloudinary-react";
import { Link, Route } from "react-router-dom";

// import AddProject from "./addProject";
import AddProject from "./addProject";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

function ProjectCard({ project }) {
  const {
    name,
    description,
    github_be_url,
    github_fe_url,
    image,
    id,
    url,
  } = project;
  return (
    <>
      {/* <Route
        path="/admin/project/:id"
        render={(props) => <AddProject {...props} project={project} />}
      /> */}

      <Link to={`/admin/project/${id}`}>
        <article className="adminProjectCard">
          <h1>{name}</h1>
          <Image
            cloudName={CLOUDINARY_NAME}
            publicId={image}
            width="300"
            crop="scale"
          />
        </article>
      </Link>
    </>
  );
}

export default ProjectCard;
