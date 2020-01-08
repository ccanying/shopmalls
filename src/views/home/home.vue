<template>
 <div id="home">
   <navbar class="navbar-home"><div slot="center">购物街</div></navbar>  
   <tab-control ref="topTab" :titles=title v-show="showTabControl" class="tab-control" @tabClick="tabClick"></tab-control>
   <scroll :probe-type="3"
            :pull-up-load="true"
            class="content"
            :data="[showGoodsList]"
            @pullingUp="loadMore"
            @scroll="contentScroll"
            ref="scroll">
   <home-swiper ref="hSwiper" :banners="banners" @swiperLoaded="swiperLoaded"></home-swiper>
   <recommend-view :recommends="recommends"></recommend-view>
   <feature-view></feature-view>
   <tab-control ref="contentTab" :titles=title class="tab-control" @tabClick="tabClick"></tab-control>
   <goods-list :goods="showGoodsList"></goods-list>
   <ul>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
     <li>ss</li>
   </ul>
   </scroll>
  <back-top @click.native="backTop"></back-top>
   
 </div>
</template>

<script>
//公共组件
import navbar from '@/components/common/navbar/navbar';
import TabControl from '@/components/content/tabControl/tabControl';
import GoodsList from '@/components/content/goods/GoodsList';
import Scroll from '@/components/common/scroll/scroll'
import BackTop from '@/components/content/backTop/BackTop'
//首页组件
import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/RecommendView';
import FeatureView from './childComps/FeatureView';

//接口请求
import {getHomeMutidata,getHomeGoods} from '@/network/home.js';

//公共方法
import {debonce} from '@/common/utils.js'

export default {

  created() {
    //请求轮播和tab导航数据
    this.getHomeMutidata();

    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("news");
    this.getHomeGoods("sell");
     
  },

  data () {
    return {
      banners:[],
      title:["流行","新款","精选"],
      recommends: [{id:1,image:"https://s10.mogucdn.com/mlcdn/c45406/180913_036dli57aah85cb82l1jj722g887g_225x225.png",title:"十点抢券"},
                   {id:2,image:"https://s10.mogucdn.com/mlcdn/c45406/180913_25e804lk773hdk695c60cai492111_225x225.png",title:"好物特卖"},
                   {id:3,image:"https://s10.mogucdn.com/mlcdn/c45406/180913_387kgl3j21ff29lh04181iek48a6h_225x225.png",title:"内购福利"},
                   {id:4,image:"https://s10.mogucdn.com/mlcdn/c45406/180913_8d4e5adi8llg7c47lgh2291akiec7_225x225.png",title:"初秋上新"}
                   ],
      goods: {
        pop: { page: 0, list: [] },
        news: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      showTabControl: false, 
      tabOffsetTop: 0, 
      saveY: 0        
    }
  },
 computed: {
      showGoodsList() {
        
        return this.goods[this.currentType].list
      }
    },
    mounted() {
      const refresh=debounce(this.$refs.scroll.refresh,50)
      this.$bus.$on('imgLoad', () => {
      	refresh()
      })
    },
  methods: {
    

    swiperLoaded() {
		  this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
    },
  //请求轮播和tab导航数据
    getHomeMutidata(){
      getHomeMutidata().then(
        res=>{
          let re=res.data
          this.banners=re.banner.list;
          this.dKeyword=re.dKeyword.list;
          this.keywords=re.keywords.list;
          this.recommend=re.recommend.list;
          
      }
    )
    },
  //请求商品数据
    getHomeGoods(type){
      const page=this.goods[type].page+1
      getHomeGoods(type,page).then(
        res=>{
          
          this.goods[type].list.push(...res.goods);
          this.goods[type].page+=1
          this.$refs.scroll.finishedPullUp()
        }

      )
    },//事件监听
    tabClick(index) {
      
        switch (index) {
          case 0:
            this.currentType = "pop"
            console.log(411)  
            break
          case 1:
            this.currentType ="news"
           
            break
          case 2:
            this.currentType = "sell"
             
            break
        }
       this.$refs.topTab.currentIndex = index;
       this.$refs.contentTab.currentIndex = index
      },
    
         loadMore() {
        this.getHomeGoods(this.currentType)
      },
      contentScroll(position) {
      
        this.showTabControl = position.y <= -this.tabOffsetTop
      },
  },

  components:{
    navbar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
    HomeSwiper,
    RecommendView,
    FeatureView
  }
};
</script>
<style  scoped>
#home{
    height: 100vh;
    position: relative;
    
}
.navbar-home{
  background-color: var(--color-tint);
    color: #fff;
    position: relative;
  
    z-index: 9;
}
.tab-control{
    background: #fff;
    position: relative;
    z-index: 9;
  
}
.content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>