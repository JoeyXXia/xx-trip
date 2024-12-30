<template>
  <div class="tool-bar">
    <img :src="itemData.logoUrl" alt="" class="avatar" />
    <div class="collection">
      <img
        src="../../assets/img/search/tj-mob-ui_unit-item_collected-new.png"
        alt=""
        class="heart-img"
      />
      <span v-if="itemData.favoriteCount">{{ itemData.favoriteCount }}</span>
    </div>
    <div class="message">
      <img
        src="../../assets/img/search/tj-mob-ui_unit-item_comment-new.png"
        alt=""
        class="msg-img"
      />
      <span>{{ itemData.totalCount }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  itemData: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="less" scoped>
.tool-bear {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 5px;
}
.collection,
.message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  .msg-img,
  .heart-img {
    width: 30px;
    height: 30px;
  }
  span {
    color: white;
  }
}
</style>
