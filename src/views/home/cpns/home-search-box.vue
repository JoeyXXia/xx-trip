<template>
    <div class="search-box">
        <div class="location">
            <div class="city" @click="cityClick">{{currentCity.cityName}}</div>
            <div class="position" @click="positionClick">
                <span class="text">我的位置</span>
            <img src="@/assets/img/home/icon_location.png" alt="">
            </div>
        </div>

        <div class="section date-range" @click="showCalendar = true">
            <div class="start">
                <div class="date">
                    <span class="tip">入住</span>
                    <span class="time">{{startDate}}</span>
                </div>
            </div>
            <div class="stay">
                <span>共 {{ stayCount }} 晚</span>
            </div>
            <div class="end">
                <div class="date">
                    <span class="tip">离店</span>
                    <span class="time">{{endDate}}</span>
                </div>
            </div>
        </div>
        <van-calendar 
            v-model:show="showCalendar" 
            type="range" 
            :round="false"
            color="#ff9854"
            @confirm="onConfirm" 
            />

        <div class="section price-couter bottom-gray-line">
            <div class="start">价格不限</div>
            <div class="end">人数不限</div>
        </div>

        <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

        <div class="section hot-suggests">
            <template v-for="(item,index) in hotSuggests" :key="index">
                <div
                    class="item"
                    :style="{color:item.tagText.color,background:item.tagText.background.color}"
                >
                    {{  item.tagText.text }}
                </div>
            </template>
        </div>
        <div class="section search-btn">
            <div class="btn" @click="searchBtnClick">开始搜索</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city';
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import {formatMonthDay, getDiffDays} from '@/utils/format_date'

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
const newDate = new Date() 
newDate.setDate(nowDate.getDate() + 1)

const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(1)

// calendar
const showCalendar = ref(false)
const onConfirm = (value) => {
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)
    stayCount.value = getDiffDays(selectStartDate,selectEndDate)
    showCalendar.value = false
}

//hot suggest
const homeStore = useHomeStore()
const {hotSuggests} = storeToRefs(homeStore)

//search  button
const searchBtnClick = () => {
    router.push({
        path:"/search",
        query: {
            startDate:startDate.value,
            endDate: endDate.value,
            currentCity: currentCity.value.cityName
        }
    })
}
</script>

<style lang="less" scoped>

    .search-box {
        --van-calendar-popup-height:100%;
    }
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
        .price-couter {
            .start {
                border-right: 1px solid var(--line-color);
            }
        }
        .hot-suggests {
            margin: 10px 0;
            height: auto;

            .item {
                padding: 4px 8px;
                margin: 4px;
                border-radius: 14px;
                font-size: 12px;
                line-height: 1;
            }
        }
        .search-btn {
            .btn {
                width: 342px;
                height: 38px;
                max-height: 50px;
                font-weight: 500;
                font-size: 18px;
                line-height: 38px;
                text-align: center;
                border-radius: 20px;
                color: #fff;
                background-image: var(--theme-linear-gradient);
            }
        }

</style>