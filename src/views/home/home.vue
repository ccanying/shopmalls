<template>
 <div id="home">
   <navbar class="navbar-home"><div slot="center">购物街</div></navbar>  
   <home-swiper ref="hSwiper" :banners="banners" @swiperLoaded="swiperLoaded"></home-swiper>
   <recommend-view :recommends="recommends"></recommend-view>
 </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar';
import {getHomeMutidata} from '@/network/home.js';
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
export default {
  created() {
    getHomeMutidata().then(
      res=>{
        let re=res.data
        this.banners=re.banner.list;
        this.dKeyword=re.dKeyword.list;
        this.keywords=re.keywords.list;
        this.recommend=re.recommend.list;
        console.log(res)
      }
    )
  },
  data () {
    return {
      banners:[],
      dKeyword:[],
      keywords:[],
      recommends: []
    }
  },
  methods: {
    swiperLoaded() {
		    this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
	    }
  },
  components:{
    navbar,
    HomeSwiper,
    RecommendView,
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
</style>