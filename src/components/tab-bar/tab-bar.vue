<template>
    <div class="tab-bar">
        <template v-for="(item,index) in tabbarData">
            <div class="tab-bar-item">
            <img :src="getAssetURL(item.image)" alt="">
            <span class="text">{{ item.text }}</span> 
        </div>
        </template>
</div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'

</script>

<style lang="less" scoped>
    .tab-bar {
        display: flex;
        height: 50px;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        border-top: 1px solid #ccc;

        .tab-bar-item {
            flex: 1;
            display: flex;
            color: #666;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .text  {
                font-size: 12px;
            }
            img {
                width: 36px;
            }
        }
    }
</style>