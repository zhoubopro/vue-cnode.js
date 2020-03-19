<template>
  <div class="user-wrapper">
    <div class="author">
      <div class="header">
        个人信息
      </div>
      <div class="content">
        <span :to='{name: "User",params:{name: userInfo.loginname}}'>
          <img :src='userInfo.avatar_url'>
          <span>{{userInfo.loginname}}</span>
        </span>
        <div>
          <p>积分：{{userInfo.score}}</p>
          <p>
            注册时间：
            {{$moment(userInfo.create_at, 'YYYY-MM-DD')
            .startOf('day')
            .fromNow()}}
          </p>
          <p>
            Github：
            <router-link :to='"https://github.com/" + userInfo.githubUsername' target="_blank"
                         rel="nofollow noopener noreferrer">
              {{userInfo.githubUsername}}
            </router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="author">
      <div class="header">
        最近创建的话题
      </div>
      <div class="content">
        <template v-for="(topics, index) in userInfo.recent_topics">
          <div class="item" :key="index">
            <div class="left">
              <img :src="topics.author.avatar_url" alt="">
              {{topics.title}}
            </div>
            <div>
              {{$moment(topics.last_reply_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()}}
            </div>
          </div>
        </template>
      </div>
    </div>
    <div class="author">
      <div class="header">
        最近参与的话题
      </div>
      <div class="content">
        <template v-for="(replies, index) in userInfo.recent_replies">
          <div class="item" :key="index">
            <div class="left">
              <img :src="replies.author.avatar_url" alt="">
              {{replies.title}}
            </div>
            <div>
              {{$moment(replies.last_reply_at, 'YYYY-MM-DD')
              .startOf('day')
              .fromNow()}}
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user",
    data(){
      return{
        userInfo: {}
      }
    },
    mounted () {
      this.getGitUserApi();
    },
    methods: {
      getGitUserApi () {
        const params = this.$route.params.name;
        if (params !== '') {
          this.$api.getGitUser(params).then(result => {
            const data = result.data.data;
            this.userInfo = data;
          }).catch(e => {
            console.log('sider :', e);
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .user-wrapper {
    width: 80%;
    margin: 0 auto ;
    .author {
      &:not(:last-child){
        margin-bottom: 13px;
      }
      .content {
        background: white;
        padding: 10px;
        border-radius: 0 0 3px 3px;
        span {
          display: inline-flex;
          align-items: center;
        }
        img {
          width: 50px;
          height: 50px;
          border-radius: 3px;
          margin-right: 5px;
        }
        span {
          color: darkgray;
        }
        p {
          font-size: 12px;
        }
        .item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 0;
          color: #444;
          border-bottom: 1px darkgray dashed;
          .left{
            display: flex;
            align-items: center;
          }
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
