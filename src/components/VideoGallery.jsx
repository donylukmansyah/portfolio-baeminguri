import React from "react";
import YouTubeEmbed from "./YouTubeEmbed";

const VideoGallery = () => {
  return (
    <div className="flex flex-col items-center p-6">
        <YouTubeEmbed embedId="KNexS61fjus" />
        <YouTubeEmbed embedId="r9AEGPB6qIU" />
        <YouTubeEmbed embedId="Vk5-c_v4gMU" />
    </div>
  );
};

export default VideoGallery;
