<template>
  <div class="order-item">
    <order-item-title></order-item-title>
    <order-item-info></order-item-info>
    <order-item-btn></order-item-btn>
  </div>
</template>

<script setup>
import OrderItemTitle from "../order-item-title/order-item-title.vue"
import OrderItemInfo from "../order-item-info/order-item-info.vue"
import OrderItemBtn from "../order-item-btn/order-item-btn.vue"

const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="less" scoped>
.order-item {
  padding: 0 20px;
  margin-top: 10px;
  background-color: white;
}
</style>
