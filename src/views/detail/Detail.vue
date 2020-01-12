<template>
  <div >
     <detail-nav-bar></detail-nav-bar>
      <detail-swiper :images="topImages"/>
  </div>
</template>

<script>
 import DetailNavBar from './childComps/DetailNavBar'
 import DetailSwiper from './childComps/DetailSwiper'
export default {
  data () {
    return {
       topImages: []
    }
  },
  created() {
     this._getDetail(this.iid)

  },
  methods: {},
  components:{
     DetailNavBar,
     DetailSwiper,
  }
};
</script>
<style  scoped>
</style>