use anchor_lang::prelude::*;
use instructions::*;
pub mod errors;
pub mod instructions;
// pub mod pdas;
pub mod state;

declare_id!("7Y8TMYmwvJEPQPUJ33uhH1Y44XPoKi93EQRgtZrtAcs9");

#[program]
pub mod nft_social_media {
    use super::*;

    pub fn mint(ctx: Context<MintNft>) -> Result<()> {
        instructions::mint(ctx)
    }

    pub fn create_program_pda(ctx: Context<CreateProgramPda>, admin: Pubkey) -> Result<()> {
        instructions::admin::create_program_pda(ctx, admin)
    }

    pub fn add_mint_time(ctx: Context<Increase>) -> Result<()> {
        instructions::increase(ctx)
    }

    pub fn decrease_mint_time(ctx: Context<Decrease>) -> Result<()> {
        instructions::decrease(ctx)
    }
}

#[derive(Accounts)]
pub struct Initialize {}
