<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">上海</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

//  GPS postion 
const positionClick = () => {
    navigator.geolocation.getCurrentPosition( res => {
        console.log("position",res)
        // console.log(navigator.userAgentData.brands);
    }, err => {
        console.log("err",err)
    })
}
// city
const cityClick = () => {
    console.log("city")
    router.push("/city")

}
</script>

<style lang="less" scoped>
    .search-box {

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

            .text {
                font-size: 12px;
                margin-right: 3px;
                
            }

            img {
                margin-left: 5px;
                width: 16px;
                height: 16px;
            }
        }
    }
    }
</style>