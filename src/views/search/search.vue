<template>
  <div class="search">
    <div class="search-nav-bar">
      <nav-bar class="" :border="false">
        <template #title>
          <xx-search-bar
            :title="routeQuery.address"
            :start-date="routeQuery.startDate"
            :end-date="routeQuery.endDate"
            :keyword="keyword"
            :cancel-icon="showCancelIcon"
            @cancel-click="handleCancelClick"
            @search-click="handleSearchClick"
          ></xx-search-bar>
        </template>
      </nav-bar>
    </div>

    <dropdown-select :item-data="searchTop"></dropdown-select>

    <div class="tab-wrapper">
      <tab-select :item-data="searchResult.hotFilters"></tab-select>
    </div>

    <div class="list">
      <search-list-item></search-list-item>
    </div>

    <!-- <search-panel> </search-panel> -->
  </div>
</template>

<script setup>
import navBar from "@/components/nav-bar/nav-bar.vue"
import xxSearchBar from "@/components/search-bar/xx-searchbar.vue"
import searchResultItem from "./cpns/search-result-item.vue"
import searchPanel from "./cpns/search-panel.vue"
import dropdownSelect from "@/components/dropdown-select/dropdown-select.vue"
import TabSelect from "@/components/table-select/tab-select.vue"
import SearchListItem from "@/components/search-list-item/search-list-item.vue"
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"
import { getSearchResult, getSearchTop } from "@/services/modules/search"

const route = useRoute()
const router = useRouter()
const PLACEHOLDER = "搜索博尔塔拉的景点、地标、房源"

const showSearchPanel = ref(false)
const searchResult = ref([])
const searchTop = ref([])
const guessLike = ref([])

const routeQuery = ref(route.query)
const showCancelIcon = ref(false)
const keyword = ref(PLACEHOLDER)

// newwork request
getSearchTop().then((res) => {
  searchTop.value = res.data.data.allConditions
})

getSearchResult().then((res) => {
  searchResult.value = res.data.data
})

// click  event
const arrowIconClick = () => {
  router.go(-1)
}

const handleSearchClick = () => {
  showSearchPanel.value = true
}

const handleCancelClick = () => {
  keyword.value = PLACEHOLDER
  showCancelIcon.value = false
}
</script>

<style lang="less" scoped></style>
