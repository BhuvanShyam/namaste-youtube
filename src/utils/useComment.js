import { useState, useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const useComment = (videoId) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getComments = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/commentThreads?key=${GOOGLE_API_KEY}&textFormat=plainText&part=snippet&videoId=${videoId}&maxResults=10`
        );
        const json = await response.json();
        setComments(json?.items || []);
      } catch (error) {
        setError(error);
      }
    };

    if (videoId) {
      getComments();
    }
  }, [videoId]);

  return { comments, error };
};

export default useComment;
