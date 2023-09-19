use anchor_lang::prelude::*;
use crate::errors::ErrorCode;
#[account]
pub struct PostPda {
    pub nft_address: Pubkey,

    pub content: String,
    
    pub review_num: u64,

    pub like_num: u64,

}

impl PostPda {
    pub fn init(nft_address: Pubkey, content: String, review_num: u64, like_num: u64) -> Self {
        Self {
            nft_address,
            content,
            review_num,
            like_num,
        }
    }

    pub fn increase_review_num(&mut self) -> Result<()>{
        let _ = self.review_num.checked_add(1).ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }

    pub fn decrease_review_num(&mut self) -> Result<()>{
        let _ = self.review_num.checked_sub(1).ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }

    pub fn increase_like_num(&mut self) -> Result<()>{
        let _ = self.like_num.checked_add(1).ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }

    pub fn decrease_like_num(&mut self) -> Result<()>{
        let _ = self.like_num.checked_sub(1).ok_or(ErrorCode::ProgramAddError)?;
        Ok(())
    }
}