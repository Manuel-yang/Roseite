import * as fs from 'fs';
import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
  
} from '@solana/web3.js';

import {
  CreateCandyMachineInput,
  keypairIdentity,
  Metaplex,
  NftWithToken,
  sol,
  toBigNumber,
  AuctionHouse
} from '@metaplex-foundation/js';
import { create32BitsHash } from './hash';
import bs58 from 'bs58';

// 网络类型
const devNet =
  'https://solana-devnet.g.alchemy.com/v2/moMW9KWONENiemPAjl96Lcns4NHU1jif';
const mainNew = 'https://api.mainnet-beta.solana.com';

const mainNet =
  'https://solana-mainnet.g.alchemy.com/v2/BN2dE3kFa5zPU895iUA_o8YjlpsaUyay';

/**
 * 导入私钥
 */
// const decodedKey = new Uint8Array(
//   JSON.parse(
//     fs
//       .readFileSync(
//         __dirname +
//           '/keypairs/eqnAdmin.json',
//       )
//       .toString(),
//   ),
// );
// console.log(decodedKey)
const privateKey = "5L9f87oHDmpGtBSBxoyrBYT6ok1P9axGFqr3UAFVuziktphS28JeudXQVTrY3tFLbcNbh3TvkjiUR3bKKMUN8hjd";//adm 私钥
const decodedKey1 = bs58.decode(privateKey);
// console.log(decodedKey1)
const test = new Uint8Array([216,148,227,47,92,204,51,35,65,74,58,252,192,30,151,73,214,129,151,61,195,52,169,203,167,92,221,226,15,252,220,240,185,232,204,91,124,54,50,174,246,86,61,132,233,126,169,52,99,146,205,221,116,115,21,83,216,126,2,147,42,105,160,144])
const secretKey = Keypair.fromSecretKey(decodedKey1);

const connetionMainNet = new Connection(mainNew, 'finalized');

const connection2 = new Connection(devNet, 'processed');

const connectionLocalNet = "http://127.0.0.1:8899"

const mx = Metaplex.make(connection2).use(keypairIdentity(secretKey));

(async () => {
    /**
     * 创建collection , 创建 candyMachine
     */
    const collectionNft = await createCollection();
    const { candyMachineId, collectionAddress } = await createCandyMachine(
      collectionNft,
    );
    console.log(
      `CandyMachine Information:${candyMachineId}, ${collectionAddress}`,
    );
    // const auctionHouse = await creatAH();
    // console.log(
    //   `CandyMachine Information:${candyMachineId}, ${collectionAddress},AH:${auctionHouse}`,
    // );

  })();

// CandyMachineData

async function getCandyMachineData(
  collectionAddress: PublicKey,
): Promise<CreateCandyMachineInput> {
  return {
    symbol: 'NSM',
    itemsAvailable: toBigNumber(2000000),
    authority: secretKey,
    sellerFeeBasisPoints: 500, // 创作者收益
    maxEditionSupply: toBigNumber(0),
    isMutable: true,
    creators: [{ address: secretKey.publicKey, share: 100 }],
    itemSettings: {
      type: 'hidden',
      hash: create32BitsHash('NSM'),
      name: 'NSM #$ID+1$',
      uri: 'https://shdw-drive.genesysgo.net/98CKHH7X9Y1vAhZ8a5o2NKFt7zWWtic5tSGLC5VE9Rhm/$ID+1$.json',//待替换 https:seedsnft.s3.ap-northeast-1.amazonaws.com/seedsnft/metadata/$ID+1$.json
    },
    collection: {
      address: collectionAddress,
      updateAuthority: secretKey,
    },
    groups: [
      {
        // only mint by seed platform
        label: 'NSM',
        guards: {
          addressGate: {
            address: new PublicKey(
              '5hQuukq75QtannUJsHxMTvBbmc2ivCayqQHzPD4fp9Ti', // 通过当前账号可以mint不要手续费，待替换
            ),
          },
        },
      },
    ],
  };
}

/**
 * 创建Collection
 * @returns
 */
async function createCollection() {
  const { nft: collectNft } = await mx.nfts().create(
    {
      name: 'NSM',
      symbol: 'NSM',
      uri: 'https://shdw-drive.genesysgo.net/98CKHH7X9Y1vAhZ8a5o2NKFt7zWWtic5tSGLC5VE9Rhm/image.jpg',
      sellerFeeBasisPoints: 500,
      isCollection: true,
      updateAuthority: secretKey,
    },
    {
      payer: secretKey,
      commitment: 'finalized',
    },
  );
  console.log(
    'collectionUpdateAuthority地址',
    collectNft.updateAuthorityAddress.toBase58(),
  );
  console.log(`collection地址：${collectNft.address.toBase58()}`);

  return collectNft;
}

/**
 * 创建candy machine
 * @param collectionNft
 */
async function createCandyMachine(collectionNft: NftWithToken) {
  const input = await getCandyMachineData(collectionNft.address);
  const { candyMachine } = await mx.candyMachines().create(input, {
    payer: secretKey,
    commitment: 'finalized',//选择主网还是测试网
  });
  console.log(`candyMachine: ${candyMachine.address.toBase58()}`);
  return {
    candyMachine: candyMachine,
    collection: collectionNft,
    collectionAddress: collectionNft.address.toBase58(),
    candyMachineId: candyMachine.address.toBase58(),
  };
}

async function creatAH(): Promise<AuctionHouse> {
  const auctionHouseSettings = {
    sellerFeeBasisPoints: 200, // 2%
    requiresSignOff: false, // must be false, otherwise list asset need signature
    canChangeSalePrice: true,
  };
    const ah = await mx.auctionHouse().create(auctionHouseSettings);
    console.log('ah详细数据：', JSON.stringify(ah.auctionHouse));
    return ah.auctionHouse;
}


