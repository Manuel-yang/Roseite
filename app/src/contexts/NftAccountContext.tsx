import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import useWorkspace from "../hooks/useWorkspace";
import useNftScanner from "../hooks/useNftScanner";
import { nftInfo } from "./NftScannerContext";
import { getNftConfigPda } from "../utils/pdas";
import { PublicKey } from "@solana/web3.js";
import { createProgram } from "../utils/utils";

interface NftAccountState {
  // selectedNftAccount: nftInfo,
}

const NftAccountContext = createContext<NftAccountState>(null!);
export function NftAccountProvidr({ children }: { children: ReactNode }) {
    const workspace = useWorkspace()
    const NftScanner = useNftScanner()
    const [selectedNft, setSelectedNft] = useState<nftInfo>(null!)
    // const program = createProgram()
    useEffect(() => {
      if(NftScanner.selectedNftId) {
        setSelectedNft(NftScanner.nftsList[NftScanner.selectedNftId])
        if(selectedNft) {
          getNftConfigPda(new PublicKey(selectedNft.mint)).then((res) => {
            // console.log(res[0].toBase58())
            console.log(workspace)
          })
        }
      }
    })

    return <NftAccountContext.Provider value="">{children}</NftAccountContext.Provider>
}