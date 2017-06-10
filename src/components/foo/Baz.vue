<template>
  <div class="baz">
    <h1>{{ msg }}</h1>
    <h2>{{ test }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'baz',
    data () {
      return {
        msg: 'baz',
        test: 'baz skjdksjsjd'
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

