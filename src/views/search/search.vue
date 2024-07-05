<template>
  <div class="search">
    <div class="search-nav-bar">
      <nav-bar>nav-bar</nav-bar>
    </div>

    <!-- <search-panel /> -->
  </div>
</template>

<script setup>
import searchPanel from "./cpns/search-panel.vue"
import navBar from "@/components/nav-bar/nav-bar.vue"
import useSearchStore from "@/stores/modules/seaarch"

const searchStore = useSearchStore()
searchStore.fetchSearchTopData()
searchStore.fetchSearchResultData()
</script>

<style lang="less" scoped></style>
