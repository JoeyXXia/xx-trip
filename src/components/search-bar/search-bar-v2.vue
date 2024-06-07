<template>
  <div class="search-bar">
    <div class="left">
      <van-icon name="arrow-left" size="22px" color="#ff9854" />
    </div>

    <div class="title">
      <div class="city">广州</div>
      <div class="date">
        <div class="check-in">住-7.25</div>
        <div class="check-out">离-7.25</div>
        <div class="triangle"></div>
      </div>
      <div class="tips">搜索波尔邋遢的的景点,.....</div>
    </div>

    <div class="right">
      <van-icon name="wap-nav" size="26px" color="#ff9854" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.search-bar {
  margin: 2px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    margin: 2px 2px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f0f0f0;
    border-radius: 6px;
    padding: 2px;

    .city {
      font-size: 18px;
      padding: 4px 4px;
    }

    .date {
      position: relative;
      display: flex;
      flex-direction: column;
      padding: 4px 4px;

      .triangle {
        position: absolute;
        right: -2px;
        bottom: 8px;

        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 6px 6px;
        border-color: transparent transparent black transparent;
      }
    }
    .tips {
      color: grey;
      padding: 6px 6px;
    }
  }

  .right {
    margin: 2px 2px;
  }
}
</style>
