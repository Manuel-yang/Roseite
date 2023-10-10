# Introduction

**Roseite** is a fully Solana on-chain SocialFi platform. Importantly, we will use NFTs as a social account instead of a wallet account, achieving greater decentralization while enhancing the practical value of NFTs.

Additionally, due to the unique product model of Roseite, we propose a protocol resembling ERC-6551 to unlock more playstyles and increase the true use value of NFTs.

It's worth noting that the core of this project lies in the implementation of the ERC-6551-like protocol and the product model of account NFTification. Roseite is a bold and innovative attempt, and we hope to apply this model to GameFi or other NFTs in the future, subverting existing playstyles and developing unique ones based on the characteristics of Solana.

<u>This project made a breakthrough from 0 to 1 during the Solana hackathon and will need more time to realize our ideas</u>.



## Advantages

1. **Greater decentralization:** Owning the NFT account means possessing all associated properties, including posts and potential earnings.
2. **Improved incentivization mechanism:** Users can directly tip high-quality post PDAs, allowing NFT holders attached to those posts to claim the profits. This establishes a positive cycle of high-quality content and profits.
3. **Enhanced value of NFTs:** The value of NFTs will be determined by NFT holders who attract followers through engaging content and generate profitable posts, thus increasing traffic to their NFT accounts. Additionally, these NFTs can be listed for sale on mainstream NFT marketplaces like Magic Edgn.
4. **Superior protocol:** Utilizing the design of NFT accounts, a Solana-based protocol similar to ERC-6551 will enable the holding of multiple subsidiary NFTs under primary NFTs. Ownership changes in the parent NFT will reflect in the child NFTs, but child NFTs can also be transferred independently.
5. **Improved content filtration mechanism:** Leveraging Solana's unique modeling mechanism, we aim to promote high-quality content and minimize irrelevant posts by regulating post PDA rents, ensuring a healthy balance within Roseite.




# SocialFi



## Structure
```
├── app -- Roseite frontend
│   ├── public
│   └── src
├── images
├── migrations
├── programs
│   └── nft_social_media -- Solana program
├── target -- compiling file
│   ├── bpfel-unknown-unknown
│   ├── debug
│   ├── deploy
│   ├── idl
│   ├── release
│   └── types
├── tests
└── utils -- testing
```

## Main Features

### Dynamically add mint whitelist

Nfts in Roseite complies with the Metaplex nft standard, and is used with candy guard to dynamically add mint whitelist.

![image-20231010155818315](./images/image-20231010155818315.png)



### Post Pda

Roseite was born thanks to Solana's unique Pda model. Posts in Roseite will realize full data on-chain through pda. At the same time, when the ownership of Nft is transferred, new holders will have all post pda under their Nft to achieve the purpose of increasing the value of Nft.

![未命名文件](./images/post.png)



## Roadmap

- [ ] Because of the transparency of web3, user profiling can be better achieved.
- [ ] Using Solana's Lookup table feature, users can store up to 255 * 3MB = 756MB of content on the chain at most.
- [ ] According to the unique model of Solana, the extension of the ERC-6551-like protocol makes the gameplay more diverse.
- [ ] Applying this set of product models and protocols to the GameFi field is aimed at subverting the existing gameplay of GameFi and NFTs.



# Program

## Building

**note:Please make sure the environment contains anchor, solana-cli, rustc before running this project**

```
anchor build
```

After running the command, the target file will be generated in the root directory



## Deploying

```
anchor deploy
```

According to the Anchor.toml configuration file, deploy the contract to the chain through solana-cli



## Testing

```
anchor test
```

Testing



## Frontend

### Installing

```
cd app
npm install
```

Install dependencies



## Run

```
npm run dev
```

start frontend
