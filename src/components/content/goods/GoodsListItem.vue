<template>
  <div class="goods-item" @click="itemClick">
   <img :src=pathss(this.goodsItem.show.img) alt="" @load="imgLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      iid:null
    }
  },
  props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      
      
    }, 
      
    
  methods: {
    pathss(index){
        let poo="http://127.0.0.1:8081/img/"+index
        return  poo
      },
        imgLoad() {
		    this.$bus.$emit('imgLoad')
	    },
    itemClick(){
     const iid = this.goodsItem.page;
     console.log(iid)
     this.$router.push( '/detail/'+this.goodsItem.page)
    }
  }
};
</script>
<style  scoped>
.goods-item {
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
   .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~@/assets/img/common/collect.svg") 0 0/14px 14px;
  }

</style>