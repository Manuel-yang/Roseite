import React, { useEffect, useRef, useState } from "react";
import useTheme from "../hooks/useTheme";
import { FaTimes } from "react-icons/fa";
import useNftScanner from "../hooks/useNftScanner";
import { toLongCollapse } from "../utils";
import { UserTweet } from "../models";
import { sendComment } from "../pages/api/comments";
import useWorkspace from "../hooks/useWorkspace";
import { Button } from "flowbite-react";
import { AiOutlineLoading } from 'react-icons/ai';

interface ModalProps {
  isOpen: boolean;
  tweet: UserTweet;
  comments: any;
  setComments: (comment: any) => void;
  onClose: () => void;
}

const CommentModal: React.FC<ModalProps> = ({ tweet, isOpen, comments, setComments, onClose }) => {
  const [comment, setComment] = useState("");
  const [ isCommenting, setIsCommenting ] = useState(false)
  const { nftsList, selectedNftId } = useNftScanner();
  const { theme } = useTheme();
  const divRef = useRef<HTMLDivElement>(null);
  const workspace = useWorkspace();

  useEffect(() => {
    if (divRef.current) {
      const pElement = divRef.current.querySelector("p");
      if (pElement) {
        const pHeight = pElement.getBoundingClientRect().height;
        divRef.current.style.height = `${pHeight + 5}px`;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const cardContent = document.querySelector(".card-content");
    if (isOpen && cardContent) {
      cardContent.style.setProperty("z-index", "auto");
    } else {
      cardContent.style.setProperty("z-index", "1");
    }
  }, [isOpen]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsCommenting(true)
    let result = await sendComment(workspace, comment, tweet)
    if (result) {
      setIsCommenting(false)
    }
    // onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className={`bg-white w-5/12 p-6 rounded-xl shadow ${theme === "dark" ? "bg-black" : "border"}`}>
        <button onClick={onClose}>
          <FaTimes color={`${theme === "dark" ? "white" : "black"}`} />
        </button>

        <div className="flex items-center mb-4 mt-4">
          {selectedNftId !== undefined ? (
            <img className="w-10 h-11 rounded-full mr-4" src={nftsList[selectedNftId]?.data.metadata.image} />
          ) : (
            <img className="w-10 rounded-full" src={`https://avatars.dicebear.com/api/jdenticon/undefined.svg`} />
          )}
          {selectedNftId !== undefined && (
            <>
              <span className="font-medium text-gray-500 mr-4">{`${nftsList[selectedNftId]?.data.name}`} </span>
              <span className="text-gray-500 mr-3">{`@${toLongCollapse(tweet.nftAddress)}`}</span>
            </>
          )}
        </div>
        <div className="flex" ref={divRef}>
          <div className="bg-gray-500 w-0.5 ml-4"></div>
          <p className={`text-md mb-4 ml-10 ${theme === "dark" ? "text-white" : ""}`}>{tweet.content}</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            {selectedNftId !== undefined ? (
              <img className="w-10 h-11 rounded-full mr-4 mt-4" src={nftsList[selectedNftId]?.data.metadata.image} />
            ) : (
              <img className="w-10 rounded-full" src={`https://avatars.dicebear.com/api/jdenticon/undefined.svg`} />
            )}
            <textarea
              className="w-full h-32 p-2 rounded my-4 text-white"
              placeholder="Post Your Reply"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="submit"
                disabled={isCommenting}
                isProcessing={isCommenting}
                processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin" />}
                size="md"
              >
                {isCommenting ? (<p>Processing</p>) : (<p>Comment</p>)}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
