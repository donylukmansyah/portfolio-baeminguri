import React from "react";

const YouTubeEmbed = ({ embedId }) => (
  <div className="w-full aspect-video rounded-lg overflow-hidden my-4">
    <iframe
      className="w-full h-full"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
);

export default YouTubeEmbed;
