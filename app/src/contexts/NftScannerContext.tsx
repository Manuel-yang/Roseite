import { getParsedNftAccountsByOwner,isValidSolanaAddress, createConnectionConfig,} from "@nfteyez/sol-rayz";
import { ReactNode, createContext, useEffect, useState } from "react";
import useWorkspace from "../hooks/useWorkspace";
import { MetadataKey } from "@nfteyez/sol-rayz/dist/config/metaplex";

export type nftInfo = {
	mint: string;
	updateAuthority: string;
	data: {
			creators: any[];
			name: string;
			metadata?: any;
			symbol: string;
			uri: string;
			sellerFeeBasisPoints: number;
	};
	key: MetadataKey;
	primarySaleHappened: boolean;
	isMutable: boolean;
	editionNonce: number;
	masterEdition?: string;
	edition?: string;
}

interface NftsContextState{
    nftsList: nftInfo[],
}

const NftScannerContext = createContext<NftsContextState>(null!);

export function NftScannerProvider({ children }: { children: ReactNode }) {
	const workspace = useWorkspace();
	const [nftsList, setNftsList] = useState<nftInfo[]>([]);

	useEffect(() => {
			if (workspace) {
				getParsedNftAccountsByOwner({
						publicAddress: workspace.wallet.publicKey.toBase58(),
						connection: workspace.connection
				})
					.then((nfts) => {
						nfts.map((nft) => {
							if(nft.data.symbol == "NSM") {
								getNftMetadata(nft).then((metadata) => {
									let tempNft = nft as nftInfo
									tempNft.data.metadata = metadata
									setNftsList(prevNfts => [...prevNfts, tempNft])
								})
							} 
						})
					})
			}
	},[workspace]);

	const getNftMetadata = async (nft: nftInfo) => {
		const response = await fetch(nft.data.uri)
		const nftMetadata = await response.json()
		return nftMetadata
	}

	return (
			<NftScannerContext.Provider value={{ nftsList }}>
					{children}
			</NftScannerContext.Provider>
	);
}

export default NftScannerContext;