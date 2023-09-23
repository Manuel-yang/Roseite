<template>
    <el-card shadow="hover" :body-style="{ padding: '0px', margin: '15px' }">
        <img
            :src="nft.data.metadata.image"
            class="image"
        />
        <div style="padding: 14px">
            <el-row>
              <span>{{ nft.data.name }}</span>
            </el-row>
            <el-row>
              <span>{{ nft.mint }}</span>
            </el-row>
            <!-- <div class="bottom">
                <el-button text class="button">Operating</el-button>
            </div> -->
        </div>
    </el-card>
</template>
  
<script>
    export default {
        name: "nftCard",
        props: {
            nft: Object
        }
    }
</script>
  <style>
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  height: 18rem;
  display: block;
}
</style>