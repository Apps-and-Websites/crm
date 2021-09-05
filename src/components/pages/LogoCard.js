import React from "react";
import { Image } from "cloudinary-react";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

export default function LogoCard({ logo }) {
  console.log("logo: ", logo);
  const { id } = logo;

  return (
    <article className="logoCard">
      {/* <img className="projectCard__img" src={image} alt={name} /> */}

      <Image
        cloudName={CLOUDINARY_NAME}
        publicId={logo.logo}
        className="logoCard__img"
      />
    </article>
  );
}
