<template>
    <div class="detail top-page">
        <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
        />

    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const onClickLeft = () => {
    router.back()
}
</script>

<style lang="less" scoped>

</style>