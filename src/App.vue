<template>
  <div id="app">
    <div style="display: flex;justify-content: center;">

      <ui-layout style="height:100vh">
        <ui-sider>
          sider
        </ui-sider>
        <ui-layout>
          <ui-header>
            header
          </ui-header>
          <ui-content>
            content
          </ui-content>
          <ui-footer>
            footer
          </ui-footer>
        </ui-layout>
      </ui-layout>
    </div>
  </div>
</template>

<script>


  export default {
    name: 'app',
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  * {
    margin:0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
