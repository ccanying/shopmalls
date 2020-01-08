<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div><span>{{item.title}}</span></div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      recommends: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    margin-top: 10px;
    font-size: 14px;
    padding-bottom: 30px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
    text-align: center;
     box-sizing:border-box;
  }

  .recommend img {
   
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
    overflow: hidden;
  }
</style>