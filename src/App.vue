<template>
  <div id="app">
    <router-view/>
    <Homepage/>
  </div>
</template>
<script type="text/ecmascript-6">
  import Homepage from './components/Homepage'

  export default {
    name: "App",
    components: {
      Homepage
    }
  }
</script>
<style scoped>
  #app {
    width: 100%;
    height: 100%;
  }
</style>

