import React from "react";

const VideoCard = ({ info }) => {
  const { snippet = {}, statistics = {} } = info || {};
  const {
    channelTitle = "Unknown Channel",
    title = "Untitled",
    thumbnails = {},
  } = snippet;
  const { medium = {} } = thumbnails;

  return (
    <div className="p-2 m-2 w-64 shadow-lg">
      {medium.url ? (
        <img
          className="rounded-lg w-full h-auto"
          alt="video-thumbnail"
          src={medium.url}
        />
      ) : (
        <img
          className="rounded-lg w-full h-auto"
          alt="video-thumbnail"
          src="default-thumbnail.jpg"
        />
      )}
      <ul className="mt-2">
        <li className="font-bold py-2 truncate">{title}</li>
        <li className="truncate">{channelTitle}</li>
        <li>{statistics.viewCount || "Unknown"} views</li>
      </ul>
    </div>
  );
};

//Higherorder function
export const  AdvertisementVideoCard = ({info}) => {
  return (
    <div className="p-1 m-1 border border-black-900 bg-gradient-to-tr from-yellow-400 to-green-400">
      <VideoCard info={info}/>
    </div>
  );
};

export default VideoCard;
