<template>
  <div class='sider-wrapper'>
    <div class="login" v-if="author === ''">
      <p>CNode：Node.js专业中文社区</p>
      <p>
        当前是游客状态，您可以
        <router-link to="/">登录</router-link>
      </p>
    </div>
    <div class="author"  v-else>
      <div class="header">
        作者
      </div>
      <div class="content">
        <router-link :to='{name: "UserRoute",params:{name: userInfo.loginname}}'>
          <img :src='userInfo.avatar_url'>
          <span>{{userInfo.loginname}}</span>
        </router-link>
        <div>
          <p>积分：{{userInfo.score}}</p>
        </div>
      </div>
    </div>
    <div class="links">
      <div class="header">
        友情社区
      </div>
      <div class="items">
        <router-link to="https://ruby-china.org/">
          <img src="http://static2.cnodejs.org/public/images/ruby-china-20150529.png" alt="">
        </router-link>
        <router-link to="http://phphub.org/">
          <img src="http://static2.cnodejs.org/public/images/phphub-logo.png" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "sider",
    data () {
      return {
        userInfo: {},
        val: '',
      };
    },
    props:{
      author: {
        type: String,
        default: ''
      }
    },
    mounted () {
      this.getGitUserApi();
    },
    methods: {
      getGitUserApi () {
        const params = this.author;
        if(params !== ''){
          this.$api.getGitUser(params).then(result => {
            const data = result.data.data;
            this.userInfo = data;
          }).catch(e => {
            console.log('sider :', e);
          })
        }
      }
    },
    watch: {
      route(o, n){
        console.log(o, n);
      }
    }
  }
</script>

<style scoped lang="scss">
  .sider-wrapper {
    width: 20%;
    word-break: break-all;
    .login {
      background: #fff;
      color: #333;
      font-size: 1rem;
      padding: 10px;
      border-radius: 3px;
      a {
        color: #08c;
      }
    }
    .author{
      .content{
        background: white;
        padding: 10px;
        border-radius: 0 0 3px 3px;
        a{
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        img{
          width: 50px;
          height: 50px;
          border-radius: 3px;
          margin-right: 5px;
        }
        span{
          color: darkgray;
        }
        p{
          font-size: 12px;
        }
      }
    }
    .links {
      margin-top: 13px;
      .items {
        background: #fff;
        border-radius: 0 0 3px 3px;
        padding: 10px;
        img {
          width: 160px;
        }
      }
    }
    .header {
      color: #444;
      font-size: 13px;
      border-radius: 3px 3px 0 0;
      padding: 10px;
      background-color: #f6f6f6;
    }
  }
</style>
