use anchor_lang::prelude::*;

#[account]
pub struct ProgramPda {
    // candy machine deployer
    pub super_admin: Pubkey,
    // control add/minus mint/compound times
    pub admin: Pubkey,
    pub program_pda_bump: u8,
}

impl ProgramPda {
    pub fn init(super_admin: Pubkey, admin: Pubkey, program_pda_bump: u8) -> Self {
        Self {
            super_admin: super_admin,
            admin: admin,
            program_pda_bump: program_pda_bump,
        }
    }

    pub fn update_admin(&mut self, admin: Pubkey) -> Result<()> {
        self.admin = admin;
        Ok(())
    }

    pub fn update_super_admin(&mut self, super_admin: Pubkey) -> Result<()> {
        self.super_admin = super_admin;
        Ok(())
    }
}
