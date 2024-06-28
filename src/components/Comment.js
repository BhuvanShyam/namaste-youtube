import React, { useState } from "react";

const Comment = ({ comment, isDarkMode }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className={`flex flex-col mt-2 p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} rounded-md`}>
      <div className="flex items-center">
        <img
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="author"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col ml-2 w-full">
          <p className="font-semibold">
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
          </p>
          <p className="text-sm">
            {comment.snippet.topLevelComment.snippet.textDisplay}
          </p>
          <button
            onClick={toggleExpand}
            className="text-blue-500 hover:text-blue-700 font-semibold mt-2 self-start"
          >
            {isExpanded ? "Hide Replies" : "Show Replies"}
          </button>
          {isExpanded &&
            comment.snippet.replies &&
            comment.snippet.replies.comments.map((reply) => (
              <div key={reply.id} className="flex items-center ml-6 mt-2">
                <img
                  src={reply.snippet.authorProfileImageUrl}
                  alt="author"
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col ml-2">
                  <p className="font-semibold">{reply.snippet.authorDisplayName}</p>
                  <p className="text-sm">{reply.snippet.textDisplay}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Comment;
