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
  </div>
  <div class="content">
    <div>
      <template v-for="(item, index) in orderList" :key="item">
        {{ item }}
      </template>
    </div>
    <div>
      <img src="@/assets/img/order/icon-order.png" alt="" />
      <div class="title">近期暂无订单</div>
    </div>
  </div>
</template>

<script setup>
import { getOrderList } from "@/services"
import { ref } from "vue"

import NavBar from "@/components/nav-bar/nav-bar.vue"

const orderTitles = ["全部订单", "近期订单", "待支付"]
const orderTitleType = ["all", "recent", "pend"]

const orderList = ref([0])
const currentOrder = ref()

getOrderList().then((res) => {
  orderList.value = res.data.data.orders || []
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
  }
}
</style>
