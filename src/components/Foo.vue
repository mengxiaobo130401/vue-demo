<template>
  <div class="foo">
    <h1>{{ msg }}</h1>
    <ul>
      <li><router-link to="/foo/bar">bar</router-link></li>
      <li><router-link to="/foo/baz">baz</router-link></li>
    </ul>
    <router-view class="children"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'foo',
    data () {
      return {
        msg: 'foo'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>

