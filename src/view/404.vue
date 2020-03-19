<template>
  <div class="not-found">
    <div>
      <img src="../assets/not-found.gif" alt="未匹配" />
      <div class="page-text">
        页面飞走了，还不去追！
      </div>
      <div class="go">
        <router-link to="/">拜拜</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NotFound'
  }
</script>

<style lang="scss">
  .not-found {
    min-height: 90.8vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    .page-text {
      padding: 10px 0;
      border: 1px solid #ddd;
      background: #f5f5f5;
      border-radius: 3px;
    }
    .go {
      margin-top: 15px;

      span {
        cursor: pointer;
      }
    }
  }
</style>
