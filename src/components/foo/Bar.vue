<template>
  <div class="bar">
    <h1>{{ msg }}</h1>
    <div v-for="o in obj">
      <p>{{ o.name }}</p>
      <p>{{ o.value }}</p>
      <p>{{ o.text }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'bar',
    data () {
      return {
        msg: 'bar',
        obj: [
          { name: '123', value: '223', text: 'sjdhsjkahdkj' },
          { name: '123', value: '223', text: 'sjdhsjkahdkj' }
        ]
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

