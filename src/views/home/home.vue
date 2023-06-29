<template>
    <div class="home">
        <home-nav-bar/>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <home-search-box/>
        <home-categories/>
        <home-content/>
        <!-- <button @click="moreBtnClick">loading more</button> -->
        </div>
</template>

<script setup>
import { watch } from 'vue';

import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue';
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from './cpns/home-content.vue'

import useHomeStore from '@/stores/modules/home';

import useScroll from '@/hooks/useScroll'

// sending network requests
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

//load more
const moreBtnClick = () => {
    console.log("load more")
    homeStore.fetchHouseListData()

}

const { isReachBottom } = useScroll()
watch(isReachBottom, (newValue) => {
    if(newValue) {
        homeStore.fetchHouseListData().then( () => {
            isReachBottom.value = false
        })
    }
})

// useScroll()

</script>

<style lang="less" scoped>
    .home {
        padding-bottom: 60px;
    .banner
    img {
        width: 100%;
    }
}

</style>