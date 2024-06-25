<template>
  <div class="search">
    <search-header />
    <search-filter />
    <search-content />
  </div>
</template>

<script setup>
import searchHeader from "./cpns/search-header.vue"
import searchFilter from "./cpns/search-filter.vue"
import searchContent from "./cpns/search-content.vue"
import useSearchStore from "@/stores/modules/seaarch"

const searchStore = useSearchStore()
searchStore.fetchSearchTopData()
searchStore.fetchSearchResultData()
</script>

<style lang="less" scoped></style>
