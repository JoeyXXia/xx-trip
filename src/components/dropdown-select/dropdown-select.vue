<template>
  <van-dropdown-menu>
    <template v-for="(item, index) in itemData">
      <van-dropdown-item
        v-if="item.gType === 2"
        title="位置"
        :ref="dropdownItemRefs"
      >
        <div class="dropdown-bar-panel-content"></div>
      </van-dropdown-item>

      <van-dropdown-item
        v-if="item.gType === 4"
        v-model="value"
        :options="options"
      />

      <van-dropdown-item
        v-if="item.gType === 1"
        title="筛选"
        :ref="dropdownItemRefs"
      >
        <div class="dropdown-bar-panel-content"></div>
      </van-dropdown-item>
    </template>
  </van-dropdown-menu>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  itemData: {
    type: Array,
    default: () => [],
  },
})

// dropdown
const value = ref(0)
const options = [
  { text: "欢迎度排序", value: 0 },
  { text: "好评优先", value: 1 },
  { text: "点评数多->少", value: 2 },
  { text: "低价优先", value: 3 },
  { text: "高价优先", value: 4 },
]
</script>

<style lang="less" scoped></style>
