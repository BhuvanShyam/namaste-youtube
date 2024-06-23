import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard, { AdvertisementVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      <AdvertisementVideoCard info={videos[0]} />
      {videos.map((video) => (
        <Link to={"/watch?v=" + video?.id}>
          <VideoCard key={video?.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
