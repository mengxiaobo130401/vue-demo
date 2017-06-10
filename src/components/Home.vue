<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="home in homeData">
        <div>
          <span class="project_classify">名称：</span>
          <span>{{ home.name }}</span>
        </div>
        <div>
          <span class="project_classify">日期：</span>
          <span>{{ home.time }}</span>
        </div>
        <div>
          <span class="project_classify">简介：</span>
          <span>{{ home.text }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        msg: 'home',
        homeData: [
          {
            name: '矮子',
            time: '2017/5/8 13:22',
            text: 'dhasgdjasgdjh'
          },
          {
            name: '矮子',
            time: '2017/5/8 13:22',
            text: 'dhasgdjasgdjh'
          },
          {
            name: '矮子',
            time: '2017/5/8 13:22',
            text: 'dhasgdjasgdjh'
          },
          {
            name: '矮子',
            time: '2017/5/8 13:22',
            text: 'dhasgdjasgdjh'
          }
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
  ul li{
    border-bottom: 1px solid #999;
    padding: 10px 0;
  }
  .project_classify {
    display: inline-block;
    width: 40px;
  }

</style>

