<template>
  <div class="search-list-item">
    <div class="swiper-wrapper">
      <img :src="houseData.defaultPicture" alt="swiper" class="banner" />

      <div class="bottom">
        <msg-tip :item-data="houseData.commentBriefForCD"></msg-tip>
      </div>
      <div class="side-bar">
        <tool-bar :item-data="getToolBarData"></tool-bar>
      </div>
    </div>
    <div class="content">
      <search-list-item-title
        :item-data="getTitleData"
      ></search-list-item-title>
      <search-list-item-info></search-list-item-info>
    </div>
  </div>
</template>

<script setup>
import SearchListItemTitle from "@/components/search-list-item-title/search-list-item-title.vue"
import SearchListItemInfo from "@/components/search-list-item-info/search-list-item-info.vue"
import MsgTip from "@/components/msg-tip/msg-tip.vue"
import ToolBar from "@/components/tool-bar/tool-bar.vue"
import { computed, ref, watch } from "vue"

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
})

const houseData = ref({})
watch(
  () => props.itemData,
  (newVal) => {
    houseData.value = newVal
  },
  { immediate: true }
)

const getTitleData = computed(() => {
  let data = houseData.value
  return {
    address: data.address,
    unit: data.unitSummeries[0]?.text,
    unitDesp: data.unitSummeries[1]?.text,
    unitName: data.unitName,
  }
})

const getInfoData = computed(() => {
  let data = houseData.value
  return {
    houseTags: data.houseTags,
    promoContent: data.promoContent,
    finalPrice: data.finalPrice,
    productPrice: data.productPrice,
    priceTipBadge: data.priceTipBadge,
  }
})

const getToolBarData = computed(() => {
  let data = houseData.value

  let favoriteCount = 0
  let totalCount = 0
  if (data.preloadHouse) {
    favoriteCount = data.preloadHouse.favoriteCount
    totalCount = data.preloadHouse.totalCount
  } else {
    totalCount = data.commentBriefForCD.totalCount
  }
  return {
    logoUrl: data.logoUrl,
    favoriteCount,
    totalCount,
  }
})
</script>

<style lang="less" scoped>
.search-list-item {
  margin: 10px 0px;
}

.swiper-wrapper {
  position: relative;

  .banner {
    width: 100%;
    border-radius: 6px;
    margin-bottom: 7px;
  }
  .bottom {
    position: absolute;
    bottom: 15px;
    left: 10px;
    right: 10px;
  }
  .side-bar {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
