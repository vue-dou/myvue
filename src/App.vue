<template>
  <div id="app">
    <!--    // 路由到根目录默认组件 App.vue -->
    <router-link to="/">首页</router-link>
    <router-link to="/content">内容</router-link>
    <router-link to="/helloworld">其他</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
