<template>
  <div class="tab-select">
    <template v-for="(item, index) in hotFilters" :key="index">
      <van-dropdown-menu
        v-if="item.subFilterItems && item.subFilterItems.length"
      >
        <van-dropdown-item :title="item.label" :ref="drownItemRefs">
          <div class="drop-content">
            <tab-select-item
              class="d-item"
              borderColor="#979797"
              borderActiveColor="#ff9645"
              v-for="(subItem, indey) in item.subFilterItems"
              :active="subItem.isSelect"
              :title="subItem.label"
              @tag-click="handleSubTagClick(index, indey)"
            ></tab-select-item>
          </div>
          <view-house-btns
            class="bottom"
            @clear="handleClearClick(item.label)"
            @view-click="handleViewClick(item.label)"
          >
          </view-house-btns>
        </van-dropdown-item>
      </van-dropdown-menu>
    </template>
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import TabSelectItem from "./cpn/tab-select-item.vue"
import ViewHouseBtns from "../view-house-btns/view-house-btns.vue"

const props = defineProps({
  itemData: {
    type: Array,
    default: () => [],
  },
})

const drownItemRef = {}
const hotFilters = ref([])

const value1 = ref(0)
const option1 = [
  { text: "全部商品", value: 0 },
  { text: "新款商品", value: 1 },
  { text: "活动商品", value: 2 },
]

watch(
  () => props.itemData,
  (newValue, oldValue) => {
    hotFilters.value = newValue
  }
)

const drownItemRefs = (el) => {
  if (el) {
    drownItemRef[el.title] = el
  }
}

const handleClearClick = (label) => {
  drownItemRef[label]?.toggle()
}

const handleViewClick = (label) => {
  drownItemRef[label]?.toggle()
}

const handleTagClick = (item, index) => {
  hotFilters.value.forEach((hotInfo, i) => {
    hotInfo.isSelect = i === index
  })
}

const handleSubTagClick = (index, indey) => {
  hotFilters.value.forEach((hotInfo, i) => {
    if (i === index) {
      const subFilterItem = hotInfo.subFilterItems || []

      subFilterItem.forEach((item, j) => {
        item.isSelect = j === indey
      })
    }
  })
}
</script>

<style lang="less" scoped>
.btn-style {
  height: 25px;
  line-height: 25px;
  border-radius: 13px;
  border: 1px solid rgba(0, 0, 0, 0);
  padding: 0 3px;
  background-color: white;
}

:global(.tab-select .van-dropdown-menu) {
  display: inline-block;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-item--down) {
  top: 140px !important;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-item__content) {
  background-color: white;
  padding-top: 0px;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-menu__bar) {
  .btn-style();
  box-shadow: none;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-menu__title) {
  padding-right: 20px;
  font-size: 12px;
  color: #666;
}
:global(.tab-select .van-dropdown-menu .van-dropdown-menu__title::after) {
  right: 8px;
}

.tab-select {
  height: 29px;

  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }

  .drop-content {
    margin-top: 12px;
    margin-left: 10px;
    display: flex;
    flex-wrap: wrap;
    .d-item {
      margin-bottom: 10px;
    }
  }
}
</style>
