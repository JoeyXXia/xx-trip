<template>
  <div class="search-bar">
    <div class="left">
      <van-icon name="arrow-left" size="22px" />
    </div>

    <div class="title">
      <div class="city">广州</div>
      <div class="date">
        <div class="check-in">住-7.25</div>
        <div class="check-out">离-7.25</div>
      </div>
      <div class="tips">搜索波尔邋遢的的景点</div>
    </div>

    <div class="right">
      <van-icon name="wap-nav" size="22px" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.search-bar {
  margin: 8px 8px;
  display: flex;
  // justify-content: center;
  align-items: center;

  .left {
    margin: 8px 8px;
    display: flex;
    justify-content: flex-start;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    .city {
      font-size: 18px;
      padding: 6px 6px;
    }

    .date {
      display: flex;
      flex-direction: column;
      padding: 6px 6px;
    }
    .tips {
      color: grey;
      padding: 6px 6px;
    }
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
