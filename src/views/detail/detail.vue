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
            <detail-infos :top-infos="mainPart.topModule"/>
            <detail-facility name="facility" :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"/>
            <detail-landlord name="landlord" :landlord="mainPart.dynamicModule.landlordModule"/>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getDetailInfos } from "@/services"
import { ref, computed } from 'vue';

import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'

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