<template>
  <div class="article-wrapper" v-loading.lock='loading' element-loading-background="rgba(255, 255, 255, 0.8k)">
    <div class="article-content">
      <template v-if="Object.keys(article).length > 0">
        <div class="panel">
          <div class="header topic_header">
            <div class="topic_full_title">
              <p class="put_top">置顶</p>
              {{article.title}}
            </div>
            <div class="user-info">
              <span>
                发布于{{$moment(article.create_at, 'YYYY-MM-DD').startOf('day').fromNow()}}
              </span>
              <span>
            作者：
            <router-link :to='{name:"User", params:{name: article.author.loginname}}'>
            {{article.author.loginname}}
          </router-link>
          </span>
              <span>浏览量：{{article.visit_count}}</span>
              <span>来自：{{article.tab}}</span>
            </div>
          </div>
          <div class="inner topic">
            <div class="topic_content" v-html='article.content'></div>
          </div>
        </div>
        <div class='panel reply'>
          <div class="reply-header">
            <p class="col_fade">评论</p>
            <p class="col_fade"><span style="color:#08c;">{{article.reply_count}}</span>层楼</p>
          </div>
          <template v-for='(reply, index) in article.replies'>
            <div class='reply-item' :key="index">
              <div class="author-content">
                <router-link class="user-avatar" :to='{name: "UserRoute",params:{name: reply.author.loginname}}'>
                  <img :src='reply.author.avatar_url' :title="reply.author.loginname">
                </router-link>
                <div class="reply-user-info">
                  <router-link class="dark reply_author"
                               :to='{name: "UserRoute",params:{name: reply.author.loginname}}'>
                    {{reply.author.loginname}}
                  </router-link>
                    <span class="reply-time">{{index + 1}}楼•{{$moment(reply.create_at, 'YYYY-MM-DD').startOf('day').fromNow()}}</span>
                  <span class="reply-by-author" v-if="article.author.loginname === reply.author.loginname">作者</span>
                </div>
              </div>
              <div
                class="reply-content"
                :class="article.author.loginname"
                v-html='reply.content'>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
    <template v-if="Object.keys(article).length > 0">
      <PSider :author="article.author.loginname" />
    </template>
  </div>
</template>

<script>
  import PSider from '../components/p-sider/p-sider';

  export default {
    name: "view-article",
    data () {
      return {
        article: {},
        loading: true,
      };
    },
    components: {
      PSider
    },
    computed: {
      createdTime () {
        return String(this.article.create_at).match(/.{10}/)[0];
      },
      replyTime () {
        return function (time) {
          return String(time).match(/.{10}/)[0];
        }
      }
    },
    mounted () {
      this.getTopicApi();
    },
    methods: {
      getTopicApi () {
        const path = this.$route.path;
        this.$api.getTopic(path).then(result => {
          const data = result.data.data;
          if (result.status === 200) {
            this.article = data;
            this.loading = false;
          }
        }).catch(e => {
          console.log('portal.vue: ', e.data.data);
        });
      }
    }
  }
</script>

<style lang="scss">
  .article-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 100vh;
    .article-content {
      flex: .98;
    }
    .panel {
      margin-bottom: 13px;
      .header {
        padding: 10px;
        border-radius: 3px 3px 0 0;
        &.topic_header {
          background: white;
          color: #333333;
          .topic_full_title {
            display: flex;
            align-items: center;
            font-size: 22px;
            font-weight: 700;
            margin: 8px 0;
            .put_top {
              background: #80bd01;
              padding: 2px 4px;
              border-radius: 3px;
              color: white;
              font-size: 12px;
              height: 20px;
              margin-right: 5px;
            }
          }
          .user-info {
            font-size: 12px;
            color: #838383;
            margin-bottom: 4px;
            span a {
              color: #838383;
              text-decoration: none;
            }
            span:not(:first-child):before {
              content: "｜";
            }
          }
        }
      }
      .inner {
        &.topic {
          padding: 10px;
          border-top: 1px solid #e5e5e5;
          border-radius: 0 0 3px 3px;
          background: white;
          .topic_content {
            margin: 0 10px;
            color: #333;
            h1, h2, h3, h4, h5, h6 {
              margin: 20px 0 15px;
              padding-bottom: 6px;
              border-bottom: 1px solid #eee;
            }
            .markdown-text a {
              color: #08c;
              text-decoration: none;
            }
            p {
              font-size: 15px;
              line-height: 1.7em;
              overflow: auto;
            }
          }
        }
      }
    }
    .reply {
      display: flex;
      flex-direction: column;
      .reply-header {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        background-color: #f6f6f6;
        border-radius: 3px 3px 0 0;
        .col_fade {
          color: #444;
          font-size: 14px;
        }
      }
      .reply-item {
        display: flex;
        flex-direction: column;
        background: #ffffff;
        padding: .5rem;
        border-top: 1px solid #f0f0f0;
        .author-content {
          display: flex;
          .user-avatar {
            color: #08c;
            text-decoration: none;
            img {
              width: 2rem;
              height: 2rem;
              border-radius: 3px;
            }
          }
          .reply-user-info {
            margin-left: .5rem;
            font-size: 14px;
            a.dark {
              color: #666;
              text-decoration: none;
            }
            .reply-time {
              color: #08c;
              font-size: 11px;
            }
            .reply-by-author {
              color: #fff;
              background-color: #6ba44e;
              padding: 2px 5px;
              font-size: 12px;
              border-radius: 3px;
              margin-left: 3px;
            }
          }
        }
        .reply-content {
          padding-left: 50px;
          color: #333;
          margin-top: -1rem;
          .markdown-text p, .preview p {
            font-size: 15px;
            white-space: pre-wrap;
            word-wrap: break-word;
            margin-bottom: 1em;
          }
        }
      }
    }
  }
</style>

