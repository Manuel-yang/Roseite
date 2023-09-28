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
							let res = nfts.filter((nft) => {
									return nft.data.symbol == "NSM"
							})
							setNftsList(res)
					})
			}
	},[workspace]);
	console.log(nftsList)

	return (
			<NftScannerContext.Provider value={{ nftsList }}>
					{children}
			</NftScannerContext.Provider>
	);
}

export default NftScannerContext;