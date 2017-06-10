<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li @click="increment"><router-link to="/">home</router-link></li>
        <li><router-link to="/foo">foo</router-link></li>
      </ul>
    </div>
    <div class="main">
      <h1>{{ count }}</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {

    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .nav{
    position: fixed;
    width: 108px;
    left: 40px;
  }
  .nav ul{
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .nav ul li{
    width: 108px;
    height: 48px;
    line-height: 48px;
    border:1px solid #dadada;
    text-align: center;
  }
  .nav ul li a{
    text-decoration: none;
  }

  .main{
    height: 400px;
    margin-left: 180px;
    margin-right: 25px;
  }
</style>
