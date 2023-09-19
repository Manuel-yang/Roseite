import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftSocialMedia } from "../target/types/nft_social_media";
import { Keypair, PublicKey } from "@solana/web3.js";
import { getAssociatedAddress, getAuthorityPda, getCandyMachineAuthorityPda, getCollectionDelegateRecordPda, getCounterPda, getMasterEditionPDA, getMetadataPDA, getNftConfigPda, getProgramAdminPda } from "../utils/pdas";
import bs58 from 'bs58';
import { findCandyGuardPda } from "@metaplex-foundation/mpl-candy-machine";
import { publicKey } from "@metaplex-foundation/umi";
import { CANDY_MACHINE, COLLECTION_ID, CANDY_GUARD_PROGRAM_ID, CANDY_MACHINE_PROGRAM_ID, TOKEN_METADATA_PROGRAM_ID, SPL_TOKEN_PROGRAM_ID, SPL_ATA_PROGRAM_ID } from "../utils/CONSTANTS";
require('dotenv').config()
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import { mplCandyMachine } from "@metaplex-foundation/mpl-candy-machine";
import * as solanaWeb3 from "@solana/web3.js";
const umi = createUmi("https://api.devnet.solana.com").use(mplCandyMachine());

describe("nft_social_media", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.NftSocialMedia as Program<NftSocialMedia>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
