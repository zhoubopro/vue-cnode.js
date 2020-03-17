<template>
  <div class='portal-wrapper' v-loading.lock='loading'>
    <div class="header">
      <ui-nav :selected.sync="selected" class="header-nav" @update:selected="onSelected">
        <ui-nav-item name="all">全部</ui-nav-item>
        <ui-nav-item name="good">精华</ui-nav-item>
        <ui-nav-item name="share">分享</ui-nav-item>
        <ui-nav-item name="ask">问答</ui-nav-item>
        <ui-nav-item name="job">招聘</ui-nav-item>
        <ui-nav-item name="dev">测试</ui-nav-item>
      </ui-nav>
    </div>
    <div class="content">
      <template v-for='(item, index) in dataList'>
        <div class="item" :key="index">
          <div class="item-left">
            <img class="avatar" :src='item.author.avatar_url' :title='item.loginname'>
            <p class="count">
              <span class="reply-count">{{item.reply_count}}</span>/<span
              class="visit-count">{{item.visit_count}}</span>
            </p>
            <p class="top" v-if="item.top === true && (selected === 'all' || selected === 'good' || selected === 'share')">置顶</p>
            <p class="tab" v-else-if="item.tab==='share' && (selected === 'all' || selected === 'good' || selected === 'share')">分享</p>
            <p class="tab" v-else-if="item.tab==='ask' && (selected === 'all' || selected === 'good' || selected === 'share')">问答</p>
            <router-link class="title" :to='{name:"Article", params:{id:item.id}}'>
              {{item.title}}
            </router-link>
          </div>
          <div class="item-right">
            发布时间：{{regTime(item.create_at)}}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "portal",
    data () {
      return {
        dataList: [],
        activeClass: 0,
        selected: 'all',
        limit: 20,
        loading: true
      };
    },
    computed: {
      regTime () {
        return function (time) {
          return String(time).match(/.{10}/)[0];
        }
      }
    },
    mounted () {
      const params = { limit: this.limit, mdrender: false, tag: 'all', page: 1, };
      this.getTopicsApi(params);
      window.addEventListener('scroll', this.scroll);
    },
    methods: {
      getTopicsApi (params) {
        this.$api.getTopics(params).then(result => {
          this.dataList = result.data.data;
          this.limit += 10;
          this.loading = false;
        }).catch(e => {
          console.log('portal.vue: ', e.data.data);
        });
      },
      onSelected (name) {
        const params = { limit: 20, mdrender: false, tab: name, page: 1 };
        this.getTopicsApi(params);
      },
      scroll () {
        const bodyH = document.body.scrollHeight;
        const viewH = document.documentElement.clientHeight;
        const scrollH = document.documentElement.scrollTop;
        if (viewH + scrollH >= bodyH) {
          const params = { limit: this.limit, mdrender: false, tab: this.selected, page: 1 };
          this.getTopicsApi(params);
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .portal-wrapper {
    min-height: 100vh;
    width: 78%;
    .header-nav {
      display: flex;
      padding: 0 10px;
      background-color: #f6f6f6;
      border-radius: 3px 3px 0 0;
      align-items: center;
      .ui-nav-item {
        color: #08c;
        cursor: pointer;
        &:hover {
          color: #80bd01;
        }
      }
    }
    .content {
      .item {
        display: flex;
        align-items: center;
        padding: 10px;
        background: #fff;
        font-size: 14px;
        justify-content: space-between;
        &:not(:first-child) {
          border-top: 1px solid #f0f0f0;
        }
        &:hover {
          background: #f5f5f5;
        }
        &:last-child {
          border-radius: 0 0 3px 3px;
        }
        .item-left {
          display: flex;
          align-items: center;
          max-width: 80%;
          .avatar {
            width: 30px;
            height: 30px;
            border-radius: 3px;
          }
          .count {
            width: 70px;
            text-align: center;
            .reply-count {
              color: #9e78c0;
              font-size: 14px;
            }
            .visit-count {
              font-size: 10px;
              color: #b4b4b4;
            }
          }
          .top {
            background: #80bd01;
            padding: 2px 4px;
            color: #fff;
            font-size: 12px;
            border-radius: 3px;
          }
          .tab {
            background-color: #e5e5e5;
            color: #999;
            padding: 2px 4px;
            font-size: 12px;
            border-radius: 3px;
          }
          .title {
            color: #333;
            font-size: 16px;
            text-decoration: none;
            padding: 0 5px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: block;
            &:hover {
              text-decoration: underline;
            }
            &:visited {
              color: #9e78c0;
            }
          }
        }
        .item-right {
        }
      }
    }
  }
</style>
