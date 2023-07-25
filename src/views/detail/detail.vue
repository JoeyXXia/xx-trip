<template>
  <div class="detail top-page">
    <tab-control
      :titles="['描述', '设施', '房东', '评论']"
      @tab-item-click="tabClick"
    />
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos :top-infos="mainPart.topModule" />
      <detail-facility
        name="facility"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord
        name="landlord"
        :landlord="mainPart.dynamicModule.landlordModule"
      />
      <detail-comment
        name="comment"
        :comment="mainPart.dynamicModule.commentModule"
      />
      <detail-notice
        name="notice"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map
        name="map"
        :position="mainPart.dynamicModule.positionModule"
      />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">永无止境</div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { getDetailInfos } from "@/services"
import { ref, computed } from "vue"

import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import TabControl from "@/components/tab-control/tab-control.vue"

const router = useRouter()
const route = useRoute()
const houseId = route.params.id

const onClickLeft = () => {
  router.back()
}

const detailInfos = ref({})
const mainPart = computed(() => detailInfos.value.mainPart)
// sending netowrk request
getDetailInfos(houseId).then((res) => {
  detailInfos.value = res.data
})

const tabClick = (index) => {
  console.log("children back", index)
}
</script>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }
  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
