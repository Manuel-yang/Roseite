import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useWallet } from "@solana/wallet-adapter-react";
import RecentTweets from "../../components/RecentTweets";
import TweetForm from "../../components/TweetForm";
import useTweets from "../../hooks/useTweets";
import useWorkspace from "../../hooks/useWorkspace";
import Base from "../../templates/Base";
import useNftScanner from "../../hooks/useNftScanner";
import NftSelectModal from "../../components/NftSelectModal";
import useNftAccount from "../../hooks/useNftAccount";
import UserTweetCard from "../../components/UserTweetCard";

export default function Tweets() {
  const workspace = useWorkspace();
  const { connected } = useWallet();
  const { nftsList, nftLoading, selectedNftId, setSelectedNftId } = useNftScanner();
  const { postPdaAccountList } = useNftAccount();
  const { tweets, recentTweets, loading, hasMore, loadMore, prefetch, deleteTweet } = useTweets();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    // prefetch([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setOpenModal(connected);
  }, [connected]);

  return (
    <Base>
      <div className="flex w-full">
        <div className="mr-16 grow" style={{ position: "relative" }}>
          <div className="mb-8 flex space-x-6 whitespace-nowrap border-b border-skin-primary">
            <h2 className="-mb-px flex border-b-2 border-sky-500 pb-2.5 font-semibold leading-6 text-color-primary">
              Tweets
            </h2>
          </div>
          {nftsList && selectedNftId === undefined ? (
            <NftSelectModal
              isShow={openModal}
              loading={nftLoading}
              nfts={nftsList}
              close={handleModalClose}
              confirm={setSelectedNftId}
            />
          ) : null}
          <TweetForm />
          {workspace ? (
            <div className="space-y-4">
              {postPdaAccountList.map((tweet, index) => (
                <UserTweetCard
                  key={index}
                  tweet={tweet}
                  onDelete={() => {
                    console.log("delete");
                  }}
                />
              ))}
              {/* <TweetList
                tweets={tweets}
                loading={loading}
                hasMore={hasMore}
                loadMore={loadMore}
                deleteTweet={deleteTweet}
              /> */}
            </div>
          ) : null}
        </div>
        <div className="relative mb-8 w-72">
          <div className="duration-400 fixed h-full w-72 pb-44 transition-all">
            <h3 className="mb-4 pb-2.5 font-semibold leading-6 text-color-primary">Recent Activities</h3>
            {workspace ? <RecentTweets tweets={recentTweets} /> : null}
          </div>
        </div>
      </div>
    </Base>
  );
}
