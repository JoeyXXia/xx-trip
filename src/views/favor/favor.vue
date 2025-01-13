<template>
  <div class="favor">
    <nav-bar left-arrow left-text="旅途">
      <template #title>
        <van-tabs v-model:active="active" type="card" shrink>
          <van-tab v-for="item in titles" :title="item"></van-tab>
        </van-tabs>
      </template>
    </nav-bar>

    <!-- my favor -->
    <div v-if="active === 0" class="favor">
      <van-tabs v-model:active="activeName">
        <van-tab title="房屋" name="house">
          <div class="content">
            <template v-for="(item, index) in favorList">
              <search-list-item :item-data="item"> </search-list-item>
            </template>
          </div>
        </van-tab>

        <van-tab title="房东" name="landlord">
          <div class="content">
            <div v-if="landlordList.length" class="list"></div>
            <div v-else class="no-data">
              <img
                src="@/assets/img/favor/empty_favorite.44731802.png"
                alt=""
                class="icon-no-data"
              />
              <div class="name">暂无收藏</div>
              <div class="desp">
                点击
                <img src="@/assets/img/favor/favor.png" alt="" />
                即可收藏对应房东
              </div>
              <button class="btn" @click="handleBtnClick">随便去逛逛</button>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- my history -->
    <div v-if="active === 1" class="history">
      <div class="content">
        <template v-for="(item, index) in historyList">
          <search-list-item :item-data="item"> </search-list-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/nav-bar/nav-bar.vue"
import SearchListItem from "@/components/search-list-item/search-list-item.vue"

import { ref } from "vue"
import { getFavorList, getHistoryList } from "@/services"
import { useRouter } from "vue-router"

const router = useRouter()
const titles = ["我的收藏", "浏览历史"]
const active = ref(0)
const activeName = ref("house")

const favorList = ref([])
const historyList = ref([])
const landlordList = ref([])

getFavorList().then((res) => {
  favorList.value = res.data.data.items || []
})

getHistoryList().then((res) => {
  historyList.value = res.data.data.items || []
})

const handleBtnClick = () => {
  router.push("/")
}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 20px 55px 20px;
  .no-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon-no-data {
      width: 100%;
    }
    .name {
      color: #333;
      font-size: 18px;
      font-weight: 500;
      line-height: 27px;
    }
    .desp {
      color: #666;
      font-size: 14px;
      line-height: 18px;
      margin: 7px auto 36px;

      img {
        position: relative;
        top: 4px;
        width: 12px;
      }
    }

    .btn {
      padding: 0 38px;
      height: 40px;
      line-height: 40px !important;
      font-size: 16px;
      color: #fff;
      background-color: var(--primary-color);
      border-radius: 20px;
      border: none;
      outline: none;
    }
  }
}
</style>
