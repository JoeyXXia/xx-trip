import { ref } from 'vue';
<template>
    <div class="city">
        <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置"  
        shape="round"
        show-action
        @cancel="cancelClick"
        />

    <van-tabs v-model:active="tabActive" color="#ff9854">
        <van-tab title="国内·港澳台"></van-tab>
        <van-tab title="海外"></van-tab>
    </van-tabs>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

//search
const searchValue = ref("")
const router = useRouter()
const cancelClick =  () => {
    router.back()
}

//tan
const tabActive = ref()

</script>

<style lang="less" scoped>

</style>