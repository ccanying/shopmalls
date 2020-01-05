<template>
  <div id='tabbar'> 
      <slot></slot>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {}
};
</script>
<style  scoped>
#tabbar{
display: flex;
background: #f6f6f6;
position: fixed;
bottom: 0px;
right: 0px;
left: 0px;
box-shadow: 0px -1px 1px rgba(100,100,100,0.2)
}
</style>