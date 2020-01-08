<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-ber-main></tab-ber-main>
  </div>
</template>

<script>
import TabBerMain from './components/content/TabBerMain/TabBerMain'
export default {
  name: 'app',
  components: {
    TabBerMain
  }
}
</script>

<style>
@import "./assets/css/base.css"
</style>
