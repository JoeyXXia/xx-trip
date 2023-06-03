<template>
    <div class="home">
        <home-nav-bar/>
        <div class="banner">
            <img src="@/assets/img/home/banner.webp" alt="">
        </div>
        <div class="location">
            <div class="city">上海</div>
            <span class="position">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
        </div>
        </div>
</template>

<script setup>

import HomeNavBar from './cpns/home-nav-bar.vue'
</script>

<style lang="less" scoped>

    .banner 
    img {
        width: 100%;
    }
    .location {
        display: flex;
        align-items: center;
        height: 43px;
        padding: 0 20px;
        .city {
            flex: 1;
        }

        .position {
            width: 74px;
            display: flex;
            align-items: center;

            img {
                margin-left: 5px;
                width: 16px;
                height: 16px;
            }
        }
    }
</style>