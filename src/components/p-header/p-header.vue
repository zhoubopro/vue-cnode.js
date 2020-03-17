<template>
  <div class="header-wrapper">
    <div class="header-inner">
      <div class="header-container">
        <div class="header-left">
          <router-link to="/" class="logo">
            <!--<icon name='cnodejs' scale='35'></icon>-->
            <img src="../../assets/cnodejs.svg" alt="logo">
          </router-link>
          <ui-input type="text" />
        </div>
        <div class="header-right">
          <ul class="nav">
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/white">新手入门</router-link>
            </li>
            <li>
              <router-link to="/api">API</router-link>
            </li>
            <li>
              <router-link to="/about">关于</router-link>
            </li>
            <li>
              <router-link to="/register">注册</router-link>
            </li>
            <li>
              <router-link to="/login">登陆</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "p-header"
  }
</script>

<style scoped lang="scss">
  .header-wrapper {
    margin-bottom: 0;
    z-index: 9;
    width: 100%;
    position: relative;
    background: #444;
    font-size: 13px;
    .header-inner {
      background: 0 0;
      border: none;
      box-shadow: none;
      width: 90%;
      margin: auto;
      padding: 5px;
      .header-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-width: 960px;
        max-width: 1400px;
        .header-left {
          display: flex;
          .logo {
            display: block;
            width: 160px;
            padding: 3px 20px;
            margin-left: -20px;
            height: 40px;
            line-height: 40px;
            color: #ccc;
            font-weight: 700;
          }
        }
        .header-right {
          .nav {
            list-style: none;
            display: flex;
            li {
              display: flex;
              align-items: center;
              a {
                text-shadow: none;
                color: #ccc;
                text-decoration: none;
                padding: 10px 15px;
                &:hover{
                  color: white;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
