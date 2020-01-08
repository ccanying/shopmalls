<template>
  <div >
      <tab-ber>
      <tab-ber-item paths="/home" color="red">
        <div slot='tabber-text'>首页</div>
        <img slot='tabber-icon' src="~@/assets/img/tabbar/home.svg" alt="">
        <img slot="tabber-icon-active" src="~@/assets/img/tabbar/home_active.svg">
      </tab-ber-item>
      <tab-ber-item paths="/category" color="blue">
        <div slot='tabber-text'>分类</div>
        <img slot='tabber-icon' src="~@/assets/img/tabbar/category.svg" alt="">
        <img slot="tabber-icon-active" src="~@/assets/img/tabbar/category_active.svg">
      </tab-ber-item>
      <tab-ber-item paths="/cart" color="red">
       <div slot='tabber-text'>购物车</div>
        <img slot='tabber-icon' src="~@/assets/img/tabbar/shopcart.svg" alt="">
         <img slot="tabber-icon-active" src="~@/assets/img/tabbar/shopcart_active.svg">
      </tab-ber-item>
      <tab-ber-item paths="/profile" color="blue">
       <div slot='tabber-text'>个人</div>
        <img slot='tabber-icon' src="~@/assets/img/tabbar/profile.svg" alt="">
         <img slot="tabber-icon-active" src="~@/assets/img/tabbar/profile_active.svg">
      </tab-ber-item>
    </tab-ber>
  </div>
</template>
<script>
import TabBer from '@/components/common/tabbar/TabBar';
import TabBerItem from '@/components/common/tabbar/TabBarItem';
export default {
  components:{
    TabBer,
    TabBerItem
  },
  data () {
    return {
    }
  },
  methods: {}
};
</script>
<style  scoped>
</style>