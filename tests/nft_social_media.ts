import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftSocialMedia } from "../target/types/nft_social_media";

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
