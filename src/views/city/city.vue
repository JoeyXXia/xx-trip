import { ref } from 'vue';
<template>
    <div class="city">
        <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置"  
        shape="round"
        show-action
        @cancel="cancelClick"
        />

    <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value,key,index) in allCities" :key= "key">
            <van-tab :title="value.title"></van-tab>
        </template>
    </van-tabs>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {getCityAll} from "@/services"
import  useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia';

//search
const searchValue = ref("")
const router = useRouter()
const cancelClick =  () => {
    router.back()
}

//tab
const tabActive = ref()

// network request
// const allCity= ref({})
// getCityAll().then( res=> {
//     allCity.value = res.data
// })

// store  city data
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities} = storeToRefs(cityStore)

</script>

<style lang="less" scoped>

</style>