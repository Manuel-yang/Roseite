<template>
  <div 
    v-loading.fullscreen.lock="loading" 
    element-loading-text="Loading your nfts..."  
  >
    <tweet-form @added="addTweet"></tweet-form>
    <tweet-list v-model:tweets="tweets" :loading="loading" :has-more="hasNextPage" @more="getNextPage"></tweet-list>
    <NftBlock :metadataList="metadataList"></NftBlock>
  </div>
</template>

<script>
// @ is an alias to /src
import { providerStore } from '@/store/providerStore'
import { useWallet } from 'solana-wallets-vue'
import  NftBlock  from '@/components/NftBlock.vue'
import { toRaw, computed, watch, ref } from 'vue'

export default {
  name: 'homeView',
  components: {
    NftBlock,
  },
  data() {
    return {
      nftList: [],
      metadataList: [],
      loading: false
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
      this.loading = true
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
      this.loading = false
    })
  },
}
</script>

<style>
body {
  margin: 0;
}
.example-showcase .el-loading-mask {
  z-index: 9;
}
</style>