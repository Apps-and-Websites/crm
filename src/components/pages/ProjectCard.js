import React from "react";
import { Image } from "cloudinary-react";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

export default function ProjectCard({ project }) {
  const { name, image, url, github_be_url, github_fe_url } = project;

  return (
    <article className="projectCard">
      {/* <img className="projectCard__img" src={image} alt={name} /> */}
      <h3 className="heading-tertiary">{name} </h3>

      <Image
        cloudName={CLOUDINARY_NAME}
        publicId={image}
        className="projectCard__img"
      />
      <div className="projectCard__buttons">
        <a
          className="btn btn__link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website
        </a>

        {/* <a
          className="btn btn__link"
          href={github_be_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          github_be
        </a> */}

        {/* <a
          className="btn btn__link"
          href={github_fe_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a> */}
      </div>
    </article>
  );
}
