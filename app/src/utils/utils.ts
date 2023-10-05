import * as anchor from "@project-serum/anchor";
import { NftSocialMedia } from "../../../target/types/nft_social_media"
import  ProgramIDL  from "../../../target/idl/nft_social_media.json"
import { Program } from '@project-serum/anchor';
// 创建一个provider所在链的program实例
export function createProgram(
    provider: anchor.AnchorProvider,
  ) : anchor.Program<NftSocialMedia> {
    const idl = JSON.parse(JSON.stringify(ProgramIDL))
    const programId = ProgramIDL.metadata.address;
    const program = new Program(
      idl,
      programId,
      provider
    ) as Program<NftSocialMedia>
    return program
  }