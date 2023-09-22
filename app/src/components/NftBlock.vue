<template>
    <div v-for="metadata in metadataList" >
        {{ metadata }}
        <img :src=metadata.data.metadata.image />
    </div>
</template>

<script>
    export default {
        name: "nftBlock",
        props: {
            metadataList: Array
        }
    }
</script>