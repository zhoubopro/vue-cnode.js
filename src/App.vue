<template>
  <div id="app">
    <p-header />
    <router-view name='main'></router-view>
    <router-view name='sider'></router-view>
  </div>
</template>

<script>
  import PHeader from './components/p-header/p-header'
  export default {
    name: 'app',
    components:{
      PHeader
    }
  }
</script>

<style lang="scss">
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
  }
  #app {
    color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #e1e1e1;

  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .markdown-text a {
    color: #08c;
  }
</style>
