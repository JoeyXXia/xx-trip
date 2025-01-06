<template>
  <div class="order-item">
    <order-item-title :item-data="getTitileData"></order-item-title>
    <order-item-info></order-item-info>
    <order-item-btn></order-item-btn>
  </div>
</template>

<script setup>
import OrderItemTitle from "../order-item-title/order-item-title.vue"
import OrderItemInfo from "../order-item-info/order-item-info.vue"
import OrderItemBtn from "../order-item-btn/order-item-btn.vue"
import { computed } from "vue"

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
})

const getTitileData = computed(() => {
  let data = props.itemData
  return {
    unitName: data.unitName,
    orderStatusDesc: data.orderStatusDesc,
    cancelReasonDesc: data.cancelReasonDesc,
    orderStatus: data.orderStatus,
    orderStatusDescColor: data.orderStatusDescColor,
  }
})

const getInfoData = computed(() => {
  let data = props.itemData
  return {
    checkInDate: data.checkInDate,
    checkOutDate: data.checkOutDate,
    checkInLatestTime: data.checkInLatestTime,
    checkOutLatestTime: data.checkOutLatestTime,
    prepayAmount: data.prepayAmount,
    unitPicture: data.unitPicture,
  }
})

const getBtnData = computed(() => {
  let data = props.itemData
  return {
    countdown: data.countdown,
    orderStatusDesc: data.orderStatusDesc,
    orderStatus: data.orderStatus,
  }
})
</script>

<style lang="less" scoped>
.order-item {
  padding: 0 20px;
  margin-top: 10px;
  background-color: white;
}
</style>
