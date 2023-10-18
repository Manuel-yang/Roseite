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
import theme from 'flowbite-react/lib/esm/theme/default';
import { notifyLoading, notifyUpdate } from '../utils';
import JSConfetti from 'js-confetti';
import useTheme from '../hooks/useTheme';
  
  export default function UserTweetMenubar({nftMintAddress, postPdaAddress, postId} : {nftMintAddress: PublicKey, postPdaAddress: PublicKey, postId: BN}) {
    const jsConfetti = new JSConfetti();
    const { deleteTweet } = useTweets()
    const { theme } = useTheme();
    
    const deletePost = async () => {
      const toastId = notifyLoading("Transaction in progress. Please wait...", theme);
      const result = await deleteTweet(nftMintAddress, postPdaAddress, postId)
      notifyUpdate(toastId, result.message, result.success ? "success" : "error");
      jsConfetti.addConfetti({
        emojiSize: 20,
        confettiNumber: 120,
      });
    }
    return (
      <Menu menuButton={<MenuButton className="text-white text-lg">...</MenuButton>}>
        <MenuItem className="text-white" onClick={deletePost}>Delete</MenuItem>
      </Menu>
    );
  }
  