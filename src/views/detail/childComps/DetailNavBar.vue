<template>
  <navbar>
      <img slot="left" class="back" @click="backClick" src="~@/assets/img/common/back.svg" alt="">
      <div slot="center" class="title">
          <div class="title-item" v-for="(item, index) in titles"  :key="index"  :class="{active: currentIndex === index}" @click="titleClick(index)">{{item}}</div>
      </div>
  </navbar>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
export default {
    props:{
        titles: {
				type: Array,
        default: () => {
        	return ['商品', '参数', '评论', '推荐']
        }
      },
      currentIndex: {
				type: Number,
        default: 0
      }
    },

  data () {
    return {
        	currentIndex: 0
    }
  },
  methods: {
      backClick() {
	    	this.$router.back()
      },
      titleClick(index){
        this.currentIndex=index
      }
  },
  components: {
			navbar
    },
};
</script>
<style  scoped>
.back {
    margin-top: 12px;
  }
  .title {
    display: flex;
    padding: 0 20px;
  }
   .title-item {
    flex: 1;
    font-size: 14px;
  }
  .title-item.active {
    color: var(--color-high-text)
  }
</style>