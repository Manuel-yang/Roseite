<template>
  <div 
    v-loading.fullscreen.lock="loading" 
    element-loading-text="Loading your nfts..."  
  >
    <tweet-form @added="addTweet"></tweet-form>
    <tweet-list v-model:tweets="tweets" :loading="loading" :has-more="hasNextPage" @more="getNextPage"></tweet-list>
{{ currentSelectedNft }}
    <el-drawer
        v-model="drawer"
        title="Choose your account"
        :direction="direction"
        :before-close="handleClose"
    >
        <div>
          <el-row>
            <el-col :span="12">
              <div  v-for="(nft, index) in nftList" :key="index">
                <NftCard @click="selectedNft(nft)" class="card-left" v-if="index % 2 === 0" :nft="nft"/>
              </div>
            </el-col>
            <el-col :span="12">
              <div  v-for="(nft, index) in nftList" :key="index">
                <NftCard @click="selectedNft(nft)" class="card-right" style="margin-top: 0px; margin-bottom: 10px;" v-if="index % 2 === 1" :nft="nft"/>
              </div>
            </el-col>
          </el-row>
        </div>
    </el-drawer>
  </div>
</template>

<script>
// @ is an alias to /src
import { providerStore } from '@/store/providerStore'
import { useWallet } from 'solana-wallets-vue'
import { toRaw, computed, watch, ref } from 'vue'
import NftCard from '@/components/NftCard.vue'

export default {
  name: 'homeView',
  components: {
    NftCard
  },
  data() {
    return {
      rawNftList: [],
      nftList: [],
      loading: false,
      drawer: false,
      currentSelectedNft: null,
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
      this.rawNftList = []
      this.nftList = []
    }
  })
    watch(connectedWallet, async (currentPublicKey) => {
      this.loading = true
      store.userAddress = currentPublicKey
      await store.scanNfts()
      this.rawNftList = toRaw(store.rawNftList)
      for (let i = 0; i < this.rawNftList.length; i++) {
        let metadata = await store.getMetadata(this.rawNftList[i].data.uri)
        if (metadata) {
          this.rawNftList[i].data.metadata = metadata
          this.nftList.push(toRaw(this.rawNftList[i]))
        }
      }
      console.log(this.nftList)
      this.loading = false
      this.drawer = true
    })
  },
  methods: {
    selectedNft: function(nftInfo) {
      const store = providerStore()
      store.selectedNftHandler(nftInfo)
      this.currentSelectedNft = store.currentSelectedNft
      this.drawer = false
    }
  }
}
</script>

<style>
.example-showcase .el-loading-mask {
  z-index: 9;
}

.card-left {
  margin-top: 0px; 
  margin-bottom: 10px;
  margin-right: 2.5px;
}

.card-right {
  margin-top: 0px; 
  margin-bottom: 10px;
  margin-left: 2.5px;
}
</style>