import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

function LogoCard({ logo }) {
  const { id } = logo;
  return (
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
  );
}

export default LogoCard;
