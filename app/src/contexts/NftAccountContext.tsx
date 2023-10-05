import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import useWorkspace from "../hooks/useWorkspace";
import useNftScanner from "../hooks/useNftScanner";
import { nftInfo } from "./NftScannerContext";
import { getNftConfigPda } from "../utils/pdas";
import { PublicKey } from "@solana/web3.js";
import BN from "bn.js";

export type nftConfigPdaAccount = {
  bump: number,
  fansNum: BN,
  nftCurrentHolder: PublicKey,
  nftMint: PublicKey,
  postsNum: BN
}

interface NftAccountState {
  // selectedNftAccount: nftInfo,
}

const NftAccountContext = createContext<NftAccountState>(null!);
export function NftAccountProvidr({ children }: { children: ReactNode }) {
    const workspace = useWorkspace()
    const NftScanner = useNftScanner()
    const [selectedNft, setSelectedNft] = useState<nftInfo>(null!)
    const [nftConfigPdaAccount, setNftConfigPdaAccount] = useState<nftConfigPdaAccount>()
    
    useEffect(() => {
      if(NftScanner.selectedNftId && workspace) {
        const program = workspace.program
        setSelectedNft(NftScanner.nftsList[NftScanner.selectedNftId])
        if(selectedNft) {
          getNftConfigPda(new PublicKey(selectedNft.mint)).then((res) => {
            program.account.nftConfigPda.fetch(res[0].toBase58())
              .then((res) => {
                setNftConfigPdaAccount(res)
              })
          })
        }
      }
    },[selectedNft ,NftScanner])
    if(nftConfigPdaAccount) {
      console.log(nftConfigPdaAccount)
      // console.log((nftConfigPdaAccount.postsNum).toNumber())
    }

    return <NftAccountContext.Provider value="">{children}</NftAccountContext.Provider>
}