<template>
  <div class="about-wrapper">
    <div class="panel">
      <div class="header">
        关于
      </div>
      <div class="inner topic">
        <h3>
          关于
        </h3>
        <div class="content">
          <h4>Vue初/中级项目【cnodejs.org社区】</h4>
          <p>技术栈</p>
          <ul>
            <li>Vue.js</li>
            <li>Vue-router</li>
            <li>Axios</li>
          </ul>
          <a href='https://github.com/zhoubopro/vue-cnode.js' taget='_blank'>Git地址</a>
          <span><strong>欢迎👏Star</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "about"
  }
</script>

<style scoped lang="scss">
  .about-wrapper {
    width: 65%;
    margin: 20px 0 0 70px;
    height: 100vh;
    .panel {
      margin-bottom: 13px;
      .header {
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        color: #999999;
        font-size: 14px;
      }
      .inner{
        background-color: #fff;
        border-radius: 0 0 3px 3px;
        &.topic{
          padding: 10px;
          border-top: 1px solid #e5e5e5;
        }
        h3{
          margin: 0 0 15px;
          border-bottom: 1px solid #eee;
          font-size: 24.5px;
        }
        .content{
          margin: 0 0 0 20px;
        }
      }
    }
  }
</style>
