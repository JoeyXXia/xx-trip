<template>
  <div class="search-content">
    <div class="search-tip">
      <template v-for="(item, index) in searchResult.hotFilters" :key="item">
        <span class="item">
          {{ item.label }}
        </span>
      </template>
    </div>
    <span>{{ searchResult.items?.[0]?.commentBrief["overall"] }}</span>
    <span>{{ searchResult.items?.[0]?.commentBrief["commentBrief"] }}</span>
    <span>{{ searchResult.items?.[0]?.address }}</span>
    <span>{{
      searchResult.items?.[0]?.unitSummeries
        .splice(0, 2)
        .map((item) => item.text)
    }}</span>
    <span>{{ searchResult.items?.[0]?.unitName }}</span>
    <search-item />
  </div>
</template>

<script setup>
import SearchItem from "@/components/search-item/search-item.vue"
import useSearchStore from "@/stores/modules/seaarch"
import { storeToRefs } from "pinia"
import { ref, computed } from "vue"
const searchStore = useSearchStore()

const { searchResult } = storeToRefs(searchStore)
</script>

<style lang="less" scoped>
.search-content {
  margin: 10px 20px;
  overflow-x: hidden;

  .search-tip {
    width: 700px;
    margin: 15px 0;
    // overflow-x: hidden;
    .item {
      margin: 0 8px;
    }
  }
}
</style>
