import { useEffect, useState } from "react";
import { Button, Modal } from "flowbite-react";
import { useWallet } from "@solana/wallet-adapter-react";
import RecentTweets from "../../components/RecentTweets";
import TweetForm from "../../components/TweetForm";
import TweetList from "../../components/TweetList";
import useTweets from "../../hooks/useTweets";
import useWorkspace from "../../hooks/useWorkspace";
import Base from "../../templates/Base";
import useNftScanner from "../../hooks/useNftScanner";
import Loader from "../../components/Loader";

export default function Tweets() {
  const workspace = useWorkspace();
  const { connected } = useWallet();
  const { nftsList, nftLoading, selectedNftId, setSelectedNftId } = useNftScanner();
  const { tweets, recentTweets, loading, hasMore, loadMore, prefetch, deleteTweet } = useTweets();
  const [openModal, setOpenModal] = useState<boolean>();
  const [selectingId, setSelectingId] = useState<number>();

  useEffect(() => {
    prefetch([]);
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
          {nftsList ? (
            <>
              <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Select your NFT Account</Modal.Header>
                <Modal.Body>
                  <div className="max-h-96 overflow-y-auto">
                    <div className="grid grid-cols-4 gap-2">
                      {nftLoading ? (
                        <Loader />
                      ) : (
                        nftsList.map((nft, index) => (
                          <div
                            key={index}
                            className={`flex flex-col items-center mb-4 ${selectedNftId === index ? "selected" : ""}`}
                          >
                            <img
                              className={`w-32 h-32 rounded-lg mb-1 ${
                                selectingId === index ? "border-4 border-blue-500" : ""
                              }`}
                              src={nft.data.metadata.properties.files[0].uri}
                              alt={nft.data.name}
                              onClick={() => {
                                setSelectingId(index);
                              }}
                            />
                            <p className="text-sm">{nft.data.name}</p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  {selectingId !== undefined ? (
                    <div className="mb-2 w-full">Select NFT: {nftsList[selectingId]?.data.name}</div>
                  ) : null}
                  <div className="w-1/2 flex space-x-2">
                    <Button
                      onClick={() => {
                        setSelectedNftId(selectingId);
                        setOpenModal(false);
                      }}
                    >
                      Confirm
                    </Button>
                  </div>
                </Modal.Footer>
              </Modal>
            </>
          ) : null}
          <TweetForm />
          {workspace ? (
            <TweetList
              tweets={tweets}
              loading={loading}
              hasMore={hasMore}
              loadMore={loadMore}
              deleteTweet={deleteTweet}
            />
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
