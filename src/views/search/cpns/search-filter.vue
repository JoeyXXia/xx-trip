<template>
  <div class="search-filter">
    <div class="position">
      位置
      <div class="triangle"></div>
    </div>
    <div class="popularity">
      欢迎度排序
      <div class="triangle"></div>
    </div>
    <div class="sort">
      筛选
      <div class="triangle"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.search-filter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
  font-size: 16px;

  .position {
    position: relative;
    .triangle {
      position: absolute;
      right: -13px;
      bottom: 5px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid grey;
    }
  }

  .popularity {
    position: relative;
    .triangle {
      position: absolute;
      right: -13px;
      bottom: 5px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid grey;
    }
  }

  .sort {
    position: relative;
    .triangle {
      position: absolute;
      right: -13px;
      bottom: 5px;
      width: 0;
      height: 0;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 6px solid grey;
    }
  }
}
</style>
