import { defineStore } from 'pinia'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { initWallet } from 'solana-wallets-vue'
import { Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getParsedNftAccountsByOwner,isValidSolanaAddress, createConnectionConfig,} from "@nfteyez/sol-rayz";
import { toRaw } from 'vue';
export const providerStore = defineStore('providerStore', {
  state: () => ({
    userAddress: null, // connected wallet address
    rawNftList: [], // nft list with specific collection
    currentSelectedNft: null,
  }),
  actions: {
    initWallet() {
        const wallets = [
            new PhantomWalletAdapter(),
        ]
        initWallet({ wallets, autoConnect: false })
    },
    async scanNfts() {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                const connect =    createConnectionConfig(clusterApiUrl("devnet"));
                let ownerToken = this.userAddress
                const result = isValidSolanaAddress(ownerToken);
                console.log("result", result);
                const nfts = await getParsedNftAccountsByOwner({
                    publicAddress: ownerToken,
                    connection: connect,
                })
                this.rawNftList = nfts.filter((nft) => {
                    return nft.data.symbol == "NSM"
                })
             }
            }
    },
    async getMetadata(uri) {
        let res = 
            fetch(uri)
            .then((response) => response.json())
            .then((json) => {
                return json
            })
            .catch((error) => {console.error(error)})
        return res
    },

    async selectedNftHandler(nftInfo) {
        this.currentSelectedNft = toRaw(nftInfo)
    }
  }
})