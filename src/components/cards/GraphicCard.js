import React from "react";
import { Image } from "cloudinary-react";
import { Link } from "react-router-dom";

const CLOUDINARY_NAME = process.env.REACT_APP_CLOUD_NAME;

function GraphicCard({ graphic }) {
  const { id } = graphic;
  return (
    <>
      <Link to={`/admin/add-graphic/${id}`}>
        <article className="graphicCard">
          <Image
            cloudName={CLOUDINARY_NAME}
            publicId={graphic.graphic}
            width="300"
            crop="scale"
          />
        </article>
      </Link>
    </>
  );
}

export default GraphicCard;
