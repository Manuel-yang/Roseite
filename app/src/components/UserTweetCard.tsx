import React from "react";
import { UserTweet } from "../models";
import { FaRegComment, FaHeart, FaTrash } from "react-icons/fa";
import useTheme from "../hooks/useTheme";

export default function UserTweetCard({ tweet, onDelete }: { tweet: UserTweet; onDelete: (t: UserTweet) => void }) {
  const { theme } = useTheme();

  return (
    <div className={`rounded-lg shadow-md p-4 ${theme === "dark" ? "dark" : ""}`}>
      <p className="text-gray-500 mb-4">{tweet.nftAddress.toString()}</p>
      <h2 className={`text-lg font-bold mb-4 ${theme === "dark" ? "text-white" : ""}`}>{tweet.content}</h2>
      <div className="flex space-x-32 items-center">
        <div className="flex items-center">
          <FaRegComment className="text-gray-500 mr-1" />
          <span className="text-gray-500">{tweet.reviewNum.toString()} Reviews</span>
        </div>
        <div className="flex items-center">
          <FaHeart className="text-gray-500 mr-1" />
          <span className="text-gray-500">{tweet.likeNum.toString()} Likes</span>
        </div>
      </div>
      <button
        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={() => onDelete(tweet)}
      >
        <FaTrash className="text-white mr-1" />
        Delete
      </button>
    </div>
  );
}
