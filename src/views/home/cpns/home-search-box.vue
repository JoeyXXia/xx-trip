<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>

        <div class="section date-range">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{startDate}}</span>
                </div>
            </div>
            <div class="stay">
                <span>1 day</span>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{endDate}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import {formatMonthDay} from '@/utils/format_date'

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
    router.push("/city")

}

// get current city
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// select date
const nowDate = new Date()
const startDate = ref(formatMonthDay(nowDate))
const newDate = nowDate.setDate(nowDate.getDate() + 1)
const endDate = ref(formatMonthDay(newDate))
</script>

<style lang="less" scoped>
        .location {
        display: flex;
        align-items: center;
        height: 43px;
        padding: 0 20px;
        .city {
            flex: 1;
            color: #333;
            font-size: 15px;
        }

        .position {
            width: 74px;
            display: flex;
            align-items: center;

            .text {
                position: relative;
                top: 2px;
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
        .section {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            padding: 0 20px;
            color: #999;
            height: 44px;

            .start {
                flex: 1;
                display: flex;
                height: 44px;
                align-items: center;
            }

            .end {
                min-width: 30%;
                padding-left: 20px;
            }

            .date {
                display: flex;
                flex-direction: column;

                .tip {
                    font-size: 12px;
                    color: #999;
                }

                .time {
                    margin-top: 3px;
                    color: #333;
                    font-size: 15px;
                    font-weight: 500;
                }
            }
        }

        .date-range {
            .stay {
                flex: 1;
                text-align: center;
                font-size: 12px;
                color: #666;
            }
        }

</style>