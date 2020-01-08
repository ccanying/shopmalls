<template>
  <div id="app">
    <keep-alive>
    <tab-ber-main></tab-ber-main>
    </keep-alive>
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
