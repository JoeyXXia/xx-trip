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
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchValue = ref("")
const router = useRouter()
const cancelClick =  () => {
    router.back()
}

</script>

<style lang="less" scoped>

</style>