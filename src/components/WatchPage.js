import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import useVideoData from "../utils/useVideoData";
import useComments from "../utils/useComment";
import Comment from "./Comment"; // Import the Comment component

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const videoId = searchParams.get("v");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  const { data, error: dataError } = useVideoData(videoId);
  const { comments, error: commentsError } = useComments(videoId);

  const toggleDescription = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className={`px-5 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <button
        onClick={toggleDarkMode}
        className="text-blue-500 hover:text-blue-700 font-semibold mt-2"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      {data && (
        <div>
          <h1 className="text-2xl font-bold">{data.snippet.title}</h1>

          <div>
            <button
              onClick={toggleDescription}
              className="text-blue-500 hover:text-blue-700 font-semibold mt-2"
            >
              {isDescriptionExpanded ? "Show Less" : "Show More"}
            </button>

            {isDescriptionExpanded && (
              <p className="text-sm mt-2 font-semibold">
                {data.snippet.description}
              </p>
            )}
          </div>

          <div className="flex">
            <p className="text-sm mt-2 font-semibold">
              Views: {(data.statistics.viewCount / 1000000).toFixed(3)}M
            </p>
            <p className="ml-2 text-sm mt-2 font-semibold">
              Likes: {(data.statistics.likeCount / 1000000).toFixed(3)}M
            </p>
          </div>

          {/* Comment Section */}
          <div>
            <h1 className="text-2xl font-bold">Comments</h1>
            <div className="flex flex-col mt-2">
              {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} isDarkMode={isDarkMode} />
              ))}
            </div>
          </div>
        </div>
      )}

      {(dataError || commentsError) && <p className="text-red-500">Error fetching data</p>}
    </div>
  );
};

export default WatchPage;
