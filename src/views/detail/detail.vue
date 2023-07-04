<template>
    <div class="detail top-page">
        <van-nav-bar
        title="房屋详情"
        left-text="旅途"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="main" v-if="mainPart">
            <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics"/>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from "@/services"
import { ref, computed } from 'vue';

import DetailSwipe from "./cpns/detail-swipe.vue"

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

const onClickLeft = () => {
    router.back()
}

const detailInfos = ref({})
const mainPart = computed( () => detailInfos.value.mainPart)
// sending netowrk request 
getDetailInfos(houseId).then( res => {
    detailInfos.value = res.data
})
</script>

<style lang="less" scoped>

</style>