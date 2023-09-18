use anchor_lang::prelude::*;
use instructions::*;
pub mod errors;
pub mod state;
pub mod instructions;
declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod nft_social_media {
    use super::*;

    pub fn mint(ctx: Context<MintNft>, user_address: String) -> Result<()> {
        instructions::mint(ctx, user_address)
    }
}

#[derive(Accounts)]
pub struct Initialize {}
