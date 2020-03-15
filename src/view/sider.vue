<template>
  <div class='secDiv'>
    <div>
      <img :src='userInfo.avatar_url'>
      <span>{{userInfo.loginname}}</span>
    </div>
    <p>分数：{{userInfo.score}}</p>
    <p>Github: https://github.com/{{userInfo.githubUsername}}</p>
  </div>
</template>

<script>
  export default {
    name: "sider",
    data () {
      return {
        userInfo: {
          avatar_url: '',
        },
      };
    },
    mounted () {
      this.getGitUserApi()
    },
    methods: {
      getGitUserApi () {
        const params = 'i5ting';
        this.$api.getGitUser(params).then(result => {
          console.log(result);
        }).catch(e => {
          console.log('sider :', e);
        })
      }
    }
  }
</script>

<style scoped>
  .secDiv {
    width: 20%;
    height: 30rem;
    background: #fff;
    border: 1px solid #ddd;
    word-break: break-all;
    font-size: 21px;
  }
  img {
    width: 6rem;
    height: 6rem;
  }
</style>
