<template>
  <div >
    <router-view></router-view>
      <tab-ber>
      <tab-ber-item paths="/home" color="red">
        <div slot='tabber-text'>首页</div>
        <img slot='tabber-icon' src="~@/assets/img/home.svg" alt="">
        <img slot="tabber-icon-active" src="~@/assets/img/home_active.svg">
      </tab-ber-item>
      <tab-ber-item paths="/category" color="blue">
        <div slot='tabber-text'>分类</div>
        <img slot='tabber-icon' src="~@/assets/img/category.svg" alt="">
        <img slot="tabber-icon-active" src="~@/assets/img/category_active.svg">
      </tab-ber-item>
      <tab-ber-item paths="/cart" color="red">
       <div slot='tabber-text'>购物车</div>
        <img slot='tabber-icon' src="~@/assets/img/shopcart.svg" alt="">
         <img slot="tabber-icon-active" src="~@/assets/img/shopcart_active.svg">
      </tab-ber-item>
      <tab-ber-item paths="/profile" color="blue">
       <div slot='tabber-text'>个人</div>
        <img slot='tabber-icon' src="~@/assets/img/profile.svg" alt="">
         <img slot="tabber-icon-active" src="~@/assets/img/profile_active.svg">
      </tab-ber-item>
    </tab-ber>
  </div>
</template>a
aa
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