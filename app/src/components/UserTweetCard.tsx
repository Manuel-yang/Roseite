import React, { useState } from "react";
import { UserTweet } from "../models";
import { FaRegComment, FaHeart, FaRetweet } from "react-icons/fa";
import useTheme from "../hooks/useTheme";
import useNftScanner from "../hooks/useNftScanner";
import CopyToClipboardButton from "./CopyButton";
import { bnToData } from "../utils";
import { set } from "@metaplex-foundation/umi/serializers";

export default function UserTweetCard({ tweet }: { tweet: UserTweet }) {
  const { theme } = useTheme();
  const { nftsList, selectedNftId } = useNftScanner();
  const [retweets, setRetweets] = useState(0);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [retweetColor, setRetweetColor] = useState("");
  const [commentColor, setCommentColor] = useState("");
  const [likesColor, setLikesColor] = useState("");

  const changeCommentColor = () => {
    if (commentColor === "yellow") {
      setCommentColor("");
    } else {
      setCommentColor("yellow");
    }
  };

  return (
    <div className={`card py-4 px-8 ${theme === "dark" ? "dark" : ""}`}>
      <div className="card-content">
        <div className="flex items-center mb-4">
          {selectedNftId !== undefined ? (
            <img className="w-10 h-11 rounded-full mr-4" src={nftsList[selectedNftId]?.data.metadata.image} />
          ) : (
            <img className="w-10 rounded-full" src={`https://avatars.dicebear.com/api/jdenticon/undefined.svg`} />
          )}
          {selectedNftId !== undefined && (
            <p className="text-gray-500 mr-3">{`${
              nftsList[selectedNftId]?.data.name
            } @${tweet.nftAddress.toString()}`}</p>
          )}
          <CopyToClipboardButton textToCopy={tweet.nftAddress.toString()} />
        </div>
        <p className={`text-lg mb-4 ${theme === "dark" ? "text-white" : ""}`}>{tweet.content}</p>
        <p className="text-gray-500 mb-1">{bnToData(tweet.timeStamp)}</p>
        <div className="flex space-x-8 items-center mb-2">
          <div className="flex items-center">
            <FaRetweet className="text-gray-500 mr-1" color={retweetColor} />
            <span className="text-gray-500 mr-1">{retweets} </span>
            <span
              className="text-gray-500 cursor-pointer hover:underline"
              onClick={() => {
                if (retweets === 1) {
                  setRetweets(0);
                  setRetweetColor("");
                } else {
                  setRetweets(1);
                  setRetweetColor("#9945ff");
                }
              }}
            >
              Retweet
            </span>
          </div>
          <div className="flex items-center">
            <FaRegComment className="text-gray-500 mr-1" color={commentColor} />
            <span className="text-gray-500 mr-1">{tweet.reviewNum.toString()} </span>
            <span
              className="text-gray-500 cursor-pointer hover:underline"
              onMouseEnter={changeCommentColor}
              onMouseLeave={changeCommentColor}
            >
              Comments
            </span>
          </div>
          <div className="flex items-center">
            <FaHeart className="text-gray-500 mr-1" color={likesColor} />
            <span className="text-gray-500 mr-1">{likes} </span>
            <span
              className="text-gray-500 cursor-pointer hover:underline"
              onClick={() => {
                if (likes === 1) {
                  setLikes(0);
                  setLikesColor("");
                } else {
                  setLikes(1);
                  setLikesColor("red");
                }
              }}
            >
              Likes
            </span>
          </div>
        </div>
        {/* <button
        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={() => onDelete(tweet)}
      >
        <FaTrash className="text-white mr-1" />
        Delete
      </button> */}
      </div>
    </div>
  );
}
