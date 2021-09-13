import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

function ProjectCard({ project }) {
  const { name, image, id } = project;
  return (
    <Link to={`/website/${id}`}>
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
  );
}

export default ProjectCard;
