import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const useVideoData = (videoId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${GOOGLE_API_KEY}&part=snippet,contentDetails,statistics`
        );
        const json = await response.json();
        setData(json?.items[0]);
      } catch (error) {
        setError(error);
      }
    };

    if (videoId) {
      getData();
    }
  }, [videoId]);

  return { data, error };
};

export default useVideoData;
