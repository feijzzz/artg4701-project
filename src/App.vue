<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
  }
}
</script>

<style>
#app {
  font-family: 'Gotham Rounded','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0px;
  background-color: #f2f2f2;
}
</style>
