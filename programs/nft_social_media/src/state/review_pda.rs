use crate::errors::ErrorCode;
use anchor_lang::prelude::*;
#[account]
pub struct ReviewPda {
    // pub post_pda_address: Pubkey,
    pub review_id: u64,

    pub reviewed_post_pda_address: Pubkey,

    pub content: String,

    pub review_num: u64,

    pub like_num: u64,

    pub time_stamp: i64,

    pub status: u8,
    // 0 post
    // 1 delete
    // 2 update
}

impl ReviewPda {
    pub fn init(review_id: u64, reviewed_post_pda_address: Pubkey, content: String, review_num: u64, like_num: u64, time_stamp: i64) -> Self {
        Self {
            review_id,
            reviewed_post_pda_address,
            content,
            review_num,
            like_num,
            time_stamp,
            status: 0
        }
    }

    pub fn update_post_pda_status(&mut self, status: u8) -> Result<()> {
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
