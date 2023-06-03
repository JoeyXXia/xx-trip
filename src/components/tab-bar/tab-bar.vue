<template>
    <div class="tab-bar">
        <template v-for="(item,index) in tabbarData">
            <div 
            class="tab-bar-item" 
            :class="{active: currentIndex === index}"
            @click="itemClickk(index,item)"
            >
            <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
            <span class="text">{{ item.text }}</span> 
        </div>
        </template>
</div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const currentIndex = ref(0)
const router = useRouter()
const itemClickk = (index,item) => {
    currentIndex.value = index
    router.push(item.path)
}

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

            &.active {
                color: var(--primary-color);
            }
            .text  {
                font-size: 12px;
            }
            img {
                width: 36px;
            }
        }
    }
</style>