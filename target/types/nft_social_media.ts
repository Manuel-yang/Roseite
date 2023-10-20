export type NftSocialMedia = {
  "version": "0.1.0",
  "name": "nft_social_media",
  "instructions": [
    {
      "name": "mint",
      "accounts": [
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftConfigPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyGuardProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyGuard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine account."
          ]
        },
        {
          "name": "candyMachineAuthorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine authority account.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer for the mint (SOL) fees."
          ]
        },
        {
          "name": "minterAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Mint account of the NFT. The account will be initialized if necessary.",
            "",
            "Must be a signer if:",
            "* the nft_mint account does not exist.",
            ""
          ]
        },
        {
          "name": "nftMintAuthority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Mint authority of the NFT before the authority gets transfer to the master edition account.",
            "",
            "If nft_mint account exists:",
            "* it must match the mint authority of nft_mint."
          ]
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the NFT. This account must be uninitialized.",
            ""
          ]
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Master edition account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Collection authority or metadata delegate record.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master edition account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Update authority of the collection NFT.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Associated Token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "recentSlothashes",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SlotHashes sysvar cluster data.",
            ""
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createProgramPda",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "addMintTime",
      "accounts": [
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decreaseMintTime",
      "accounts": [
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createPost",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftConfigPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "postPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "deletePost",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftConfigPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "postPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "postId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createPostReview",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "postPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "nftConfigPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "nftCurrentHolder",
            "type": "publicKey"
          },
          {
            "name": "fansNum",
            "type": "u64"
          },
          {
            "name": "postsNum",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "postPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "postId",
            "type": "u64"
          },
          {
            "name": "nftAddress",
            "type": "publicKey"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "reviewNum",
            "type": "u64"
          },
          {
            "name": "likeNum",
            "type": "u64"
          },
          {
            "name": "timeStamp",
            "type": "i64"
          },
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "programPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "programPdaBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reviewPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reviewId",
            "type": "u64"
          },
          {
            "name": "reviewedPostPdaAddress",
            "type": "publicKey"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "reviewNum",
            "type": "u64"
          },
          {
            "name": "likeNum",
            "type": "u64"
          },
          {
            "name": "timeStamp",
            "type": "i64"
          },
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ErrFeeShouldLowerOrEqualThan10000",
      "msg": "Fee should be <= 10000"
    },
    {
      "code": 6001,
      "name": "InsufficientFundsForTransaction",
      "msg": "Insufficient funs for transaction"
    },
    {
      "code": 6002,
      "name": "PriceIsTooLow",
      "msg": "The price is lower than the current bid"
    },
    {
      "code": 6003,
      "name": "ExceedMaxAuctionTime",
      "msg": "Exceed max auction time"
    },
    {
      "code": 6004,
      "name": "AuctionHasExpired",
      "msg": "Auction has expired"
    },
    {
      "code": 6005,
      "name": "AuctionSettlement",
      "msg": "Auction settlement"
    },
    {
      "code": 6006,
      "name": "NotFixedPriceOrder",
      "msg": "Not fixed price order"
    },
    {
      "code": 6007,
      "name": "IncorrectParameter",
      "msg": "Incorrect parameter"
    },
    {
      "code": 6008,
      "name": "NoOfferNow",
      "msg": "No offer now"
    },
    {
      "code": 6009,
      "name": "NotPartOfCollection",
      "msg": "Not part of collection"
    },
    {
      "code": 6010,
      "name": "NotInitialized",
      "msg": "AccountNotInitialized"
    },
    {
      "code": 6011,
      "name": "ExceedMaxBidderNum",
      "msg": "Exceed max bidder num"
    },
    {
      "code": 6012,
      "name": "StakeBumpError",
      "msg": "unable to get stake details bump"
    },
    {
      "code": 6013,
      "name": "TokenAccountEmpty",
      "msg": "the given token account has no token"
    },
    {
      "code": 6014,
      "name": "TokenNotNFT",
      "msg": "the given mint account doesn't belong to NFT"
    },
    {
      "code": 6015,
      "name": "StakingInactive",
      "msg": "the staking is not currently active"
    },
    {
      "code": 6016,
      "name": "NftBumpError",
      "msg": "unable to get nft record bump"
    },
    {
      "code": 6017,
      "name": "ProgramAddError",
      "msg": "unable to add the given values"
    },
    {
      "code": 6018,
      "name": "ProgramSubError",
      "msg": "unable to subtract the given values"
    },
    {
      "code": 6019,
      "name": "NotEnoughMintTime",
      "msg": "Mint time is not enough"
    },
    {
      "code": 6020,
      "name": "InvalidPDA",
      "msg": "PDA is not valid"
    },
    {
      "code": 6021,
      "name": "InvalidOriginalOwner",
      "msg": "original owner is not the staker"
    },
    {
      "code": 6022,
      "name": "NftIsLock",
      "msg": "current nft is locked"
    },
    {
      "code": 6023,
      "name": "InvalidAuthor",
      "msg": "you are not author"
    },
    {
      "code": 6024,
      "name": "InvalidBurnArray",
      "msg": "Invalid burn array in compound"
    },
    {
      "code": 6025,
      "name": "InvalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6026,
      "name": "InvalidSuperAdmin",
      "msg": "You are not super admin"
    }
  ]
};

export const IDL: NftSocialMedia = {
  "version": "0.1.0",
  "name": "nft_social_media",
  "instructions": [
    {
      "name": "mint",
      "accounts": [
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftConfigPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyGuardProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyMachineProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "candyGuard",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "candyMachine",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy machine account."
          ]
        },
        {
          "name": "candyMachineAuthorityPda",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Candy Machine authority account.",
            ""
          ]
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Payer for the mint (SOL) fees."
          ]
        },
        {
          "name": "minterAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftMint",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Mint account of the NFT. The account will be initialized if necessary.",
            "",
            "Must be a signer if:",
            "* the nft_mint account does not exist.",
            ""
          ]
        },
        {
          "name": "nftMintAuthority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Mint authority of the NFT before the authority gets transfer to the master edition account.",
            "",
            "If nft_mint account exists:",
            "* it must match the mint authority of nft_mint."
          ]
        },
        {
          "name": "nftMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the NFT. This account must be uninitialized.",
            ""
          ]
        },
        {
          "name": "nftMasterEdition",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Master edition account of the NFT. The account will be initialized if necessary.",
            ""
          ]
        },
        {
          "name": "tokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "collectionDelegateRecord",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Collection authority or metadata delegate record.",
            ""
          ]
        },
        {
          "name": "collectionMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Mint account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMetadata",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Metadata account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionMasterEdition",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Master edition account of the collection NFT.",
            ""
          ]
        },
        {
          "name": "collectionUpdateAuthority",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Update authority of the collection NFT.",
            ""
          ]
        },
        {
          "name": "tokenMetadataProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Token Metadata program.",
            ""
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program."
          ]
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Associated Token program."
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program."
          ]
        },
        {
          "name": "sysvarInstructions",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Instructions sysvar account.",
            ""
          ]
        },
        {
          "name": "recentSlothashes",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SlotHashes sysvar cluster data.",
            ""
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createProgramPda",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "admin",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "addMintTime",
      "accounts": [
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "decreaseMintTime",
      "accounts": [
        {
          "name": "programAdminPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "counterAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "createPost",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftConfigPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "postPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    },
    {
      "name": "deletePost",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "nftConfigPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "postPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "postId",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createPostReview",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "postPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "reviewPda",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "nftMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "nftToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "content",
          "type": "string"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "counter",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "count",
            "type": "u64"
          },
          {
            "name": "authority",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "nftConfigPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "nftMint",
            "type": "publicKey"
          },
          {
            "name": "nftCurrentHolder",
            "type": "publicKey"
          },
          {
            "name": "fansNum",
            "type": "u64"
          },
          {
            "name": "postsNum",
            "type": "u64"
          },
          {
            "name": "bump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "postPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "postId",
            "type": "u64"
          },
          {
            "name": "nftAddress",
            "type": "publicKey"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "reviewNum",
            "type": "u64"
          },
          {
            "name": "likeNum",
            "type": "u64"
          },
          {
            "name": "timeStamp",
            "type": "i64"
          },
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "programPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "publicKey"
          },
          {
            "name": "programPdaBump",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "reviewPda",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "reviewId",
            "type": "u64"
          },
          {
            "name": "reviewedPostPdaAddress",
            "type": "publicKey"
          },
          {
            "name": "content",
            "type": "string"
          },
          {
            "name": "reviewNum",
            "type": "u64"
          },
          {
            "name": "likeNum",
            "type": "u64"
          },
          {
            "name": "timeStamp",
            "type": "i64"
          },
          {
            "name": "status",
            "type": "u8"
          }
        ]
      }
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "ErrFeeShouldLowerOrEqualThan10000",
      "msg": "Fee should be <= 10000"
    },
    {
      "code": 6001,
      "name": "InsufficientFundsForTransaction",
      "msg": "Insufficient funs for transaction"
    },
    {
      "code": 6002,
      "name": "PriceIsTooLow",
      "msg": "The price is lower than the current bid"
    },
    {
      "code": 6003,
      "name": "ExceedMaxAuctionTime",
      "msg": "Exceed max auction time"
    },
    {
      "code": 6004,
      "name": "AuctionHasExpired",
      "msg": "Auction has expired"
    },
    {
      "code": 6005,
      "name": "AuctionSettlement",
      "msg": "Auction settlement"
    },
    {
      "code": 6006,
      "name": "NotFixedPriceOrder",
      "msg": "Not fixed price order"
    },
    {
      "code": 6007,
      "name": "IncorrectParameter",
      "msg": "Incorrect parameter"
    },
    {
      "code": 6008,
      "name": "NoOfferNow",
      "msg": "No offer now"
    },
    {
      "code": 6009,
      "name": "NotPartOfCollection",
      "msg": "Not part of collection"
    },
    {
      "code": 6010,
      "name": "NotInitialized",
      "msg": "AccountNotInitialized"
    },
    {
      "code": 6011,
      "name": "ExceedMaxBidderNum",
      "msg": "Exceed max bidder num"
    },
    {
      "code": 6012,
      "name": "StakeBumpError",
      "msg": "unable to get stake details bump"
    },
    {
      "code": 6013,
      "name": "TokenAccountEmpty",
      "msg": "the given token account has no token"
    },
    {
      "code": 6014,
      "name": "TokenNotNFT",
      "msg": "the given mint account doesn't belong to NFT"
    },
    {
      "code": 6015,
      "name": "StakingInactive",
      "msg": "the staking is not currently active"
    },
    {
      "code": 6016,
      "name": "NftBumpError",
      "msg": "unable to get nft record bump"
    },
    {
      "code": 6017,
      "name": "ProgramAddError",
      "msg": "unable to add the given values"
    },
    {
      "code": 6018,
      "name": "ProgramSubError",
      "msg": "unable to subtract the given values"
    },
    {
      "code": 6019,
      "name": "NotEnoughMintTime",
      "msg": "Mint time is not enough"
    },
    {
      "code": 6020,
      "name": "InvalidPDA",
      "msg": "PDA is not valid"
    },
    {
      "code": 6021,
      "name": "InvalidOriginalOwner",
      "msg": "original owner is not the staker"
    },
    {
      "code": 6022,
      "name": "NftIsLock",
      "msg": "current nft is locked"
    },
    {
      "code": 6023,
      "name": "InvalidAuthor",
      "msg": "you are not author"
    },
    {
      "code": 6024,
      "name": "InvalidBurnArray",
      "msg": "Invalid burn array in compound"
    },
    {
      "code": 6025,
      "name": "InvalidInput",
      "msg": "Invalid input"
    },
    {
      "code": 6026,
      "name": "InvalidSuperAdmin",
      "msg": "You are not super admin"
    }
  ]
};
