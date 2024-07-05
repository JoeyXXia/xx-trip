<template>
  <div class="search-panel">
    <van-search
      v-model="value"
      show-action
      shape="round"
      placeholder="搜索广州的景点、地标、房源"
      @search="onSearch"
      @cancel="onCancel"
    />
  </div>
  
</template>

<script setup></script>

<style lang="less" scoped></style>
