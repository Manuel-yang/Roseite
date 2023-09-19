import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftSocialMedia } from "../target/types/nft_social_media";
import { Keypair, PublicKey } from "@solana/web3.js";
import { getAssociatedAddress, getAuthorityPda, getCandyMachineAuthorityPda, getCollectionDelegateRecordPda, getCounterPda, getMasterEditionPDA, getMetadataPDA, getNftConfigPda, getPostPda, getProgramAdminPda } from "../utils/pdas";
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
  const privateKey = process.env.SECRET_KEY
  const decodedKey = bs58.decode(privateKey);
  const adminWallet = Keypair.fromSecretKey(decodedKey);

  const mintKeypair: anchor.web3.Keypair = anchor.web3.Keypair.generate();
  // it("create program pda", async () => {
  //   const programPda = await getProgramAdminPda()
  //   console.log(programPda)
  //   try {
  //     const tx = await program.methods.createProgramPda(adminWallet.publicKey)
  //     .accounts({
  //       payer: adminWallet.publicKey,
  //       programAdminPda: programPda,
  //       systemProgram: anchor.web3.SystemProgram.programId
  //     })
  //     .signers([adminWallet])
  //     .rpc()
  //     console.log(tx)
  //   }catch(e: any) {
  //     console.log(e)
  //   }
  // })

  // it("increase", async () => {
  //   const counterAccount = await getCounterPda(program.programId, adminWallet.publicKey)
  //   const programPda = await getProgramAdminPda()
  //   try {
  //     const tx = await program.methods.addMintTime()
  //     .accounts({
  //       programAdminPda: programPda,
  //       counterAccount: counterAccount[0],
  //       payer: adminWallet.publicKey,
  //       user: adminWallet.publicKey,
  //       systemProgram: anchor.web3.SystemProgram.programId
  //     })
  //     .signers([adminWallet])
  //     .rpc()
  //     console.log(tx)
  //   }catch(e: any) {
  //     console.log(e)
  //   }
  // })

  // it("mint test", async () => {
  //   const candyGuardAddress = findCandyGuardPda(umi, { base: publicKey(CANDY_MACHINE) });
  //   const nftMetadata = await getMetadataPDA(mintKeypair.publicKey)
  //   const nftMasterEdition = await getMasterEditionPDA(mintKeypair.publicKey)
  //   const [authorityPda, bump] = await getAuthorityPda(program.programId);
  //   const tokenAddress = await getAssociatedAddress(mintKeypair.publicKey, adminWallet.publicKey)
  //   const candyMachineAuthorityPda = await getCandyMachineAuthorityPda(CANDY_MACHINE)
  //   const collectionMetadata = await getMetadataPDA(COLLECTION_ID)
  //   const collectionMasterEdition = await getMasterEditionPDA(COLLECTION_ID)
  //   const counterAccount = await getCounterPda(program.programId, adminWallet.publicKey)
  //   const programPda = await getProgramAdminPda()
  //   const nftConfigPda = await getNftConfigPda(mintKeypair.publicKey)
  //   const collectionDelegateRecord = await getCollectionDelegateRecordPda(candyMachineAuthorityPda[0])
  //   const instruction = solanaWeb3.ComputeBudgetProgram.setComputeUnitLimit({ // 设置计算单元
  //     units: 500_000,
  //   });

  //   try {
  //     const tx = await program.methods.mint()
  //     .accounts({
  //       programAdminPda: programPda,
  //       nftConfigPda: nftConfigPda[0],
  //       counterAccount:counterAccount[0],
  //       candyGuardProgram: CANDY_GUARD_PROGRAM_ID,
  //       candyGuard: candyGuardAddress[0],
  //       candyMachineProgram: CANDY_MACHINE_PROGRAM_ID,
  //       candyMachine: CANDY_MACHINE,
  //       candyMachineAuthorityPda: candyMachineAuthorityPda[0],
  //       payer: adminWallet.publicKey,
  //       minterAuthority: mintKeypair.publicKey,
  //       nftMint: mintKeypair.publicKey,
  //       nftMintAuthority: adminWallet.publicKey,
  //       nftMetadata: nftMetadata[0],
  //       nftMasterEdition: nftMasterEdition[0],
  //       tokenAccount: tokenAddress,
  //       collectionDelegateRecord: collectionDelegateRecord,
  //       collectionMint: COLLECTION_ID,
  //       collectionMetadata: collectionMetadata[0],
  //       collectionMasterEdition: collectionMasterEdition[0],
  //       collectionUpdateAuthority: adminWallet.publicKey,
  //       tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
  //       tokenProgram: SPL_TOKEN_PROGRAM_ID,
  //       associatedTokenProgram: SPL_ATA_PROGRAM_ID,
  //       recentSlothashes: anchor.web3.SYSVAR_SLOT_HASHES_PUBKEY,
  //       sysvarInstructions: anchor.web3.SYSVAR_INSTRUCTIONS_PUBKEY,
  //       rent: anchor.web3.SYSVAR_RENT_PUBKEY
  //     })
  //     .signers([adminWallet, mintKeypair])
  //     .preInstructions([instruction])
  //     .rpc()
  //     console.log(tx)
  //     console.log(mintKeypair.publicKey)
  //   }catch(e: any) {
  //     console.log(e)
  //   }

  // });

  it("create a post", async () => {
    let mintKeypair = new PublicKey("CaxzuutaKQmdN3CBfhwWY4td6cSRkp3gLjchhTNUF2cY")
    const nftConfigPda = await getNftConfigPda(mintKeypair)
    const postNum = await (await program.account.nftConfigPda.fetch(nftConfigPda[0])).postsNum
    const postPda = await getPostPda(mintKeypair, postNum)
    try {
      let tx = await program.methods.createPost("So, what is this for? Put it on your website as placeholder text. Print it out as a speech for your next affirmation circle and see if anyone can guess a computer wrote it. Use it to write the hottest new bestseller in the self-help section, or generate marketing copy for a new line of cheesecloth tunics or zero-point energy wands!So, what is this for? Put it on your website as placeholder text. Print it out as a speech for your next affirmation circle and see if anyone can guess a computer wrote it. Use it to write the hottest new bestseller in the self-help section, or generate marketing copy for a new line of cheesecloth tunics or zero-point energy wands!  or generate marketing copy for a new line of cheesecloth tunics or zero-point energy wands!")
      .accounts({
        payer: adminWallet.publicKey,
        nftConfigPda: nftConfigPda[0],
        postPda: postPda[0],
      })
      .signers([adminWallet])
      .rpc()
      const res = await (await program.account.postPda.fetch(postPda[0]))
      console.log(res)
    }catch(error: any) {
      console.log(error)
    }

    let res = await program.account.nftConfigPda.fetch(nftConfigPda[0])
    console.log(res)
  })
});