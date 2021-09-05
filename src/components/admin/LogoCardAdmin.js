import React from "react";
import { Image } from "cloudinary-react";
import { Link, Route } from "react-router-dom";

// import AddProject from "./addProject";
import AddProject from "./addProject";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

function LogoCard({ logo }) {
  const { id } = logo;
  return (
    <>
      {/* <Link to={`/admin/project/${id}`}>
        <article className="adminProjectCard">
          <h1>{name}</h1>
          <Image
            cloudName={CLOUDINARY_NAME}
            publicId={image}
            width="300"
            crop="scale"
          />
        </article>
      </Link> */}

      <Link to={`/admin/add-logo/${id}`}>
        <article className="logoCard">
          <Image
            cloudName={CLOUDINARY_NAME}
            publicId={logo.logo}
            width="300"
            crop="scale"
          />
        </article>
      </Link>
    </>
  );
}

export default LogoCard;
