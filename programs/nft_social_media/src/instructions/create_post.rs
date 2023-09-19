use anchor_lang::prelude::*;

use crate::state::{NftConfigPda, PostPda};

pub fn create_post(ctx: Context<CreatePost>, content: String) -> Result<()> {
    let post_pda = &mut ctx.accounts.post_pda;
    **post_pda = PostPda::init(
        ctx.accounts.nft_config_pda.nft_mint.key(), 
        content, 
        0, 
        0);
    let _ = ctx.accounts.nft_config_pda.increase_posts_num();
    Ok(())
}

#[derive(Accounts)]
pub struct CreatePost<'info> {
    #[account(mut)]
    payer: Signer<'info>,

    #[account(mut)]
    nft_config_pda: Account<'info, NftConfigPda>,

    #[account(
        init_if_needed,
        payer = payer,
        space = 4000,
        seeds = [b"post_pda",nft_config_pda.nft_mint.as_ref(), &nft_config_pda.posts_num.to_le_bytes()],
        bump
    )]
    pub post_pda: Account<'info, PostPda>,

    pub system_program: Program<'info, System>,
}