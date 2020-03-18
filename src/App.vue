<template>
  <div id="app">
    <p-header />
    <div class="router">
      <router-view></router-view>
    </div>
    <div class="back-top" @click="goTop" v-show="top">回到顶部</div>
  </div>
</template>

<script>
  import PHeader from './components/p-header/p-header'

  export default {
    name: 'app',
    data () {
      return {
        top: false
      }
    },
    components: {
      PHeader
    },
    mounted () {
      window.addEventListener('scroll', this.scroll);
    },
    methods: {
      scroll () {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop >= 300) {
          this.top = true
        }
        else {
          this.top = false
        }
      },
      goTop () {
        window.scrollTo(0, 0);
      }
    },
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
    background: #e1e1e1;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  .markdown-text a {
    color: #08c;
  }
  .router {
    width: 90%;
    margin: 20px auto 0;
  }
  .back-top {
    color: gray;
    padding: 10px;
    position: fixed;
    cursor: pointer;
    text-align: center;
    z-index: 20;
    background-color: #fff;
    border-radius: 12px 0 0 12px;
    top: 80%;
    right: 0;
    display: block;
    &:before{
      content:'↑';
    }
  }
</style>
