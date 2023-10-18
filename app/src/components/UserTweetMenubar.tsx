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
  
  export default function UserTweetMenubar({nftMintAddress, postPdaAddress} : {nftMintAddress: PublicKey, postPdaAddress: PublicKey}) {
    const { deleteTweet } = useTweets()
    const deletePost = () => {
        deleteTweet(nftMintAddress, postPdaAddress)
    }
    return (
      <Menu menuButton={<MenuButton className="text-white text-lg">...</MenuButton>}>
        <MenuItem className="text-white" onClick={deletePost}>Delete</MenuItem>
      </Menu>
    );
  }
  