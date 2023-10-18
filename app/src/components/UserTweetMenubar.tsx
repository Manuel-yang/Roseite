import { PublicKey } from '@metaplex-foundation/js';
import {
    Menu,
    MenuItem,
    MenuButton,
    MenuHeader,
    MenuDivider
  } from '@szhsin/react-menu';
  import '@szhsin/react-menu/dist/index.css';
import useTweets from '../hooks/useTweets';
import { BN } from '@project-serum/anchor';
  
  export default function UserTweetMenubar({nftMintAddress, postPdaAddress, postId} : {nftMintAddress: PublicKey, postPdaAddress: PublicKey, postId: BN}) {
    const { deleteTweet } = useTweets()
    const deletePost = () => {
      deleteTweet(nftMintAddress, postPdaAddress, postId)
    }
    return (
      <Menu menuButton={<MenuButton className="text-white text-lg">...</MenuButton>}>
        <MenuItem className="text-white" onClick={deletePost}>Delete</MenuItem>
      </Menu>
    );
  }
  