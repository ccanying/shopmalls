<template>
  <div id='tabber-item' @click="goPath">
      <div  v-if="isActive"><slot name="tabber-icon"></slot></div>
      <div  v-else><slot name="tabber-icon-active"></slot></div>
      <div :style="{'color':colors}" ><slot name="tabber-text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    paths:String,
    color:{
      type:String,
      default:"red"
    }
  },
  data () {
    return {
    }
  },
  methods: {
    goPath(){
     this.$route.path==this.paths?"":this.$router.push(this.paths)
  }
},
computed: {
  isActive(){
     return this.$route.path==this.paths?false:true
  },
 colors(){
    return this.$route.path==this.paths?this.color:''
 }
},
}
</script>

<style  scoped>
#tabber-item{
    flex: 1;
    height: 49px;
    text-align: center

}
#tabber-item img{
    height: 24px;
    width: 24px;
    
}
</style>