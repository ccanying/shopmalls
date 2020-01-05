<template>
 <div id="home">
    <navbar class="navbar-home">

    </navbar>
 </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar';
import {getHomeMutidata} from '@/network/home.js'
export default {
  created() {
    getHomeMutidata().then(
      res=>{
        let re=res.data
        this.banner=re.banner.list;
        this.dKeyword=re.dKeyword.list;
        this.keywords=re.keywords.list;
        this.recommend=re.recommend.list;
      }
    )
  },
  data () {
    return {
      banner:[],
      dKeyword:[],
      keywords:[],
      recommend:[]
    }
  },
  methods: {},
  components:{
    navbar
  }
};
</script>
<style  scoped>
.navbar-home{
  background-color: var(--color-tint)
}
</style>