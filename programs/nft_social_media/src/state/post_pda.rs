use crate::errors::ErrorCode;
use anchor_lang::prelude::*;
#[account]
pub struct PostPda {
    pub nft_address: Pubkey,

    pub content: String,

    pub review_num: u64,

    pub like_num: u64,

    pub time_stamp: i64,

    pub status: String,
    // post
    // delete
    // update
}

impl PostPda {
    pub fn init(nft_address: Pubkey, content: String, review_num: u64, like_num: u64, time_stamp: i64) -> Self {
        Self {
            nft_address,
            content,
            review_num,
            like_num,
            time_stamp,
            status: "post".to_string()
        }
    }

    pub fn update_post_pda_status(&mut self, status: String) -> Result<()> {
        self.status = status;
        Ok(())
    }

    pub fn increase_review_num(&mut self) -> Result<()> {
        self.review_num = self
            .review_num
            .checked_add(1)
            .ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }

    pub fn decrease_review_num(&mut self) -> Result<()> {
        self.review_num = self
            .review_num
            .checked_sub(1)
            .ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }

    pub fn increase_like_num(&mut self) -> Result<()> {
        self.like_num = self
            .like_num
            .checked_add(1)
            .ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }

    pub fn decrease_like_num(&mut self) -> Result<()> {
        self.like_num = self
            .like_num
            .checked_sub(1)
            .ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }
}
