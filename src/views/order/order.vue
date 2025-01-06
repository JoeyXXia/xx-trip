<template>
  <div class="order">
    <van-sticky>
      <nav-bar title="订单列表"></nav-bar>
      <van-tabs
        v-model:active="currentOrder"
        title-active-color="#ff9754"
        :line-width="2"
      >
        <template v-for="(item, index) in orderTitles" :key="item">
          <van-tab :title="item" :name="index"></van-tab>
        </template>
      </van-tabs>
    </van-sticky>

    <div class="content">
      <div v-if="orderList.length">
        <template v-for="(item, index) in orderList" :key="item">
          <order-item :item-data="item"></order-item>
        </template>
      </div>
      <div v-else="!orderList.length" class="tips">
        <img src="@/assets/img/order/icon-order.png" alt="" />
        <div class="title">近期暂无订单</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getOrderList } from "@/services"
import { ref, watch } from "vue"

import NavBar from "@/components/nav-bar/nav-bar.vue"
import OrderItem from "./cpns/order-item/order-item.vue"

const orderTitles = ["全部订单", "近期订单", "待支付"]
const orderTitleType = ["all", "recent", "pend"]

const orderList = ref([0])
const currentOrder = ref()

getOrderList().then((res) => {
  orderList.value = res.data.data.orders || []
})

watch(currentOrder, (newVal, oldVal) => {
  if (newVal !== undefined) {
    getOrderList(orderTitleType[newVal]).then((res) => {
      orderList.value = res.data.data.orders || []
    })
  }
})
</script>

<style lang="less" scoped>
.order {
  height: 100vh;
  --van-tabs-line-height: 40px;
  padding-bottom: 55px;

  .content {
    height: calc(100% - 86px);
    overflow: scroll;

    .tips {
      text-align: center;
      margin-top: 80px;
      img {
        width: 80%;
      }

      .title {
        margin-top: 20px;
        color: #000;
        font-size: 18px;
      }
    }
  }
}
</style>
