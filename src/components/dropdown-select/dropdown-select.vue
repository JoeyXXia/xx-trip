<template>
  <van-dropdown-menu>
    <template v-for="(item, index) in itemData">
      <van-dropdown-item
        v-if="item.gType === 2"
        title="位置"
        :ref="dropdownItemRefs"
      >
        <div class="dropdown-bar-panel-content">
          <side-bar
            class="top"
            :menuData="item.subGroups"
            @item-click="handleSideSubItemClick"
          ></side-bar>
        </div>
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
        <div class="dropdown-bar-panel-content">
          <side-bar class="top" :menu-data="item.subGroups">
            <template #content="slotProps">
              <p class="list-content">正在开发中。。。。</p>
            </template>
          </side-bar>
        </div>
      </van-dropdown-item>
    </template>
  </van-dropdown-menu>
</template>

<script setup>
import { ref } from "vue"
import SideBar from "../side-bar/side-bar.vue"

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

<style lang="less" scoped>
@popupHeight: 500px;

:global(.van-dropdown-menu .van-popup .van-sider-item) {
  padding-left: 20px;
  padding-top: 14px;
  padding-bottom: 14px;
}

:global(.van-dropdown-menu .van-popup .van-sider-item::before) {
  border-radius: 50%;
  left: 8px;
}

:global(.van-dropdown-menu .van-sider-item__content) {
  overflow: hidden;
  max-height: 100%;
}

.dropdown-bar-panel-content {
  position: relative;
  height: @popupHeight;
  overflow: hidden;
  background-color: var(--van-sidebar-backgroud-color);
}

.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
</style>
