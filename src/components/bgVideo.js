import React from "react";

import video from "../assets/images/bgVideo.mp4";

function BackgroundVideo() {
  return (
    <div className="bgVideo">
      <video autoPlay="autoplay" loop="loop" muted className="bgVideo__video">
        <source src={video} type="video/mp4" />
        Your browser does not support eh video tag
      </video>
    </div>
  );
}

export default BackgroundVideo;
