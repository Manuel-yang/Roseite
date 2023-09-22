<template>
  <tweet-form @added="addTweet"></tweet-form>
  <tweet-list v-model:tweets="tweets" :loading="loading" :has-more="hasNextPage" @more="getNextPage"></tweet-list>
  <NftBlock :metadataList="metadataList"></NftBlock>
</template>

<script>
// @ is an alias to /src
import { providerStore } from '@/store/providerStore'
import { useWallet } from 'solana-wallets-vue'
import  NftBlock  from '@/components/NftBlock.vue'
import { toRaw, computed, watch } from 'vue'
export default {
  name: 'homeView',
  components: {
    NftBlock,
  },
  data() {
    return {
      nftList: [],
      metadataList: []
    }
  },
  /**
   * update after connecting the wallet
   */
  created() {
    const store = providerStore()
    const connectedWallet = computed(() => {
    const { publicKey } = useWallet()

    if (publicKey && publicKey.value) {
      return publicKey.value.toBase58()
    }
    else {
      this.nftList = []
      this.metadataList = []
    }
  })
    watch(connectedWallet, async (currentPublicKey) => {
      store.userAddress = currentPublicKey
      await store.scanNfts()
      this.nftList = toRaw(store.nftList)
      for (let i = 0; i < this.nftList.length; i++) {
        let metadata = await store.getMetadata(this.nftList[i].data.uri)
        if (metadata) {
          this.nftList[i].data.metadata = metadata
          this.metadataList.push(toRaw(this.nftList[i]))
        }
      }
    })
  },
}
</script>
